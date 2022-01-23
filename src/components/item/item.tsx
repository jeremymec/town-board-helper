import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useMediaQuery, useTheme } from "@mui/material";
import Collaspe from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { ItemModel } from "../../services/item_service";
import {
  get_recipe_from_output_name,
  RecipeModel,
} from "../../services/recipe_service";
import ItemImage from "../item_image/item_image";
import ItemCategory from "./item_category/item_category";

interface ItemProps {
  item: ItemModel;
  quantity?: number;
  is_category_item?: boolean;
  start_open?: boolean;
  key: number;
}

function Item(props: ItemProps) {
  const [recipe, setRecipe] = useState<RecipeModel | null>(null);
  const [open, setOpen] = useState(props.start_open ?? false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  if (!props.is_category_item) {
    get_recipe_from_output_name(props.item.name).then((recipe) => {
      setRecipe(recipe);
    });
  }

  const handleClick = () => {
    setOpen(!open);
  };

  const category_item_style = {
    fontStyle: "italic",
  };

  const regular_item_style = {
    fontSize: "1em",
  };

  const trailing_spaces_count = 4 - String(props.quantity ?? 0).length;
  const trailing_spaces_text = "\u00A0\u00A0".repeat(
    trailing_spaces_count >= 0 ? trailing_spaces_count : 0
  );
  const itemText =
    `\u00A0${props.item.name}` +
    (!props.is_category_item ? `\u00A0\u00A0x${props.quantity}` : "") +
    trailing_spaces_text;

  return (
    <List disablePadding dense className="item">
      <ListItemButton onClick={handleClick}>
        <ListItem>
          <ListItemAvatar>
            <ItemImage item={props.item}></ItemImage>
          </ListItemAvatar>
          <ListItemText
            className="itemNameText"
            style={matches ? { whiteSpace: "nowrap" } : {}}
            primaryTypographyProps={{
              style: props.is_category_item
                ? category_item_style
                : regular_item_style,
            }}
          >
            {itemText}
          </ListItemText>
          {recipe && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
      </ListItemButton>
      <Collaspe in={open}>
        <List disablePadding>
          {recipe &&
            recipe.components.map((component, key) => {
              return (
                // <ListItem key={key} className={"itemListItem"}>
                <Item
                  item={component.item}
                  quantity={(component.quantity ?? 1) * (props.quantity ?? 1)}
                  key={key}
                />
                // </ListItem>
              );
            })}
          {recipe &&
            recipe.category_components.map((category, key) => {
              return (
                <ItemCategory
                  key={key}
                  category={category.category}
                  quantity={(category.quantity ?? 1) * (props.quantity ?? 1)}
                  item_key={key}
                />
              );
            })}
        </List>
      </Collaspe>
    </List>
  );
}

export default Item;
