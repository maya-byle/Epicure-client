export interface CardType {
  _id?: string;
  image: string;
  name: string;
  subtitle?: string;
  description?: string;
  restaurant?: string;
  stars?: string;
  foodIcon?: string;
  price?: number;
  isBig?: string;
}

export interface CardContainer {
  title: string;
  cards: CardType[];
}

export interface CardStyle {
  isBig: boolean;
  isMore: boolean;
}
