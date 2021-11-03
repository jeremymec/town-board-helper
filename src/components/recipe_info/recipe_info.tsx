import { useEffect, useState } from "react";

import {
  RecipeModel,
  get_recipe_from_output_name
} from "../../services/recipe_service";
import {
  ItemModel,
  get_item_from_name
} from "../../services/item_service";
import ItemHeader from "../item_header/item_header";
import Item from "../item/item";

interface RecipeInfoProps {
  recipeOutput: string | null
}

function RecipeInfo(props: RecipeInfoProps) {
  
  const [recipe, setRecipe] = useState<RecipeModel | null>();
  const [outputItem, setOutputItem] = useState<ItemModel>();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (props.recipeOutput) {
      get_recipe_from_output_name(props.recipeOutput).then(recipe => {
        setRecipe(recipe);
      })
    }
  }, [props.recipeOutput]);

  useEffect(() => {
    if (recipe) {
      setOutputItem(recipe.output)
    }
  }, [recipe]);

  return (
    (recipe && outputItem ?
      <div className="itemInfo">
        <ItemHeader item={outputItem} quantity={quantity} setQuantity={setQuantity} />
        <Item item={outputItem} quantity={quantity} />
      </div>
      :
      <div className="itemInfo" />
    )
  );
}

export default RecipeInfo;
