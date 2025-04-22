import { useState, useEffect } from "react"

export default function IngredientsList({ ingredients, getRecipe })
{
    
    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ ingredient }>{ ingredient }</li>
    ))

    // loading spinner
        const [isLoading, setIsLoading] = useState(false)
        const [loadingMessageIndex, setLoadingMessageIndex] = useState(0)
    
        const loadingMessages = [
            "Chef Claude is slicing some logic onions...",
            "Tossing your ingredients into the algorithmic oven...",
            "Double-checking your pantry’s vibes...",
            "Whisking together the data sauce...",
            "Sprinkling a dash of AI seasoning..."
          ]
    
        useEffect(() => {
            let interval
    
            if(isLoading) {
                interval = setInterval(() => {
                    setLoadingMessageIndex(prev => (prev + 1) % loadingMessages.length)
                }, 2000)
            } else {
                clearInterval(interval)
                setLoadingMessageIndex(0)
            }
            return () => clearInterval(interval)
        }, [isLoading])

        function handleGetRecipe() {
            setIsLoading(true);
            getRecipe().finally(() => setIsLoading(false)); // Ensures spinner disappears after Claude responds
        }

    return(
        <section className="ingredient-on-hand">
            <div><h2>Ingredients on hand:</h2></div>
            <ul className="ingredients-list" aria-live="polite">{ ingredientListItems }</ul>
            { ingredients.length > 4 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                {isLoading ? (
                    <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                        <div className="spinner" />
                            <p style={{ margin: 0 }}>{loadingMessages[loadingMessageIndex]}</p>
                        </div>
                    ) : (<button onClick={handleGetRecipe}>Get a recipe</button>)
                }
            </div>}
        </section>
    )
}