import { useState } from 'react'

export default function Main()
{
    const [ ingredients, setIngredients ] = useState([])

    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ ingredient }>{ ingredient }</li>
    ))

    function addIngredient(formData) 
    {
        // Trim the input to remove extra whitespace
        const newIngredient = formData.get("ingredient").trim()

        // If the input is empty, return early without updating state.
        if (newIngredient === "") { return }
        setIngredients(prevIngredeints => [ ...prevIngredeints, newIngredient ])
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
            { ingredients.length > 0 && <section className="ingredient-on-hand">
                <h2>Ingredients on hand:</h2>
                <ul className="inredients-list" aria-live="polite">{ ingredientListItems }</ul>
                { ingredients.length > 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
        </main>
    )
}