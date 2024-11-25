import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

const Search = () => {
   
    const search = useLocation().search
    const queryParams = new URLSearchParams(search)
    const query = queryParams.get('q')

    const endpoint = 'http://localhost:4000/recipes?q=' + query
    const {data, error,isLoading} = useFetch(endpoint)
  return (
    <div>
      <p>Your search include '{query}'</p>
      <RecipeList Recipes={data} />
    </div>
  )
}

export default Search
