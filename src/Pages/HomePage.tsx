import React from "react";
import Header from "../Components/Header/Header";
import HeroTitle from "../Components/HeroTitle/HeroTitle";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import Icons from "../Components/Icons/Icons";

import restaurantsInfo from '../Constants/resturants';
import dishesInfo from '../Constants/dishes';
import iconsInfo from '../Constants/icons';

const HomePage = () => {
    return(
        <div className="HomePage">
            <Header></Header>
            <div style={{display:'flex', flexDirection:'column', gap:'48px'}}>
                <HeroTitle></HeroTitle>
                <CardsContainer {...restaurantsInfo}/>
                <CardsContainer {...dishesInfo}/>
                <Icons icons={iconsInfo}/>
            </div>
        </div>
    )
}

export default HomePage;