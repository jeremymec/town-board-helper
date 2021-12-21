import item_data_raw from '../../public/items';
import recipe_data_raw from '../../public/recipes';
import category_data_raw from '../../public/categories';

import { RecipeModel } from './recipe_service';
import { ItemModel, get_item_from_name } from './item_service';
import { CategoryModel, get_category_from_name } from './category_service';

const item_data = compute_item_data();
export const get_item_data = () => item_data;
const category_data = compute_category_data();
export const get_category_data = () => category_data;
const recipe_data = compute_recipe_data();
export const get_recipe_data = () => recipe_data;


function compute_item_data(): ItemModel[] {
    return item_data_raw;
}


function compute_category_data(): CategoryModel[] {

    return category_data_raw.map(category => {
        return {
            id: category.id,
            name: category.name,
            items: item_data.filter(item => item.categories.includes(category.name) || item.categories.includes(`${category.name} (PRIMARY)`))
        }
    })

}

function compute_recipe_data(): RecipeModel[] {
    return recipe_data_raw.map(data => ({
            output: get_item_from_name(data.output),
            components: [...Array.from(new Set(data.components))].map(component => {
                return {
                    item: get_item_from_name(component),
                    quantity: data.components.filter(otherComponent => otherComponent === component).length
                } 
            }),
            category_components: [...Array.from(new Set(data.category_components))].map(category_component => {
                return {
                    category: get_category_from_name(category_component),
                    quantity: data.category_components.filter(otherCategoryComponent => otherCategoryComponent === category_component).length
                }
            })
        }
    ));
}


