import { Filter } from "../components/app/app";
import { CategoryModel } from "./category_service";
import { get_recipe_data } from "./data_service";
import { ItemModel } from "./item_service";

export interface RecipeModel {
  output: ItemModel;
  components: RecipeItem[];
  category_components: RecipeCategory[];
  base_recipe: boolean;
  crafting_category: string;
}

export interface RecipeCategory {
  category: CategoryModel;
  quantity?: number;
}

export interface RecipeItem {
  item: ItemModel;
  quantity?: number;
}

export function get_recipes(): RecipeModel[] {
  return get_recipe_data();
}

export function get_base_recipes(filter: Filter): RecipeModel[] {

  const recipes = get_recipe_data();

  return recipes.filter(
    (recipe) => recipe.base_recipe && recipe.crafting_category.includes(filter)
  );
}

export async function get_recipe_from_output_name(
  output_name: string
): Promise<RecipeModel | null> {
  const result = get_recipe_data().find(
    (recipe) => recipe.output.name === output_name
  );

  if (result) {
    return result;
  } else {
    return null;
  }
}
