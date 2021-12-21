import React, { useEffect, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { get_recipes, RecipeModel } from "../../services/recipe_service";

import RecipePicker from "../recipe_picker/recipe_picker";
import CssBaseline from "@mui/material/CssBaseline";
import RecipePanel from "../recipe_panel/recipe_panel";

function App() {
  const [recipeValue, setRecipeValue] = useState<string | null>(null);
  const [selectedRecipes, setSelectedRecipes] = useState<[RecipeModel, number][]>([]);

  const muiTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontSize: 16,
    },
  });

  const recipes = get_recipes()

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="appContainer">
        <RecipePicker
          recipes={recipes}
          selectedRecipes={selectedRecipes}
          setSelectedRecipes={setSelectedRecipes}
          value={recipeValue}
          setValue={setRecipeValue}
        ></RecipePicker>
        <RecipePanel
          selectedRecipes={selectedRecipes}
          setSelectedRecipes={setSelectedRecipes}
        ></RecipePanel>
      </div>
    </ThemeProvider>
  );
}

export default App;
