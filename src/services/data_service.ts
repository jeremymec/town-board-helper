import item_data from '../../public/mock_item_data.json';
import recipe_data from '../../public/mock_recipe_data.json';

import { RecipeModel } from './recipe_service';
import { ItemModel } from './item_service';

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

    return recipe_data;
}