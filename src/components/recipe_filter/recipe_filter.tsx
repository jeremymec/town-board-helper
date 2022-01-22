import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import { Filter } from "../app/app";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

interface RecipeFilterProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

function RecipeFilter(props: RecipeFilterProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (event: React.MouseEvent, newFilter: Filter) => {
    props.setFilter(newFilter ?? "");
  };

  return (
    <div className="recipeFilter">
      <ToggleButtonGroup
        onChange={handleChange}
        value={props.filter}
        orientation={matches ? "horizontal" : "vertical"}
        exclusive
      >
        <ToggleButton value="Cooking">Cooking</ToggleButton>
        <ToggleButton value="Weaponsmithing">Weaponsmithing</ToggleButton>
        <ToggleButton value="Armoring">Armoring</ToggleButton>
        <ToggleButton value="Alchemy">Alchemy</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default RecipeFilter;
