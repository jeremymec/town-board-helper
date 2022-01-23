import AddBoxIcon from "@mui/icons-material/AddBox";
import { useMediaQuery } from "@mui/material";
import AutoComplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/system";
import React, { useState } from "react";
import { RecipeModel } from "../../services/recipe_service";

interface RecipePickerProps {
  recipes: RecipeModel[];
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  selectedRecipes: [RecipeModel, number][];
  setSelectedRecipes: React.Dispatch<
    React.SetStateAction<[RecipeModel, number][]>
  >;
}

function RecipePicker(props: RecipePickerProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const recipeNames = props.recipes.map((recipe) => recipe.output.name);

  const [recipeTextValue, setRecipeTextValue] = useState<string | null>("");
  const [recipeCounter, setRecipeCounter] = useState(0);

  const incrementRecipeCounter = () => {
    setRecipeCounter(recipeCounter + 1);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedRecipe = props.recipes.find(
      (recipe) => recipe.output.name == recipeTextValue
    );
    if (selectedRecipe) {
      props.setSelectedRecipes([
        ...props.selectedRecipes,
        [selectedRecipe, recipeCounter],
      ]);
      incrementRecipeCounter();
    }
  };

  return (
    // <div id="recipePicker">
    <form onSubmit={handleSubmit} id="recipePicker">
      <AutoComplete
        className="itemSelect"
        options={recipeNames}
        renderInput={(params) => <TextField {...params} label="Recipes" />}
        value={recipeTextValue}
        onChange={(event: any, newValue: string | null) => {
          setRecipeTextValue(newValue);
        }}
      />
      <IconButton
        type="submit"
        className="goButton"
        color="success"
        style={matches ? {} : { display: "none" }}
      >
        <AddBoxIcon fontSize="large" />
      </IconButton>
    </form>
    // </div>
  );
}

export default RecipePicker;
