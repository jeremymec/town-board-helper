import Avatar from '@mui/material/Avatar';
import { CategoryModel } from "../../services/category_service";
import { ItemModel } from "../../services/item_service";

interface ItemImageProps {
  item: ItemModel | CategoryModel;
}

function ItemImage(props: ItemImageProps) {
  return (
    <Avatar className="itemImage" variant="square" src={`images/${props.item.id}.png`} />
  )
}

export default ItemImage;
