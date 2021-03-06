import { get_item_data } from "./data_service";

export interface ItemModel {
  name: string;
  id: string;
  categories: string[];
}

export function get_item_from_name(item_name: string): ItemModel {
  const item = get_item_data().find((item) => {
    return item.name === item_name;
  });

  if (item) {
    return item;
  } else {
    console.log("ERROR OCCURED GETTING ITEM DATA WITH NAME", item_name);
    throw Error("An item with that name does not exist in the data.");
  }
}

export async function get_items_of_category(category: string) {
  return get_item_data().filter((item) => {
    item.categories.includes(category);
  });
}
