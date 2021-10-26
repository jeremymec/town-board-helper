import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

import { ItemModel } from "../../services/item_service";

interface ItemRecipeProps {
    item: ItemModel
}

function ItemRecipe(props: ItemRecipeProps) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        if (props.item) {
            get_base_components_from_item(props.item.name).then((baseItems) => {
                setBaseItems(baseItems)
          });
        }
      }, [props.item]);

    return (
        <List>
            {items.map((item, key) => {
            return (
                <div key={key}>
                    <ListItemText>{item.name}</ListItemText>
                </div>
            )
            })}
        </List>
    );

}

export default ItemRecipe;