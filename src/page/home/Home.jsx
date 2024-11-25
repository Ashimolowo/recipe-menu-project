import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'


const Home = () => {
    const endpoint = 'http://localhost:4000/recipes'
    const {data, error,isLoading} = useFetch(endpoint)
  return (
    <div>
        {isLoading && <div>Loading data</div>}
        {error && <div>{error}</div>}
        <RecipeList Recipes={data} />
    </div>
  )
}

export default Home
