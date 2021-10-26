import { ItemModel } from "../../services/item_service";

interface ItemImageProps {
    item: ItemModel
}

function ItemImage(props: ItemImageProps) {

    return (
        <img className="itemImage" src={`${props.item.id}.png`}></img>
    );

}

export default ItemImage;