import React, {useState, useEffect} from 'react'
import { Footer } from './Footer'
import { RecipeInfoCard } from './RecipeInfoCard'

export const SearchField = () => {

    const [text, setText] = useState('')
    const [response, setResponse] = useState([])
    const [query, setQuery] = useState('ice cream')

    const APP_ID = "37a6e374";
    const APP_KEY = "32848d0989d60b71397f17ef72e75f31";

    useEffect(async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setResponse(data.hits);
        console.log(data.hits)
    }, [query])

    return (
        <div className="search-field">
            <form>
                <input type="text" className="search-box" value={text} onChange={e => setText(e.target.value)}></input>
                <button onClick={(e)=>{setQuery(text); e.preventDefault()}} className="search-button">Search</button>
                <div className="receipe-menu-con">
                    {response.map(resp => (<RecipeInfoCard key={resp.recipe.uri} title={resp.recipe.label} img={resp.recipe.image} ingredientLines={resp.recipe.ingredientLines} resp={resp}/>))}
                </div>
                {/*<Footer/>*/}
            </form>
        </div>
    )
}
