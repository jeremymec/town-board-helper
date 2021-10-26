import { get_recipe_data } from './data_service';

export interface RecipeModel {
    output: string,
    id: string,
    components: string[]
}

export async function get_recipes(): Promise<RecipeModel[]> {
    const recipes = await get_recipe_data();

    return recipes;
}

export async function get_recipe_from_output_name(output_name: string): Promise<RecipeModel> {
    const recipes = await get_recipe_data();

    const result = recipes.find(recipe => recipe.output === output_name);

    console.log("result", result)

    if (result) { return result; }
    else {
        throw new Error("Error - could not find a recipe with that name");
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