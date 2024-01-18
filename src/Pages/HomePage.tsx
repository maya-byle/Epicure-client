import React from "react";
import Header from "../Components/Header/Header";
import HeroTitle from "../Components/HeroTitle/HeroTitle";
import CardsContainer from "../Components/CardsContainer/CardsContainer";

const HomePage = () => {
    return(
        <div className="HomePage">
            <Header></Header>
            <div style={{display:'flex', flexDirection:'column', gap:'48px'}}>
                <HeroTitle></HeroTitle>
                <CardsContainer></CardsContainer>
            </div>
        </div>
    )
}

export default HomePage;