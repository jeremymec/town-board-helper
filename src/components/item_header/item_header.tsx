import { InputBaseComponentProps } from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import { ItemModel } from "../../services/item_service";

interface ItemHeaderProps {
    item: ItemModel
}

function ItemHeader(props: ItemHeaderProps) {

    const [quantity, setQuantity] = useState<number>(1);

    const inputProps: InputBaseComponentProps = {
        style: {fontSize: 40},
        inputMode: "numeric",
        pattern: "[0-9]*" 
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') { setQuantity(0)}

        const updatedQuantity = Number(event.target.value)
        
        if (!isNaN(updatedQuantity) && updatedQuantity > 0) {
            setQuantity(updatedQuantity);
        }

    }

    return (
        <div className="itemHeaderContainer">
            {/* {<img className="itemImage" src={`${props.item?.id}.png`}></img>} */}
            <Typography className="itemHeaderName">{props.item?.name} &nbsp;&nbsp;x</Typography>
            <div className="itemHeaderQuantityContainer">
                <TextField inputProps={inputProps} fullWidth={true} size={'small'} value={quantity} onChange={handleQuantityChange}></TextField>
            </div>
        </div>
    );

}

export default ItemHeader;