import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Home = ({Recipes}) => {
   
  return (
    <div>
    <div className="recipes">
      {Recipes && Recipes.map(recipe => (
            <div key={recipe.id} className='recipe'>
                <p>
                {recipe.title}
                </p>
                <p>
                {recipe.ingredients.map((ing, i) => (<li key={i}>{ing}</li>))}
                </p>
                <p>{recipe.method.substring(0, 100)}</p>
                <p>{recipe.cookingTime}</p>
                <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
            </div>
      ))}
      </div>
    </div>
  )
}

export default Home
