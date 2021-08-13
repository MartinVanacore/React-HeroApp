import React from 'react'
import { GetHeroByPublisher } from '../../selectors/GetHeroByPublisher';
import { HeroCard } from './HeroCard';


export const HeroesList = ({ publisher }) => {

    const heroes = GetHeroByPublisher( publisher );

    return (
        <div className="container row-col-4 animate__animated animate__fadeInLeft"> 
        {/* // row-cols-3 // */}
            <div className="card-columns ">

                
            
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                        /> 
                    ))
            }
            </div>
        </div>
    )
}
