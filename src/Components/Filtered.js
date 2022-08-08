import React from 'react'
import useFetch from '../Custom Hook/useFetch'
import { useParams, Link } from 'react-router-dom'

function Filtered() {
  const param = useParams();
  const {data, isPending, error} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${param.category}`)

  return (
    <div className="filtered">
        <h2>{param.category.toUpperCase()}</h2>
        {error ? (<p>{error}</p>) : ''}
        {isPending ? (<p>Loading...</p>) : <div className="filtered-card-container">
            {data && data.results.map((recipe) => (
              <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                <div className="filtered-card">
                  <h3 className='filtered-card-header'>{recipe.title}</h3>
                  <img className='filtered-card-image' src={recipe.image} alt={recipe.imageType} />
                </div>
              </Link>
            ))}
        </div>}
    </div>
  )
}

export default Filtered