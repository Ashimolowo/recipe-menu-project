import SearchBar from "./SearchBar"
import { useTheme } from "../hooks/useTheme"
import { Link } from "react-router-dom"

const Navbar = () => {
  const {color} = useTheme()
  return (
    <div className="navbar" style={{
      background: color
    }}>
     <ul>
        <li>
          <Link to='/'>Cooking Ninja</Link>
        </li>
        <li>
            <SearchBar />
        </li>
        <li>
          <Link to='/create'>Create</Link>
        </li>
     </ul>
    </div>
  )
}

export default Navbar
