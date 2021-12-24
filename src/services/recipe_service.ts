import { ItemModel } from './item_service';
import { CategoryModel } from './category_service';
import { get_recipe_data } from './data_service';

export interface RecipeModel {
    output: ItemModel,
    components: RecipeItem[],
    category_components: RecipeCategory[]
    base_recipe: boolean,
    crafting_category: string
}

export interface RecipeCategory {
    category: CategoryModel,
    quantity?: number
}

export interface RecipeItem {
    item: ItemModel,
    quantity?: number
}

export function get_recipes(): RecipeModel[] {
    return get_recipe_data();
}

export function get_base_recipes(): RecipeModel[] {
    const recipes = get_recipe_data();

    return recipes.filter(recipe => {
        return recipe.base_recipe
    })
}

export async function get_recipe_from_output_name(output_name: string): Promise<RecipeModel | null> {

    const result = get_recipe_data().find(recipe => recipe.output.name === output_name);
    
    if (result) { return result; }
    else {
        // throw new Error("Error - could not find a recipe with that name");
        return null;
    }
}

// export async function get_base_components_from_item(item_name: string): Promise<Map<ItemModel, number>> {
//     const items = await get_item_data();

//     const item = await get_item_from_name(item_name);

//     const recursive_calculate_base_items = async (item: ItemModel): Promise<ItemModel[]> => {
        
//         let components: ItemModel[] = [];

//         if (item.components.length === 0) { components.push(item);console.log(components); }

//         for (let component_name of item.components) {
//             const component = await get_item_from_name(component_name);
//             components = [...components, ...await recursive_calculate_base_items(component)]
//         }

//         return [...components];
//     }

//     let result = await recursive_calculate_base_items(item);
    
//     const itemMap = new Map<ItemModel, number>();

//     for (const item of result) {
//         const currentAmount = itemMap.get(item) ?? 0;
//         itemMap.set(item, currentAmount + 1);
//     }

//     console.log(itemMap);

//     return itemMap;

// }