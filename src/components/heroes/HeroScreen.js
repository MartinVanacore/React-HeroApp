import React from 'react'
import { Redirect, useParams } from 'react-router'
import { GetHeroById } from '../../selectors/GetHeroById'


export const HeroScreen = ({history}) => {

    const {heroId} = useParams()
    const hero = GetHeroById(heroId)
    const handleReturn = () => {

        if (history.length <= 2) 
        {
            history.push("/");
        } else {
            history.goBack();
        }


    };

    if ( !hero ) {
        return <Redirect to="/" />;
    }
    
    const {  
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters} = hero

    console.log(hero)

    
    

    return (

        
            <div className="row mt-5 ">
                <div className="col-4">
                    <img src={`../assets/heroes/${heroId}.jpg`} className="animate__animated animate__fadeInLeft card-img img-thumbnail img-fluid rounded-start animate__bounceInLeft" alt={`${superhero}`}/>
                </div>
                <div className="col-8">
                    
                 <h4 className="card-title">  { superhero } </h4>
                    <ul className="list-group list-group-fluent">
                        <li className="list-group-item"> <b> Publisher: </b> {publisher} </li>
                        <li className="list-group-item"> <b> Alter Ego: </b> {alter_ego} </li>
                        <li className="list-group-item"> <b> First Appearence: </b> {first_appearance} </li>
                            
                    </ul>
                    <br/>
                    <h5>Characters </h5>
                    <p> {characters} </p>

                    <button className="btn btn-outline-info" onClick={handleReturn}>
                        Return
                    </button>     
                        
                    
                </div>
            </div>
        
        
    )
    
}
     
        

