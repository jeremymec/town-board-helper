import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { get_base_recipes, RecipeModel } from "../../services/recipe_service";
import AboutDialog from "../about_dialog/about_dialog";
import RecipeFilter from "../recipe_filter/recipe_filter";
import RecipePanel from "../recipe_panel/recipe_panel";
import RecipePicker from "../recipe_picker/recipe_picker";

export type Filter = "" | "Cooking";

function App() {
  const [recipeValue, setRecipeValue] = useState<string | null>(null);
  const [selectedRecipes, setSelectedRecipes] = useState<
    [RecipeModel, number][]
  >([]);
  const [filter, setFilter] = useState<Filter>("");
  const [recipes, setRecipes] = useState<RecipeModel[]>(
    get_base_recipes(filter)
  );
  const [aboutOpen, setAboutOpen] = useState(false);

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
  };

  const onAboutDialogClose = () => {
    setAboutOpen(false);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="appContainer">
        <AboutDialog
          open={aboutOpen}
          closeCallback={onAboutDialogClose}
        ></AboutDialog>
        <div className="mainContent">
          <div className="searchContainer">
            <RecipePicker
              recipes={recipes}
              selectedRecipes={selectedRecipes}
              setSelectedRecipes={setSelectedRecipes}
              value={recipeValue}
              setValue={setRecipeValue}
            ></RecipePicker>
            <RecipeFilter filter={filter} setFilter={onFilterChange} />
          </div>
          <RecipePanel
            selectedRecipes={selectedRecipes}
            setSelectedRecipes={setSelectedRecipes}
          ></RecipePanel>
        </div>
        <div className="bottomBar">
          <Button
            className="githubButton"
            startIcon={<GitHubIcon />}
            href="https://github.com/jeremymec/town-board-helper"
            target="_blank"
          >
            Github
          </Button>
          <Button
            className="githubButton"
            startIcon={<InfoIcon />}
            onClick={() => {
              setAboutOpen(true);
            }}
          >
            About
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
