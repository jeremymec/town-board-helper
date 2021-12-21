import { get_category_data } from './data_service';
import { ItemModel } from './item_service';

export interface CategoryModel {
    name: string,
    id: string,
    items: ItemModel[]
}

export function get_category_from_name(category_name: string): CategoryModel {

    console.log("Hey Listen!")
    
    const category = get_category_data().find((category) => {
        return category.name === category_name || `${category.name} (PRIMARY)` === category_name;
    });

    if (category) {
        return category;
    } else {
        console.log("ERROR OCCURED GETTING CATEGORY DATA WITH NAME", category_name);
        throw Error("An category with that name does not exist in the data.");
    }

}