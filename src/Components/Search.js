import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPizzaSlice, faBurger, faFrancSign, faPepperHot } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    navigate(`/searched/${input}`);
    setInput('');
  }
  return (
    <div className="search">
        <form onSubmit={handleSubmit} className='search-form'>
            <FontAwesomeIcon className='search-icon' icon={faSearch} inverse />
            <input value={input} onChange={(e) => setInput(e.target.value)} className='search-bar' type="text" />
        </form>
        <div className="category-container">
            <Link to="/filtered/italian" className='category-links'>
                <FontAwesomeIcon icon={faPizzaSlice}/>
                <p>Italian</p>
            </Link>
            <Link to="/filtered/american" className='category-links'>
                <FontAwesomeIcon icon={faBurger}/>
                <p>American</p>
            </Link>
            <Link to="/filtered/thai" className='category-links'>
                <FontAwesomeIcon icon={faPepperHot}/>
                <p>Thai</p>
            </Link>
            <Link to="/filtered/french" className='category-links'>
                <FontAwesomeIcon icon={faFrancSign}/>
                <p>French</p>
            </Link>
        </div>
    </div>
  )
}

export default Search