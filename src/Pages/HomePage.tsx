import React, { useEffect, useState } from "react";
import './homePage.scss';
import { Fade } from "react-awesome-reveal";

import Header from "../Components/Header/Header";
import HeroTitle from "../Components/HeroTitle/HeroTitle";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import Icons from "../Components/Icons/Icons";
import ChefInfo from "../Components/ChefInfo/ChefInfo";
import AboutUs from "../Components/AboutUs/AboutUs";
import Footer from "../Components/Footer/Footer";

import iconsInfo from '../Constants/icons';
import axios from "axios";
import { IChefOfTheWeek } from "../Types/chefTypes";
import { transformChefRestaurantsData, transformDishes, transformRestaurants } from "../utils/utils";
import { CardContainer } from "../Types/cardTypes";

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [chefOfTheWeek, setChefOfTheWeek] = useState<IChefOfTheWeek>({name:"",description:"",image:"", restaurants:[]});
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const restaurantsResponse = await axios.get("http://localhost:3001/api/v1/restaurants");
                const chefsResponse = await axios.get("http://localhost:3001/api/v1/chefs/chefOfTheWeek");
                const dishesResponse = await axios.get("http://localhost:3001/api/v1/dishes");
                setRestaurants(restaurantsResponse.data.data);
                setChefOfTheWeek(chefsResponse.data.data);
                setDishes(dishesResponse.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const chefOfTheWeekRestaurants: CardContainer = transformChefRestaurantsData(chefOfTheWeek.name, chefOfTheWeek.restaurants)
    const dishesInfo: CardContainer = transformDishes(dishes)
    const restaurantsInfo: CardContainer = transformRestaurants(restaurants)

    return(
        <div className="homePage">
            <Header/>
            <div className="feed">
                <Fade>
                    <HeroTitle></HeroTitle>
                    <CardsContainer container={restaurantsInfo} styles={{ isBig: true, isMore: true }}/>
                    <CardsContainer container={dishesInfo} styles={{ isBig: true, isMore: false }}/>
                    <Icons icons={iconsInfo}/>
                    <ChefInfo name={chefOfTheWeek.name} description={chefOfTheWeek.description} image={chefOfTheWeek.image}/>
                    <CardsContainer container={chefOfTheWeekRestaurants} styles={{ isBig: false, isMore: false }}/>
                    <AboutUs/>
                </Fade>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;