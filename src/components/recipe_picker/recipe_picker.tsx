import { useEffect, useState } from 'react';
import AutoComplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { RecipeModel } from '../../services/recipe_service';

interface RecipePickerProps {
    recipes: RecipeModel[]
    value: string | null,
    setValue: React.Dispatch<React.SetStateAction<string | null>>
}

function RecipePicker(props: RecipePickerProps) {
    
    const [recipeNames, setRecipeNames] = useState<string[]>([]);

    useEffect(() => {
        const names = props.recipes.map((recipe) => {
            return recipe.output.name
        });
        setRecipeNames(names);
    }, [props.recipes])

    useEffect(() => {
        console.log('Value selected is ', props.value)
    }, [props.value])

    return (
        <AutoComplete 
            className="itemSelect"
            options={recipeNames}
            renderInput={(params) => <TextField {...params} label="Recipes" />}
            value={props.value}
            onChange={(event: any, newValue: string | null) => {
                props.setValue(newValue);
            }}
        />
    )

}

export default RecipePicker;