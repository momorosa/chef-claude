import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe.jsx'
import IngredientsList from './IngredientsList.jsx'
import { fetchRecipe } from '../fetchAPI.js'

export default function Main()
{
    const [ ingredients, setIngredients ] = useState([])
    const [ recipe, setRecipe ] = useState("")
    const isFloating = ingredients.length > 0

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
            <div className="intro">Enter 5 ingredients you have at home, and let Chef Claude suggest a delicious recipe complete with easy-to-follow cooking instructions!</div>
            <div className={`input-wrapper ${isFloating ? 'fixed-bottom' : ''}`}>
                <form action={ addIngredient } className="add-ingredient-form">
                    <input 
                        type="text" 
                        placeholder="e.g. spinach"
                        aria-label="Add ingredient"
                        name="ingredient"
                    />
                    <button>Add ingredient</button>
                </form>
            </div>
            { ingredients.length > 0 && 
            <IngredientsList 
                ingredients = { ingredients } 
                getRecipe={ getRecipe }
            />}
            {recipe && <ClaudeRecipe recipe={ recipe }/>}
        </main>
    )
}