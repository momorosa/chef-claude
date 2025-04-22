import { useState, useRef, useEffect } from 'react'
import ClaudeRecipe from './ClaudeRecipe.jsx'
import IngredientsList from './IngredientsList.jsx'
import { fetchRecipe } from '../fetchAPI.js'

export default function Main()
{
    const [ ingredients, setIngredients ] = useState([])
    const [ recipe, setRecipe ] = useState("")
    const recipeSection = useRef(null)

    useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null) {
            setTimeout(()=> {
                recipeSection.current.scrollIntoView({ behavior: "smooth" })
            }, 100)
        }
    },[recipe])

    async function getRecipe() {
        const recipeMarkdown = await fetchRecipe(ingredients)
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

    function handleResetApp() {
        setIngredients([]);
        setRecipe(null);
      }

    return(
        <main>
            <div className="intro">Enter 5 ingredients you have at home, and let Chef Claude suggest a delicious recipe complete with easy-to-follow cooking instructions!</div>
            <div className="fixed-bottom">
                <form action={ addIngredient } className="add-ingredient-form">
                    <input 
                        type="text" 
                        placeholder="e.g. spinach"
                        aria-label="Add ingredient"
                        name="ingredient"
                    />
                    <button>Add ingredient</button>
                </form>
                <footer>©2025 Rosa Choi • Crafted by momorosa</footer>
            </div>
            { ingredients.length > 0 && 
            <IngredientsList 
                ingredients = { ingredients } 
                getRecipe = { getRecipe }
            />}
            {recipe && <ClaudeRecipe ref={ recipeSection } recipe={ recipe }/>}
            {recipe && <div className="reset">
                <button className="start-over-button" onClick={handleResetApp}>
                    Start a new recipe
                </button>
            </div>}
        </main>
    )
}