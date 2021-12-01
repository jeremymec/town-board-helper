import React from "react";
import { CategoryModel } from "../../../services/category_service";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ItemImage from "../../item_image/item_image";

interface ItemCategoryProps {
  category: CategoryModel
}

function ItemCategory(props: ItemCategoryProps) {

  return (
    <ListItem>
        <ListItemAvatar>
          <ItemImage item={props.category}></ItemImage>
        </ListItemAvatar>
        <ListItemText>{props.category.name}</ListItemText>
    </ListItem>
    );

}

export default ItemCategory;
