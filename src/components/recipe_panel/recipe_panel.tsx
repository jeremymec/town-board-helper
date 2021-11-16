import { RecipeModel } from "../../services/recipe_service";
import RecipeInfo from "../recipe_info/recipe_info";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

interface RecipePanelProps {
  selectedRecipes: RecipeModel[];
  setSelectedRecipes: React.Dispatch<React.SetStateAction<RecipeModel[]>>;
}

function RecipePanel(props: RecipePanelProps) {
  const deleteButtonCallback = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetRecipeIndex: number
  ) => {
    e.preventDefault();
    let copyOfSelectedRecipes = [...props.selectedRecipes];
    copyOfSelectedRecipes.splice(targetRecipeIndex, 1);
    props.setSelectedRecipes(copyOfSelectedRecipes)
    // props.setSelectedRecipes([
    //   ...props.selectedRecipes.filter((recipe, index) => {
    //     return index != targetRecipeIndex;
    //   }),
    // ]);
  };

  return (
    <div id="recipePanel">
      {props.selectedRecipes.map((recipe, index) => {
        return (
          <div id="panelItem">
            <IconButton
              id="deleteIcon"
              onClick={(e) => {
                deleteButtonCallback(e, index);
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
