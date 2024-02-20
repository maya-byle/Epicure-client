import claro from "../Assets/png/dishes/claro.png";
import garbanzoFrito from "../Assets/png/dishes/garbanzoFrito.png";
import smokedPizza from "../Assets/png/dishes/smokedPizza.png";
import tamalako from "../Assets/png/dishes/ta-ma-la-ko.png";
import spicyIcon from "../Assets/svg/Spicy.svg";
import veganIcon from "../Assets/svg/vegan.svg";
import vegitarianIcon from "../Assets/svg/Vegitarian.svg";
import { CardType } from "../Types/cardTypes";

const container: { title: string; cards: CardType[] } = {
  title: "Signature Dish Of:",
  cards: [
    {
      image: claro,
      name: "Pad Ki Mao",
      description:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      foodIcon: spicyIcon,
      price: 88,
    },
    {
      image: garbanzoFrito,
      name: "Garbanzo Frito",
      description:
        "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
      foodIcon: spicyIcon,
      price: 98,
    },
    {
      image: tamalako,
      name: "ta ma la ko",
      description:
        "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
      foodIcon: vegitarianIcon,
      price: 65,
    },
  ],
};

export default container;
