import claro from "../Assets/png/restaurants/claro.png";
import kabkem from "../Assets/png/restaurants/Kab-kem.png";
import messa from "../Assets/png/restaurants/Messa.png";
import nithanthai from "../Assets/png/restaurants/nithan-thai.png";
import tigerlily from "../Assets/png/restaurants/tiger-lily.png";
import yapan from "../Assets/png/restaurants/Yapan.png";

import { CardType } from "../Components/Card/Card";

const container: { title: string; cards: CardType[] } = {
  title: "popular restaurant in epicure:",
  cards: [
    {
      title: "Claro",
      subTitle: "Ran Shmueli",
      img: claro,
    },
    // { title: "Lumia", subTitle: "Meir", img: "" },
    {
      title: "Kab Kem",
      subTitle: "Yariv Malili",
      img: kabkem,
    },
    {
      title: "Messa",
      subTitle: "Aviv Moshe",
      img: messa,
    },
    {
      title: "Nitan Thai",
      subTitle: "Shahaf Shabtay",
      img: nithanthai,
    },
    {
      title: "Tiger Lilly",
      subTitle: "Yanir Green",
      img: tigerlily,
    },
    {
      title: "Ya Pan",
      subTitle: "Yuval Ben Moshe",
      img: yapan,
    },
  ],
};

export default container;
