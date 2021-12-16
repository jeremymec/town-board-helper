import item_data from '../../public/items.json';
import recipe_data from '../../public/recipes.json';
import category_data from '../../public/mock_category_data.json';

import { RecipeModel } from './recipe_service';
import { ItemModel, get_item_from_name } from './item_service';
import { CategoryModel, get_category_from_name } from './category_service';

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

export async function get_category_data(): Promise<CategoryModel[]> {
    let item_data = await get_item_data();

    return category_data.map(category => {
        return {
            id: category.id,
            name: category.name,
            items: item_data.filter(item => item.categories.includes(category.name))
        }
    })

}

export async function get_recipe_data(): Promise<RecipeModel[]> {
    return Promise.all(recipe_data.map(async data => ({
            output: await get_item_from_name(data.output),
            components: await Promise.all([...Array.from(new Set(data.components))].map(async component => {
                return {
                    item: await get_item_from_name(component),
                    quantity: data.components.filter(otherComponent => otherComponent === component).length
                } 
            })),
            category_components: await Promise.all([...Array.from(new Set(data.category_components))].map(async category_component => {
                return {
                    category: await get_category_from_name(category_component),
                    quantity: data.category_components.filter(otherCategoryComponent => otherCategoryComponent === category_component).length
                }
            }))
        }
    )));
}