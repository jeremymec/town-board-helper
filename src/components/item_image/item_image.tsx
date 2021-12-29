import { CategoryModel } from "../../services/category_service";
import { ItemModel } from "../../services/item_service";

interface ItemImageProps {
  item: ItemModel | CategoryModel;
}

function ItemImage(props: ItemImageProps) {
  return <img className="itemImage" src={`images/${props.item.id}.png`}></img>;
}

export default ItemImage;
