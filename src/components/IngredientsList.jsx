import { useState } from 'react'
import LoadingMessage from './LoadingMessage.jsx'
import useClaudeLoader from '../useClaudeLoader.js'

export default function IngredientsList({ ingredients, getRecipe })
{
    const [isLoading, setIsLoading] = useState(false)
    const loadingMessage = useClaudeLoader(isLoading)

    function handleGetRecipe() {
        setIsLoading(true);
        getRecipe().finally(() => setIsLoading(false)); // Ensures spinner disappears after Claude responds
    }

    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ ingredient }>{ ingredient }</li>
    ))

    return(
        <section className="ingredient-on-hand">
            <div><h2>Ingredients on hand:</h2></div>
            <ul className="ingredients-list" aria-live="polite">{ ingredientListItems }</ul>

            {ingredients.length > 4 && 
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>

                    {isLoading ? (<LoadingMessage message={loadingMessage}/>
                    ) : (
                        <button className="get-recipe-btn" onClick={handleGetRecipe}>Get a recipe</button>
                    )}
                </div>
            }
        </section>
    )
}
