import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import { Filter } from "../app/app";

interface RecipeFilterProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

function RecipeFilter(props: RecipeFilterProps) {
  const handleChange = (event: React.MouseEvent, newFilter: Filter) => {
    props.setFilter(newFilter ?? "");
  };

  return (
    <div className="recipeFilter">
      <ToggleButtonGroup onChange={handleChange} value={props.filter} exclusive>
        <ToggleButton value="Cooking">Cooking</ToggleButton>
        <ToggleButton value="Weaponsmithing">Weaponsmithing</ToggleButton>
        <ToggleButton value="Armoring">Armoring</ToggleButton>
        <ToggleButton value="Alchemy">Alchemy</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default RecipeFilter;
