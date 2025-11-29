import { Select, MenuItem, TextField, FormControl, InputLabel } from "@mui/material";
import { IActionsTypes } from "./ActionsTypes";
import { useState } from "react";

export function Actions({ labelSelect, param, actions }: IActionsTypes) {
    const [selectedItem, setSelectedItem] = useState<string>("");

    console.log("actions ", actions)

    return (
        <FormControl sx={{width: "100%"}}>
            <Select
                id={`select-actions-${param}`}
                label={labelSelect ? labelSelect : ""}
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
                onClick={() => console.log("click working?")}
            >
                {actions.map((action) => (
                    <MenuItem key={action.value} value={action.value}>
                            {action.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}