import { CardType } from "../Types/cardTypes";
import spicyIcon from "../Assets/svg/Spicy.svg";
import veganIcon from "../Assets/svg/vegan.svg";
import vegitarianIcon from "../Assets/svg/Vegitarian.svg";
import oneStar from "../Assets/svg/1star.svg";
import twoStars from "../Assets/svg/2stars.svg";
import threeStars from "../Assets/svg/3stars.svg";
import fourStars from "../Assets/svg/4stars.svg";
import fiveStars from "../Assets/svg/5stars.svg";

export const getFoodIcon = (foodIcon: string): string | undefined => {
  switch (foodIcon) {
    case "Spicy":
      return spicyIcon;
    case "Vegan":
      return veganIcon;
    case "Vegi":
      return vegitarianIcon;
    default:
      return undefined;
  }
};

export const getRatingImage = (rating: number): string => {
  switch (rating) {
    case 1:
      return oneStar;
    case 2:
      return twoStars;
    case 3:
      return threeStars;
    case 4:
      return fourStars;
    case 5:
      return fiveStars;
    default:
      return oneStar;
  }
};

export const transformChefRestaurantsData = (
  chefName: string,
  restaurantsData: any
) => {
  const chefOfTheWeekRestaurants: CardType[] = restaurantsData.map(
    (restaurant: any, index: number) => ({
      _id: index,
      name: restaurant.name,
      image: restaurant.image,
    })
  );

  return {
    title: `${chefName.split(" ")[0]}’s Restaurants:`,
    cards: chefOfTheWeekRestaurants,
  };
};

export const transformDishes = (dishes: any) => {
  const newDishes: CardType[] = dishes.map((dish: any) => ({
    _id: dish._id,
    name: dish.name,
    description: dish.ingredients,
    image: dish.image,
    price: dish.price,
    foodIcon: getFoodIcon(dish.tags[0]),
  }));

  return {
    title: "Signature Dish Of:",
    cards: newDishes,
  };
};

export const transformRestaurants = (restaurants: any) => {
  const newDishes: CardType[] = restaurants.map((restaurant: any) => ({
    _id: restaurant._id,
    name: restaurant.name,
    description: restaurant.chef.name,
    image: restaurant.image,
    stars: getRatingImage(restaurant.rank),
  }));

  return {
    title: "popular restaurant in epicure:",
    cards: newDishes,
  };
};
