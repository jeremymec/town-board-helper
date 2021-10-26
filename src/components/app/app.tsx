import React, { useEffect, useState } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { get_recipes, RecipeModel } from '../../services/recipe_service';

import RecipePicker from '../recipe_picker/recipe_picker';
import RecipeInfo from '../recipe_info/recipe_info';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const [recipeValue, setRecipeValue] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);

  const muiTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontSize: 16
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const recipes = await get_recipes();
      setRecipes(recipes);
    }

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="appContainer">
        <RecipePicker recipes={recipes} value={recipeValue} setValue={setRecipeValue}></RecipePicker>
        <RecipeInfo recipeOutput={recipeValue}></RecipeInfo>
      </div>
    </ThemeProvider>

  );
}

export default App;