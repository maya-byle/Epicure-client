import React from "react";
import './homePage.scss';

import Header from "../Components/Header/Header";
import HeroTitle from "../Components/HeroTitle/HeroTitle";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import Icons from "../Components/Icons/Icons";
import ChefInfo from "../Components/ChefInfo/ChefInfo";

import restaurantsInfo from '../Constants/resturants';
import dishesInfo from '../Constants/dishes';
import iconsInfo from '../Constants/icons';
import yossiRestaurantsInfo from '../Constants/yossiRestaurants';

import { CardContainer, CardStyle } from "../Components/CardsContainer/CardsContainer";
const HomePage = () => {
    return(
        <div className="homePage">
            <Header></Header>
            <div className="feed">
                <HeroTitle></HeroTitle>
                {/* <CardsContainer {...restaurantsInfo}/> */}
                <CardsContainer container={restaurantsInfo} styles={{ isBig: true, isCentered: true }}/>
                <CardsContainer container={dishesInfo} styles={{ isBig: true, isCentered: true }}/>
                <Icons icons={iconsInfo}/>
                <ChefInfo/>
                <CardsContainer container={yossiRestaurantsInfo} styles={{ isBig: false, isCentered: false }}/>
            </div>
        </div>
    )
}

export default HomePage;