import React, { useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './create.css'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const [title, setTitle] = useState('')
    const [newIng, setNewIng] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')

    const {postData, data, isLoading, error} = useFetch('http://localhost:4000/recipes', 'POST')
    
    const ingres = useRef()
    const handleAdd = () => {
        const ing = newIng.trim()
        if(ing && !ingredients.includes(ing)) {
            setIngredients([...ingredients, ing])
            setNewIng('')
            ingres.current.focus()
        }

    }

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        postData({title,ingredients,method,cookingTime: cookingTime + 'Minutes'})
        setTimeout(()=>{
            navigate('/')
        },2000)

    }
  return (
    <div className='create'>
             {isLoading && <p>Loading...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
       <form className='form' onSubmit={(e)=>handleSubmit(e)}>
        <label>
            <span>Recipe title</span>
            <input 
                type="text" 
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
              required
            />
        </label>
       
        <label>
            <span>Recipe ingredients</span>
            <div className='ing'>
            <input 
                type="text" 
                onChange={(e)=>setNewIng(e.target.value)}
                value={newIng}
                ref={ingres}
              
            />
             <button className='add' onClick={handleAdd}>add</button>
             </div>
        </label>
        {ingredients.map((ing,i)=>(<li key={i}>{ing},</li>))}
        <label>
            <span>Recipe method</span>
            <textarea 
                type="text" 
                onChange={(e)=>setMethod(e.target.value)}
                value={method}
                required
            />
        </label>
        <label>
            <span>Cooking Time (minutes)</span>
            <input 
                type="number" 
                onChange={(e)=>setCookingTime(e.target.value)}
                value={cookingTime}
                required
            />
        </label>
        <button className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Create
