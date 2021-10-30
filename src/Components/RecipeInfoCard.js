import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { RecipeCard } from './RecipeCard'

export const RecipeInfoCard = ({title, img, ingredientLines, resp, key}) => {   

    return (
        <div className="recipe-item">
            <h1>{title}</h1>
            <div className="ingredients-menu">
                <h4 className="title"> Ingredients</h4>
                <ul>
                    {ingredientLines.map(ingredients => (<li key={key}>{ingredients}</li>))}
                </ul>
            </div>
            <img src={img} alt="Receie Img"></img>
        </div>
    )
}
