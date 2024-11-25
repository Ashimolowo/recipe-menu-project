import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SearchBar = () => {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`)

  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
            <input type="text" 
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
            <button>Search</button>
        </label>
      </form>
    </div>
  )
}

export default SearchBar
