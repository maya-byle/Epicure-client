import React from "react";
import './homePage.scss';
import { Fade } from "react-awesome-reveal";

import Header from "../Components/Header/Header";
import HeroTitle from "../Components/HeroTitle/HeroTitle";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import Icons from "../Components/Icons/Icons";
import ChefInfo from "../Components/ChefInfo/ChefInfo";
import AboutUs from "../Components/AboutUs/AboutUs";

import restaurantsInfo from '../Constants/resturants';
import dishesInfo from '../Constants/dishes';
import iconsInfo from '../Constants/icons';
import yossiRestaurantsInfo from '../Constants/yossiRestaurants';

const HomePage = () => {
    return(
        <div className="homePage">
            <Header></Header>
            <div className="feed">
                <Fade>
                    <HeroTitle></HeroTitle>
                    <CardsContainer container={restaurantsInfo} styles={{ isBig: true, isMore: true }}/>
                    <CardsContainer container={dishesInfo} styles={{ isBig: true, isMore: false }}/>
                    <Icons icons={iconsInfo}/>
                    <ChefInfo/>
                    <CardsContainer container={yossiRestaurantsInfo} styles={{ isBig: false, isMore: false }}/>
                    <AboutUs/>
                </Fade>
            </div>
        </div>
    )
}

export default HomePage;