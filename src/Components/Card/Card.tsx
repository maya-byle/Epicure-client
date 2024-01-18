// import * as React from 'react';
import './Card.scss';

export interface CardType {
    img: string;
    title: string;
    subTitle: string;
    desc?: string;
    foodIcon?: string;
    price?: number;
}

function Card(card: CardType) {
    return (
        <div className="card">
            <img className='card_img' src={card.img} alt={card.title}/>
            <div className='card_content'>
                <h3 className="medium_bold_font">{card.title}</h3>
                <h5 className="xsml_font">{card.subTitle}</h5>
                {/* TODO: add food icon for dish card */}
                {card.price && <h5 className="xsml_font bold">₪{card.price}</h5>}
            </div>
            {/* <Typography size customStyles>
                asdasdada
            </Typography> */}
        </div>
    );
}

export default Card;
