import item_data from '../../public/mock_item_data.json';
import recipe_data from '../../public/mock_recipe_data.json';

import { RecipeModel, IngredientType } from './recipe_service';
import { ItemModel, get_item_from_name } from './item_service';

export async function get_item_data(): Promise<ItemModel[]> {

    // const storage = window.localStorage;

    // const cachedItemData = storage.getItem('itemData');
    // if (cachedItemData != null) {
    //     return JSON.parse(cachedItemData);
    // } else {
    //     const request = await fetch('mock_data.json');
    //     console.log(request);
    //     const itemData = await request.json();
    //     console.log("Hello", itemData);
    //     // storage.setItem('itemData', JSON.stringify(itemData));
    //     return itemData;
    // }

    return item_data;
}

export async function get_recipe_data(): Promise<RecipeModel[]> {

    let prebuilt_ingredient_types = new Map<string, IngredientType>();
    let item_data = await get_item_data();

    recipe_data.map(data => {
        data.ingredient_types.forEach(type => {
            if (prebuilt_ingredient_types.has(type)) return;
            prebuilt_ingredient_types.set(type, {
                name: type,
                items: item_data.filter(item => item.categories.includes(type))
            })
        })
    })

    let result = Promise.all(recipe_data.map(async data => ({
            output: await get_item_from_name(data.output),
            components: await Promise.all([...Array.from(new Set(data.components))].map(async component => {
                return {
                    item: await get_item_from_name(component),
                    quantity: data.components.filter(otherComponent => otherComponent === component).length
                } 
            })),
            ingredient_types: data.ingredient_types.flatMap(type => {
                let prebuilt_type = prebuilt_ingredient_types.get(type);
                return prebuilt_type === undefined ? [] : prebuilt_type;
            }
        )
    })));

    return result;
}