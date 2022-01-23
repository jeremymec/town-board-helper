import { useMediaQuery, useTheme } from "@mui/material";
import { InputBaseComponentProps } from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { ItemModel } from "../../services/item_service";

interface ItemHeaderProps {
  item: ItemModel;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

function ItemHeader(props: ItemHeaderProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const inputProps: InputBaseComponentProps = {
    style: {
      fontSize: "1.5em",
      width: "1.5em"
      //fontFamily: 'IM Fell DW Pica'
    },
    inputMode: "numeric",
    pattern: "[0-9]*",
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      props.setQuantity(0);
    }

    const updatedQuantity = Number(event.target.value);

    if (
      !isNaN(updatedQuantity) &&
      updatedQuantity > 0 &&
      updatedQuantity < 100
    ) {
      props.setQuantity(updatedQuantity);
    }
  };

  return (
    <div className="itemHeaderContainer">
      <Typography className="itemHeaderName" style={matches ? {whiteSpace: "nowrap"} : {}}>
        {props.item?.name}
      </Typography>
      <div className="itemHeaderQuantityContainer">
        <Typography className="itemQuantityPreText">x</Typography>
        <TextField
          className="itemHeaderQuantity"
          inputProps={inputProps}
          fullWidth={true}
          size={"small"}
          value={props.quantity}
          onChange={handleQuantityChange}
        ></TextField>
      </div>
    </div>
  );
}

export default ItemHeader;
