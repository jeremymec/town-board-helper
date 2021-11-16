import React, { useEffect, useState } from "react";
import AutoComplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { RecipeModel } from "../../services/recipe_service";

interface RecipePickerProps {
  recipes: RecipeModel[];
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  selectedRecipes: RecipeModel[];
  setSelectedRecipes: React.Dispatch<React.SetStateAction<RecipeModel[]>>;
}

function RecipePicker(props: RecipePickerProps) {
  const [recipeNames, setRecipeNames] = useState<string[]>([]);
  const [recipeTextValue, setRecipeTextValue] = useState<string | null>("");

  useEffect(() => {
    const names = props.recipes.map((recipe) => {
      return recipe.output.name;
    });
    setRecipeNames(names);
  }, [props.recipes]);

  const buttonCallback = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let selectedRecipe = props.recipes.find((recipe) => {
      return recipe.output.name == recipeTextValue
    })
    if (selectedRecipe){
      props.setSelectedRecipes([...props.selectedRecipes, selectedRecipe]);
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
      <Button onClick={buttonCallback}>Go</Button>
    </div>
  );
}

export default RecipePicker;
