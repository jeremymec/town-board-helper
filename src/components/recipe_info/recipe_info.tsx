import { useEffect, useState } from "react";

import {
  RecipeModel,
} from "../../services/recipe_service";
import {
  ItemModel,
} from "../../services/item_service";
import ItemHeader from "../item_header/item_header";
import Item from "../item/item";

interface RecipeInfoProps {
  recipe: RecipeModel
}

function RecipeInfo(props: RecipeInfoProps) {
  
  const [outputItem, setOutputItem] = useState<ItemModel>();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
      setOutputItem(props.recipe.output)
  }, [props.recipe]);

  return (
    outputItem ?
      <div className="itemInfo">
        <ItemHeader item={outputItem} quantity={quantity} setQuantity={setQuantity} />
        <Item item={outputItem} quantity={quantity} />
      </div>
      :
      <div className="itemInfo" />
  );
}

export default RecipeInfo;
