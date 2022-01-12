import React, { useEffect, useState } from "react";
import AutoComplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { RecipeModel } from "../../services/recipe_service";

interface RecipePickerProps {
  recipes: RecipeModel[];
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  selectedRecipes: [RecipeModel, number][];
  setSelectedRecipes: React.Dispatch<React.SetStateAction<[RecipeModel, number][]>>;
}

function RecipePicker(props: RecipePickerProps) {

  const recipeNames = props.recipes.map(recipe => recipe.output.name);

  const [recipeTextValue, setRecipeTextValue] = useState<string | null>("");
  const [recipeCounter, setRecipeCounter] = useState(0);
  
  const incrementRecipeCounter = () => {
    setRecipeCounter(recipeCounter + 1);
  }

  const buttonCallback = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const selectedRecipe = props.recipes.find((recipe) => recipe.output.name == recipeTextValue);
    if (selectedRecipe) {
      props.setSelectedRecipes([...props.selectedRecipes, [selectedRecipe, recipeCounter]]);
      incrementRecipeCounter();
    }
  };

  return (
    <div id="recipePicker">
      <AutoComplete
        className="itemSelect"
        options={recipeNames}
        renderInput={(params) => <TextField {...params} label="Recipes" />}
        value={recipeTextValue}
        onChange={(event: any, newValue: string | null) => {
          setRecipeTextValue(newValue);
        }}
      />
      <IconButton className="goButton" onClick={buttonCallback} color="success"><AddBoxIcon fontSize="large"/></IconButton>
    </div>
  );
}

export default RecipePicker;
