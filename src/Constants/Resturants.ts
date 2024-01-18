import claro from "../Assets/png/restaurants/claro.png";
import kabkem from "../Assets/png/restaurants/Kab-kem.png";
import messa from "../Assets/png/restaurants/Messa.png";
import nithanthai from "../Assets/png/restaurants/nithan-thai.png";
import tigerlily from "../Assets/png/restaurants/tiger-lily.png";
import yapan from "../Assets/png/restaurants/Yapan.png";

export interface Restaurant {
  name: string;
  chef: string;
  img: string;
}

const container: { title: string; cards: Restaurant[] } = {
  title: "popular restaurant in epicure:",
  cards: [
    {
      name: "Claro",
      chef: "Ran Shmueli",
      img: claro,
    },
    // { name: "Lumia", chef: "Meir", img: "" },
    {
      name: "Kab Kem",
      chef: "Yariv Malili",
      img: kabkem,
    },
    {
      name: "Messa",
      chef: "Aviv Moshe",
      img: messa,
    },
    {
      name: "Nitan Thai",
      chef: "Shahaf Shabtay",
      img: nithanthai,
    },
    {
      name: "Tiger Lilly",
      chef: "Yanir Green",
      img: tigerlily,
    },
    {
      name: "Ya Pan",
      chef: "Yuval Ben Moshe",
      img: yapan,
    },
  ],
};

export default container;
