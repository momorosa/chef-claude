export default function IngredientsList({ ingredients, toggleRecipeShown })
{
    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ ingredient }>{ ingredient }</li>
    ))

    return(
        <section className="ingredient-on-hand">
            <h2>Ingredients on hand:</h2>
            <ul className="inredients-list" aria-live="polite">{ ingredientListItems }</ul>
            { ingredients.length > 4 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={toggleRecipeShown} >Get a recipe</button>
            </div>}
        </section>
    )
}