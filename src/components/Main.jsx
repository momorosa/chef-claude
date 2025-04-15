import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe.jsx'
import IngredientsList from './IngredientsList.jsx'
import { fetchRecipe } from '../fetchAPI.js'

export default function Main()
{
    const [ ingredients, setIngredients ] = useState([])
    const [ recipe, setRecipe ] = useState("")

    async function getRecipe() {
        const recipeMarkdown = await fetchRecipe(ingredients)
        // console.log(recipeMarkdown) // or set it to state for rendering
        setRecipe(recipeMarkdown)
      }

    function addIngredient(formData) 
    {
        // Trim the input to remove extra whitespace
        const newIngredient = formData.get("ingredient").trim()

        // If the input is empty, return early without updating state.
        if (newIngredient === "") { return }
        setIngredients(prevIngredients => [ ...prevIngredients, newIngredient ])
    }

    return(
        <main>
            <form action={ addIngredient } className="add-ingredient-form">
                <input 
                    type="text" 
                    placeholder="e.g. spinach"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            { ingredients.length > 0 && 
            <IngredientsList 
                ingredients = { ingredients } 
                getRecipe={ getRecipe }
            />}
            {recipe && <ClaudeRecipe recipe={ recipe }/>}
        </main>
    )
}