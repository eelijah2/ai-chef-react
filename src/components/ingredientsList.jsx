export default function IngredientsList(props) {

    //{ingredients.length} => One-way relation => pass as props.ingredientsLength
    //{ingredientsListItems} => One-way relation => pass as props.ingredientsListItems
    //{handleRecipeButton} => Two-way relation => pass as props.handleClick

    return (
        <>
            {props.ingredientsLength > 0 && <section>
                <h2>4 or more ingredients needed to make a recipe</h2>
                <h2>Ingredients on hand:</h2>
                <ul>
                    {props.ingredientsListItems}
                </ul>
                {props.ingredientsLength > 3 && <div className="get-recipe-container">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>}
                <button onClick={props.handleClick}>Get a recipe</button>
            </section>}
        </>
        
    )
}