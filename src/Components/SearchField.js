import React, {useState, useEffect} from 'react'
import { Footer } from './Footer'
import { RecipeInfoCard } from './RecipeInfoCard'

export const SearchField = () => {

    const [text, setText] = useState('ice cream')
    const [response, setResponse] = useState([])
    const [query, setQuery] = useState('ice cream')
    const [loader, setLoader] = useState('true')

    const APP_ID = "37a6e374";
    const APP_KEY = "32848d0989d60b71397f17ef72e75f31";

    useEffect(async () => {
        setLoader('true')
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setResponse(data.hits);
        console.log(data.hits)
        setLoader('false')
    }, [query])

    return (
        <div className={ loader === 'true' ? "loader-div search-field " : "search-field"}>
            {loader==='true'? <div className="loader"></div> : ''}
            <form>
                <input type="text" className="search-box" value={text} onChange={e => setText(e.target.value)}></input>
                <button onClick={(e)=>{setQuery(text); e.preventDefault()}} className="search-button">Search</button>
                <div className="receipe-menu-con">
                    { (response.length <1 && loader !== 'true') ? <div className="no-items">No Items to display</div> : response.map(resp => (<RecipeInfoCard key={resp.recipe.uri} title={resp.recipe.label} img={resp.recipe.image} ingredientLines={resp.recipe.ingredientLines} resp={resp}/>))}
                </div>
                {/*<Footer/>*/}
            </form>
        </div>
    )
}
