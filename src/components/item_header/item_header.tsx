import { ItemModel } from "../../services/item_service";
import Typography from "@mui/material/Typography";

interface ItemHeaderProps {
    item: ItemModel
}

function ItemHeader(props: ItemHeaderProps) {

    return (
        <div className="itemHeaderContainer">
            {<img className="itemImage" src={`${props.item?.id}.png`}></img>}
            <Typography className="itemName">{props.item?.name}</Typography>
        </div>
    );

}

export default ItemHeader;