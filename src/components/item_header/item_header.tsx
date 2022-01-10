import { InputBaseComponentProps } from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import { ItemModel } from "../../services/item_service";

interface ItemHeaderProps {
    item: ItemModel,
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

function ItemHeader(props: ItemHeaderProps) {

    const inputProps: InputBaseComponentProps = {
        style: {fontSize: 28},
        inputMode: "numeric",
        pattern: "[0-9]*" 
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') { props.setQuantity(0)}

        const updatedQuantity = Number(event.target.value)
        
        if (!isNaN(updatedQuantity) && updatedQuantity > 0) {
            props.setQuantity(updatedQuantity);
        }

    }

    return (
        <div className="itemHeaderContainer">
            {/* {<img className="itemImage" src={`${props.item?.id}.png`}></img>} */}
            <Typography className="itemHeaderName">{props.item?.name} &nbsp;x</Typography>
            <div className="itemHeaderQuantityContainer">
                <TextField inputProps={inputProps} fullWidth={true} size={'small'} value={props.quantity} onChange={handleQuantityChange}></TextField>
            </div>
        </div>
    );

}

export default ItemHeader;