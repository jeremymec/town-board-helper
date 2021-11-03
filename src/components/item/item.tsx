import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Collaspe from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ItemImage from '../item_image/item_image';
import { ItemModel } from "../../services/item_service";
import { RecipeModel, get_recipe_from_output_name } from "../../services/recipe_service";

interface ItemProps {
    item: ItemModel,
    quantity: number
}

function Item(props: ItemProps) {

    const [recipe, setRecipe] = useState<RecipeModel | null>(null);
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
        <List disablePadding>
            <ListItemButton onClick={handleClick}>
                <ListItem>
                    <ListItemAvatar>
                        <ItemImage item={props.item}></ItemImage>
                    </ListItemAvatar>
                    <ListItemText>{props.item.name}</ListItemText>
                    <ListItemText>{props.quantity}</ListItemText>
                    {recipe && (open ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
            </ListItemButton>
            {recipe && <Collaspe in={open}>
                <List disablePadding>
                    {recipe.components.map((component, key) => {
                        return (
                            <ListItem key={key}>
                                <Item item={component.item} quantity={component.quantity} />
                            </ListItem>
                        )
                    })}
                </List>
            </Collaspe>}
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