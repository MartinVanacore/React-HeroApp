import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { GetHeroesByName } from '../../selectors/GetHeroesByName';


export const Search = ({history}) => {

    const location = useLocation();
    // console.log(location.search);
    const {q = ''} = queryString.parse(location.search);

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`) }

    const heroFilter = useMemo(() => GetHeroesByName(q), [q])
    // const heroFilter = GetHeroesByName(searchText);

    return (
        <div >
            <h4 className="m-2">Search Screen</h4>

            <form className="m-5" onSubmit={handleSearch}>
                
                    
               <input type="text" name="searchText" value={searchText} onChange={handleInputChange} className="form-control mb-3 col-8 " placeholder="Find your hero.."></input>
                

                <button type="Submit" className="btn btn-primary col-bm-8" >
                    Find!
                </button>
            </form>
            <div className= " m-4 col-bm-7">
                <h4>Results</h4>
                <hr/>
                {
                    (q === '')
                    &&
                    <div className="alert alert-info"> 
                        Search a hero
                    </div>
                } 

                {
                    ( q !== '' && heroFilter.length === 0 )
                    &&
                    <div className="alert alert-danger">
                        Not find a hero {q}
                    </div>
                }

                {
                    heroFilter.map(hero => (
                        <HeroCard 
                            key= {hero.id}
                            {...hero}
                            />
                    ))

                }
                
            </div>
        </div>
        
    )
}