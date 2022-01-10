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
  const { recipe } = props;

  const [quantity, setQuantity] = useState<number>(1);

  return (
    recipe.output ?
      <div className="itemInfo">
        <ItemHeader item={recipe.output} quantity={quantity} setQuantity={setQuantity} />
        <Item item={recipe.output} quantity={quantity} start_open={true} key={0}/>
      </div>
      :
      <div className="itemInfo" />
  );
}

export default RecipeInfo;
