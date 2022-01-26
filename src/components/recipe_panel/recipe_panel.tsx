import DeleteIcon from "@mui/icons-material/Delete";
import { useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { RecipeModel } from "../../services/recipe_service";
import RecipeInfo from "../recipe_info/recipe_info";

interface RecipePanelProps {
  selectedRecipes: [RecipeModel, number][];
  setSelectedRecipes: React.Dispatch<
    React.SetStateAction<[RecipeModel, number][]>
  >;
}

function RecipePanel(props: RecipePanelProps) {
  const deleteButtonCallback = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetRecipeCounter: number
  ) => {
    e.preventDefault();
    props.setSelectedRecipes(
      props.selectedRecipes.filter(
        ([recipe, counter]) => counter !== targetRecipeCounter
      )
    );
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div
      id="recipePanel"
      style={
        matches ? {} : { maxWidth: "100%", flexDirection: "column-reverse" }
      }
    >
      {props.selectedRecipes.map(([recipe, counter]) => {
        return (
          <div
            id="panelItem"
            key={counter}
            style={matches ? {} : { minWidth: "100vw" }}
          >
            <div id="deleteIconContainer">
              <IconButton
                id="deleteIcon"
                color="error"
                onClick={(e) => {
                  deleteButtonCallback(e, counter);
                }}
                data-arg1={recipe}
              >
                <DeleteIcon />
              </IconButton>
            </div>
            <RecipeInfo recipe={recipe}></RecipeInfo>
          </div>
        );
      })}
    </div>
  );
}

export default RecipePanel;
