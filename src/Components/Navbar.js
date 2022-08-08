import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/" className="left-container">
          <h2 className='nav-header'>YUMMLY</h2>
          <FontAwesomeIcon className='utensil-icon' icon={faUtensils} />
        </Link>
        <p>Your One Stop Shop For Amazing Recipes</p>
    </div>
  )
}

export default Navbar