import React, { useEffect, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { get_base_recipes, RecipeModel } from "../../services/recipe_service";

import RecipePicker from "../recipe_picker/recipe_picker";
import CssBaseline from "@mui/material/CssBaseline";
import RecipePanel from "../recipe_panel/recipe_panel";
import RecipeFilter from "../recipe_filter/recipe_filter";

export type Filter = "" | "Cooking";

function App() {

  const [recipeValue, setRecipeValue] = useState<string | null>(null);
  const [selectedRecipes, setSelectedRecipes] = useState<[RecipeModel, number][]>([]);
  const [filter, setFilter] = useState<Filter>("");
  const [recipes, setRecipes] = useState<RecipeModel[]>(get_base_recipes(filter))

  const muiTheme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontSize: 16,
    },
  });

  const onFilterChange = (filter: Filter) => {
    setFilter(filter);
    setRecipes(get_base_recipes(filter));
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="appContainer">
        <div className="searchContainer">
          <RecipePicker
            recipes={recipes}
            selectedRecipes={selectedRecipes}
            setSelectedRecipes={setSelectedRecipes}
            value={recipeValue}
            setValue={setRecipeValue}
          ></RecipePicker>
          <RecipeFilter filter={filter} setFilter={onFilterChange}/>
        </div>
        <RecipePanel
          selectedRecipes={selectedRecipes}
          setSelectedRecipes={setSelectedRecipes}
        ></RecipePanel>
      </div>
    </ThemeProvider>
  );
}

export default App;
