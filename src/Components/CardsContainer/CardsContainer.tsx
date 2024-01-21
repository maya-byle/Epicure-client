import * as React from 'react';
import './CardsContainer.scss'
import arrow from '../../Assets/svg/arrow.svg';

import Card, {CardType} from '../Card/Card';

export interface CardContainer {
    title: string,
    cards: CardType[]
}

export interface CardStyle {
    isBig: boolean,
    isCentered: boolean,
}

function CardsContainer({ container, styles }: { container: CardContainer, styles: CardStyle }) {
    const containerStyle: string = styles.isBig ? 'big' : 'small';
    
    return ( 
        <div className='cards_container'>
            <h2 className='medium_font'>{container.title}</h2> 
            <div className={`cards ${containerStyle}`}>
                {/* TODO: show only 3 restaurants for desktop */}
                {container.cards.map((card: CardType) => (
                    <Card
                        key={card.title}
                        img={card.img}
                        title={card.title}
                        subTitle={card.subTitle}
                        stars={card.stars}
                        foodIcon={card.foodIcon}
                        price={card.price}
                        isBig={containerStyle}
                    />
                ))}
            </div>
            <div className={`more_container ${containerStyle}`}>
                <h3 className='medium_font_not_apper'>All restaurants</h3>
                <img className='arrow' src={arrow} alt='arrow'/>
            </div>
        </div>
    );
}

export default CardsContainer;