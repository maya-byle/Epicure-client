import { CardType } from "./cardTypes";

export interface IChefOfTheWeek {
  name: string;
  description: string;
  image: string;
  restaurants?: CardType[];
}
