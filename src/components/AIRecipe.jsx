import ReactMarkdown from "react-markdown"
export default function AIRecipe(props) {

    //{recipeShown} => One-way relation => pass as props.recipeShown

    return (
            <section>
            <h2>Chef AI Recommends:</h2>
            <ReactMarkdown>
                {props.recipeResult} 
            </ReactMarkdown>

            </section>
    )
}