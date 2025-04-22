import ReactMarkdown from 'react-markdown'
import { forwardRef, useState } from 'react'
import favoriteLine from '../assets/favoriteLine.png'
import favoriteFilled from '../assets/favoriteFilled.png'

export default forwardRef(function ClaudeRecipe({ recipe }, ref) {

    const [favorite, setFavorite] = useState(false)

    function toggleFavorite() {
        setFavorite(prev => !prev)

    }

    return (
        <section ref={ref} className="recipe-section suggested-recipe-container">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{recipe || ""}</ReactMarkdown>
            { recipe && 
                <img 
                    src={favorite ? favoriteFilled : favoriteLine } 
                    alt={favorite ? "unlike" : "like"}
                    className={`heart-icon ${favorite ? 'pop' : ''}`}
                    onClick={ toggleFavorite }
                />
            }
        </section>
    )
})