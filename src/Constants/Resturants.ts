import claro from "../Assets/png/restaurants/claro.png";
import kabkem from "../Assets/png/restaurants/Kab-kem.png";
import messa from "../Assets/png/restaurants/Messa.png";
import nithanthai from "../Assets/png/restaurants/nithan-thai.png";
import tigerlily from "../Assets/png/restaurants/tiger-lily.png";
import yapan from "../Assets/png/restaurants/Yapan.png";

import oneStar from "../Assets/svg/3stars.svg";
import twoStars from "../Assets/svg/3stars.svg";
import threeStars from "../Assets/svg/3stars.svg";
import fourStars from "../Assets/svg/4stars.svg";
import { CardType } from "../Types/cardTypes";

const container: { title: string; cards: CardType[] } = {
  title: "popular restaurant in epicure:",
  cards: [
    {
      _id: "1",
      name: "Claro",
      description: "Ran Shmueli",
      image: claro,
      stars: fourStars,
    },
    {
      _id: "6",
      name: "Kab Kem",
      description: "Yariv Malili",
      image: kabkem,
      stars: threeStars,
    },
    {
      _id: "2",
      name: "Messa",
      description: "Aviv Moshe",
      image: messa,
      stars: fourStars,
    },
    {
      _id: "3",
      name: "Nitan Thai",
      description: "Shahaf Shabtay",
      image: nithanthai,
      stars: oneStar,
    },
    {
      _id: "4",
      name: "Tiger Lilly",
      description: "Yanir Green",
      image: tigerlily,
      stars: fourStars,
    },
    {
      _id: "5",
      name: "Ya Pan",
      description: "Yuval Ben Moshe",
      image: yapan,
      stars: twoStars,
    },
  ],
};

export default container;
