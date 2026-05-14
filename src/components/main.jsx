import { useState } from 'react'

import IngredientsList from "./ingredientsList"
import AIRecipe from "./AIRecipe"
import { getRecipeFromAI } from "../../ai"


export default function Main() {
    const [ingredients, set_ingredients] = useState(["Soy sauce", "Vinegar", "Garlic", "Pork Belly"])

    const [recipeResult, set_recipeResult] = useState("")

    const ingredientsListItems = ingredients.map((ingredient) => 
        (<li key={ingredient}>{ingredient}</li>)
    )
    /* 
    A FormData object grabs all the data of a Form's input values
    We create a variable "newIngredient" to obtain the value of input field named "ingredient"
    */
    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        set_ingredients(prev_ingredient => [...prev_ingredient, newIngredient])
    }

    async function handleRecipeButton() {
        const RecipeMarkdown = await getRecipeFromAI(ingredients)
        set_recipeResult(RecipeMarkdown)
    }

    return (
        <main>
            <form action={ handleSubmit }>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button> [+] Add ingredient </button>
            </form>
         
            <IngredientsList
                ingredientsLength={ingredients.length}
                ingredientsListItems={ingredientsListItems}
                handleClick={handleRecipeButton}/>

            {recipeResult && <AIRecipe recipeResult={recipeResult} />}
        </main>
    )
}