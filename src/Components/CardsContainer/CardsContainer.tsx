import * as React from 'react';
import './CardsContainer.scss'
import arrow from '../../Assets/svg/arrow.svg';

import Card, {CardType} from '../Card/Card';

function CardsContainer(container: {title: string, cards: CardType[]}) {
    return ( 
        <div className='cards_container'>
            <h2 className='medium_font'>{container.title}</h2> 
            <div className='cards'>
                {container.cards.map((card: CardType) => (
                    <Card
                        key={card.title}
                        img={card.img}
                        title={card.title}
                        subTitle={card.subTitle}
                        stars={card.stars}
                        foodIcon={card.foodIcon}
                        price={card.price}
                    />
                ))}
            </div>
            <div className='more_container'>
                <h3 className='medium_font_not_apper'>All restaurants</h3>
                <img className='arrow' src={arrow}></img>
            </div>
        </div>
    );
}

export default CardsContainer;