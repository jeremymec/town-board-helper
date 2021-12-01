import { get_category_data } from './data_service';
import { ItemModel } from './item_service';

export interface CategoryModel {
    name: string,
    id: string,
    items: ItemModel[]
}

export async function get_category_from_name(category_name: string): Promise<CategoryModel> {
    const categories = await get_category_data();

    const category = categories.find((category) => {
        return category.name === category_name;
    });

    if (category) {
        return category;
    } else {
        console.log("ERROR OCCURED GETTING CATEGORY DATA WITH NAME", category_name);
        throw Error("An category with that name does not exist in the data.");
    }

}