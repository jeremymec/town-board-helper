import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collaspe from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { CategoryModel } from "../../../services/category_service";
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

  const regular_item_style = {
    fontSize: "18px",
  };

  const itemText =
    `\u00A0${props.category.name}` +
    (props.category ? `\u00A0\u00A0x${props.quantity}` : "");

  return (
    <List disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItem className="item" key={props.item_key}>
          <ListItemAvatar>
            <ItemImage item={props.category}></ItemImage>
          </ListItemAvatar>
          <ListItemText
            className="itemNameText"
            primaryTypographyProps={{ style: regular_item_style }}
          >
            {itemText}
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </ListItemButton>
      <Collaspe in={open}>
        <List disablePadding>
          {props.category.items.map((item, key) => {
            return (
              <ListItem key={key} className={"itemListItem category"}>
                <Item item={item} is_category_item={true} key={key} />
              </ListItem>
            );
          })}
        </List>
      </Collaspe>
    </List>
  );
}

export default ItemCategory;
