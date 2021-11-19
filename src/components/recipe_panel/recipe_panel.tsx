import { RecipeModel } from "../../services/recipe_service";
import RecipeInfo from "../recipe_info/recipe_info";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

interface RecipePanelProps {
  selectedRecipes: [RecipeModel, number][];
  setSelectedRecipes: React.Dispatch<React.SetStateAction<[RecipeModel, number][]>>;
}

function RecipePanel(props: RecipePanelProps) {
  const deleteButtonCallback = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetRecipeCounter: number
  ) => {
    e.preventDefault();
    props.setSelectedRecipes(props.selectedRecipes.filter(([recipe, counter]) => counter !== targetRecipeCounter))
  };

  return (
    <div id="recipePanel">
      {props.selectedRecipes.map(([recipe, counter]) => {
        return (
          <div id="panelItem" key={counter}>
            <IconButton
              id="deleteIcon"
              onClick={(e) => {
                deleteButtonCallback(e, counter);
              }}
              data-arg1={recipe}
            >
              <DeleteIcon />
            </IconButton>
            <RecipeInfo recipe={recipe}></RecipeInfo>
          </div>
        );
      })}
    </div>
  );
}

export default RecipePanel;
