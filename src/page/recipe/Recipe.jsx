import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Recipe = () => {
    const {id} = useParams()
    const endpoint = 'http://localhost:4000/recipes/' + id
    const {data: recipe, error,isLoading} = useFetch(endpoint )


  return (
    <div>
      <p>{recipe.method}</p>
      <p>{recipe.cookingTime}</p>
    </div>
  )
}

export default Recipe
