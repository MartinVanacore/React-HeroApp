import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ( {

        id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card  " style={{maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-4">
                    <img src={`../assets/heroes/${id}.jpg`} className="card-img " alt={`${superhero}`}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">  { superhero } </h5>
                         <p className="card-text"> {alter_ego} </p>
                         { (alter_ego !== characters) && <p className="card-text">{characters}</p>}
                         <p className="card-text text-muted">{first_appearance}</p>
                         <Link  to={`./heroes/${id}`}> More.. </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}