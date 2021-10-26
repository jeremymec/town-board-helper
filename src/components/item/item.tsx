import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Collaspe from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";

import ItemImage from '../item_image/item_image';
import { ItemModel } from "../../services/item_service";
import { RecipeModel, get_recipe_from_output_name } from "../../services/recipe_service";

interface ItemProps {
    item: ItemModel
}

function Item(props: ItemProps) {
    
    const [recipe, setRecipe] = useState<RecipeModel>();
    const [open, setOpen] = useState(false);

    useEffect(() => {
            get_recipe_from_output_name(props.item.name).then((recipe) => {
                setRecipe(recipe);
          });
      }, [props.item]
    );
    
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List>
            <ListItemButton onClick={handleClick}>
                <ListItem>
                    <ItemImage item={props.item}></ItemImage>
                    <Typography>Test</Typography>
                    <Collaspe in={open}>
                        <List>
                            <ListItem>
                                <Typography>Hey</Typography>
                            </ListItem>
                        </List>
                    </Collaspe>
                </ListItem>
            </ListItemButton>
        </List>
    );

}

export default Item;

{/* 
{Array.from(baseItems).map(([item, amount]) => ({item, amount})).map((pair, key) => {
            return (
                <div key={key}>
                    <ListItem>
                        <ItemImage item={props.item} />
                        <ListItemText className="componentName">{pair.item.name} x{pair.amount}</ListItemText>
                    </ListItem>
                    <Divider />
                </div>
            )
            })} */}