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

const HomePage = () => {
    return(
        <div className="homePage">
            <Header></Header>
            <div className="feed">
                <HeroTitle></HeroTitle>
                <CardsContainer {...restaurantsInfo}/>
                <CardsContainer {...dishesInfo}/>
                <Icons icons={iconsInfo}/>
                <ChefInfo/>
            </div>
        </div>
    )
}

export default HomePage;