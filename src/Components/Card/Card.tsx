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

function Card(props: CardType) {
    return (
        <div className="card">
            <img className='card_img' src={props.img} alt={props.title}/>
            <div className='card_content'>
                <h3 className="medium_bold_font">{props.title}</h3>
                <h5 className="xsml_font">{props.subTitle}</h5>
            </div>
            {/* <Typography size customStyles>
                asdasdada
            </Typography> */}
        </div>
    );
}

export default Card;
