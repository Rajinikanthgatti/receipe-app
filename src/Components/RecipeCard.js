import React, {useEffect} from 'react'

export const RecipeCard = ({resp}) => {
    useEffect(() => {
        console.log('in side card')
    }, [])
    return (
        <div>
            <h1>{resp}</h1>
            {console.log(resp)}
            Receipe Of Items goes here
        </div>
    )
}
