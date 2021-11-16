import {Link} from "react-router-dom";
import {LandingCategories} from "./LandingCategories/LandingCategories";
import {Categories} from "../Categories/Categories";
import {BestSellers} from "./BestSellers/BestSellers";
import {ShowRoom} from "./ShowRoom/ShowRoom";
import React, {useEffect} from "react";
import {INITIAL_STATE} from "../../App";
import './landing.scss';


export const Landing = () => {
    console.log('INITIAL_STATE', INITIAL_STATE)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='landing'>
            <div className='landing__wrapper'>
                <div className='landing__header-img'></div>
                <div className='landing__header'>
                    <div className='landing__header-motto'>
                        <h1 className='landing__header-heading'>
                            Crafting Better Experience For Your Family
                        </h1>
                        <p className='landing__header-description'>
                            We are the best furniture platform. We are already working on thousands of future home
                            projects.
                            Trust us, you will surely be satisfied
                        </p>
                    </div>
                    <div className='landing__header-buttons'>
                        <Link className='landing__header-button' to='/filter'>Go Shopping</Link>
                        <Link className='landing__header-button' to='/'>Interior Designer</Link>
                    </div>
                </div>
            </div>
            <BestSellers/>
            <LandingCategories/>
            <ShowRoom/>
            <Categories/>
        </div>
    )
}