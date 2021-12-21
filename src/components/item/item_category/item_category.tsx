import React, { useState } from "react";
import { CategoryModel } from "../../../services/category_service";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collaspe from "@mui/material/Collapse";
import List from "@mui/material/List";
import ItemImage from "../../item_image/item_image";
import Item from "../item";

interface ItemCategoryProps {
  category: CategoryModel;
  quantity?: number;
  item_key: number;
}

function ItemCategory(props: ItemCategoryProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItem key={props.item_key}>
          <ListItemAvatar>
            <ItemImage item={props.category}></ItemImage>
          </ListItemAvatar>
          <ListItemText>{props.category.name}</ListItemText>
          {props.quantity && (
            <ListItemText>&nbsp;&nbsp;x{props.quantity}</ListItemText>
          )}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </ListItemButton>
      <Collaspe in={open}>
        <List disablePadding>
          {props.category.items.map((item, key) => {
            return (
              <ListItem key={key} className={"itemListItem category"}>
                <Item item={item} is_category_item={true} />
              </ListItem>
            );
          })}
        </List>
      </Collaspe>
    </List>
  );
}

export default ItemCategory;
