import React, { useState } from 'react'
import useFetch from '../Custom Hook/useFetch'
import { useParams } from 'react-router-dom'

function Recipe() {
  const params = useParams();
  const {data, isPending, error} = useFetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
  const [active, setActive] = useState("instructions"); 
  const style = {
    backgroundColor: '#333',
    color: 'white'
  };

  return (
    <div className="product-specific">
        {error ? <p>{error}</p> : ''}
        {isPending ? (<p>Loading...</p>) : <div className="ps-container">
            <div className="ps-left">
                <h3 className='ps-left-header'>
                    {data.title}
                </h3>
                <img className='ps-image' src={data.image} alt={data.imageType} />
            </div>
            <div className="ps-right">
                <div className="detail-links">
                    <button onClick={() => setActive("instructions")} style={active==="instructions" ? style : {backgroundColor: 'white', color: 'black'}} className='ps-instruct' href="#">Instructions</button>
                    <button onClick={() => setActive("ingredients")} style={active==="ingredients" ? style : {backgroundColor: 'white', color: 'black'}} className='ps-ingred' href="#">Ingredients</button>
                </div>
                { active==="instructions" &&  <div className="div">
                    <h3 dangerouslySetInnerHTML={{__html: data.summary}} className='recipe-summary'></h3>
                    <p dangerouslySetInnerHTML={{__html: data.instructions}} className='recipe-instructions'></p>
                </div>}
                {active === "ingredients" && 
                <ul className='ingredient-list'>
                    {data.extendedIngredients.map((ingredient) => {
                        return (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        )
                    })}   
                </ul>
                }
            </div>
        </div>}
    </div>
  )
}

export default Recipe