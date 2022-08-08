import React from 'react'
import useFetch from '../Custom Hook/useFetch'
import { Link } from 'react-router-dom'

function Popular() {
  const {data, isPending, error} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=Indian,Middle Eastern, Spanish, Thai&number=4`)
  
  return (
    <div className="popular">
      <h2>Trending Now</h2>
      {error ? (<p>{error}</p>) : ''}
      {isPending ? (<p>Loading...</p>) : <div className="popular-card-container">
            {data && data.results.map((recipe) => (
              <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                <div className="popular-card">
                  <h3 className='popular-card-header'>{recipe.title}</h3>
                  <img className='popular-card-image' src={recipe.image} alt={recipe.imageType} />
                </div>
              </Link>
            ))}
        </div>}
    </div>
  )
}

export default Popular