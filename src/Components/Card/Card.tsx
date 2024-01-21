// import * as React from 'react';
import './Card.scss';

export interface CardType {
    img: string;
    title: string;
    subTitle?: string;
    stars?: string;
    foodIcon?: string;
    price?: number;
    isBig?: string;
}

function Card(card: CardType) {
    return (
        <div className={`card ${card.isBig}`}>
            <img className='card_img' src={card.img} alt={card.title}/>
            <div className='card_content'>
                <h3 className={`medium_bold_font ${card.isBig}`}>{card.title}</h3>
                {card.subTitle && <h5 className="xsml_font">{card.subTitle}</h5>}
                {/* TODO: add food icon for dish card */}
                {card.stars && <img className="rank" src={card.stars} alt='rank'/>}
                {card.price && <h5 className="xsml_font bold">₪{card.price}</h5>} 
                {/* TODO: add the grey line icon for the desktop price */}
            </div>
            {/* <Typography size customStyles>
                asdasdada
            </Typography> */}
        </div>
    );
}

export default Card;
