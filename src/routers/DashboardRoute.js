import React from 'react'
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    
  } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
// import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Search } from '../components/search/Search';
import { Navbar } from '../components/ui/NavBar';



export const DashboardRoute = () => {
    return (
        <>
            <Navbar />
            <div>

                <Switch>
                        {/* <Route exact path="/" component={ LoginScreen }/> */}
                        <Route exact path="/dc" component={ DcScreen }/>
                        <Route exact path="/marvel" component={ MarvelScreen }/>
                        <Route exact path="/search" component={ Search }/>

                        <Route exact path="/heroes/:heroId" component={ HeroScreen }/>

                        <Redirect to="/marvel" />     
                        
                </Switch>
            </div>
        </>
    )
}
