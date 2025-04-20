export default function IngredientsList({ ingredients, getRecipe })
{
    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ ingredient }>{ ingredient }</li>
    ))

    return(
        <section className="ingredient-on-hand">
            <div><h2>Ingredients on hand:</h2></div>
            <ul className="ingredients-list" aria-live="polite">{ ingredientListItems }</ul>
            { ingredients.length > 4 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={ getRecipe } >Get a recipe</button>
            </div>}
        </section>
    )
}