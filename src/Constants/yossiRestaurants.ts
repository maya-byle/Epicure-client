import onza from "../Assets/png/restaurants/onza.png";
import kitchenmarket from "../Assets/png/restaurants/kitchenmarket.png";
import mashya from "../Assets/png/restaurants/mashya.png";

import { CardType } from "../Components/Card/Card";

const container: { title: string; cards: CardType[] } = {
  title: "Yossi’s Restaurants",
  cards: [
    {
      title: "Onza",
      img: onza,
    },
    {
      title: "Kitchen Market",
      img: kitchenmarket,
    },
    {
      title: "Mashya",
      img: mashya,
    },
  ],
};

export default container;
