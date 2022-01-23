import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typograpgy from "@mui/material/Typography";
import React from "react";
import { Filter } from "../app/app";

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
      <ToggleButtonGroup onChange={handleChange} value={props.filter} exclusive>
        <ToggleButton value="Cooking">
          <img className="filterIcon" src="./icons/cooking.svg" />
          {matches && <Typograpgy className="filterText">Cooking</Typograpgy>}
        </ToggleButton>
        <ToggleButton value="Weaponsmithing">
          <img className="filterIcon" src="./icons/weaponsmithing.svg" />
          {matches && (
            <Typograpgy className="filterText">Weaponsmithing</Typograpgy>
          )}
        </ToggleButton>
        <ToggleButton value="Armoring">
          <img className="filterIcon" src="./icons/armoring.svg" />
          {matches && <Typograpgy className="filterText">Armoring</Typograpgy>}
        </ToggleButton>
        <ToggleButton value="Alchemy">
          <img className="filterIcon" src="./icons/arcana.svg" />
          {matches && <Typograpgy className="filterText">Arcana</Typograpgy>}
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default RecipeFilter;
