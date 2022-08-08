import React from 'react'
import useFetch from '../Custom Hook/useFetch'
import { Link } from 'react-router-dom'

function Veggie() {
  const {data, isPending, error} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=3`)
  
  return (
    <div className="veggie">
        <h2>Our Vegetarian Picks</h2>
        {error ? (<p>{error}</p>) : ''}
        {isPending ? (<p>Loading...</p>) : <div className="veggie-card-container">
            {data && data.results.map((recipe) => (
              <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                <div className="veggie-card">
                  <h3 className='veggie-card-header'>{recipe.title}</h3>
                  <img className='veggie-card-image' src={recipe.image} alt={recipe.imageType} />
                </div>
              </Link>
            ))}
        </div>}
    </div>
  )
}

export default Veggie