import React from 'react'
import useFetch from '../Custom Hook/useFetch'
import { useParams, Link } from 'react-router-dom'

function Searched() {
  const params = useParams();
  const {data, isPending, error} = useFetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params.name}&number=8`)
  console.log(data);
  return (
    <div className="searched">
      <h2>{params.name.toUpperCase()}</h2>
      {data && data.results.length <= 0 ? (<p>No Results Found For '{params.name}'</p>) : ''}
      {error ? (<p>{error}</p>) : ''}
      {isPending ? (<p>Loading...</p>) : <div className="searched-card-container">
            {data && data.results.map((recipe) => (
              <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                <div className="searched-card">
                  <h3 className='searched-card-header'>{recipe.title}</h3>
                  <img className='searched-card-image' src={recipe.image} alt={recipe.imageType} />
                </div>
              </Link>
            ))}
        </div>}
    </div>
  )
}

export default Searched