import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Collaspe from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ItemImage from "../item_image/item_image";
import { ItemModel } from "../../services/item_service";
import {
  RecipeModel,
  get_recipe_from_output_name,
} from "../../services/recipe_service";
import ItemCategory from "./item_category/item_category";

interface ItemProps {
  item: ItemModel;
  quantity?: number;
  is_category_item?: boolean;
  start_open?: boolean
  key: number;
}

function Item(props: ItemProps) {
  const [recipe, setRecipe] = useState<RecipeModel | null>(null);
  const [open, setOpen] = useState(props.start_open ?? false);

  if (!props.is_category_item) {
    get_recipe_from_output_name(props.item.name).then((recipe) => {
      setRecipe(recipe);
    })
  }

  const handleClick = () => {
    setOpen(!open);
  };
  
  const category_item_style = {
    fontStyle: "italic"
  }

  const regular_item_style = {
    fontSize: "18px"
  }

  const itemText = `\u00A0${props.item.name}` + (!props.is_category_item ? `\u00A0\u00A0x${props.quantity}` : '');

  return (
    <List disablePadding dense className="item">
      <ListItemButton onClick={handleClick}>
        <ListItem>
          <ListItemAvatar>
            <ItemImage item={props.item}></ItemImage>
          </ListItemAvatar>
          <ListItemText className="itemNameText" primaryTypographyProps={{style: (props.is_category_item ? category_item_style : regular_item_style)}}>{itemText}</ListItemText>
          {recipe && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
      </ListItemButton>
      <Collaspe in={open}>
        <List disablePadding>
          {recipe && (
            recipe.components.map((component, key) => {
              return (
                // <ListItem key={key} className={"itemListItem"}>
                  <Item
                    item={component.item}
                    quantity={(component.quantity ?? 1) * (props.quantity ?? 1)}
                    key={key}
                  />
                // </ListItem>
              )
            }))}
            {recipe && (
              recipe.category_components.map((category, key) => {
                return (
                  <ItemCategory key={key} category={category.category} quantity={category.quantity} item_key={key}/>
                )
              })
            )}
        </List>
      </Collaspe>
    </List>
  );
}

export default Item;