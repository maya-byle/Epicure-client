import * as React from 'react';
import './CardsContainer.scss'
import arrow from '../../Assets/svg/arrow.svg';

import Card, {CardType} from '../Card/Card';
import SwiperUI from '../UI/SwiperUI';

export interface CardContainer {
    title: string,
    cards: CardType[]
}

export interface CardStyle {
    isBig: boolean,
    isMore: boolean,
}

function CardsContainer({ container, styles }: { container: CardContainer, styles: CardStyle }) {
    const containerStyle: string = styles.isBig ? 'big' : 'small';
    const isMore: boolean = styles.isMore;
    const isSmallScreen = window.innerWidth < 600;

    return ( 
        <div className='cards_container'>
            <h2 className={`medium_font ${containerStyle}`}>{container.title}</h2> 
            <div className={`cards ${containerStyle}`}>
                <SwiperUI cards={container.cards} containerStyle={containerStyle}/>
            </div>
            {isMore && <div className={`more_container ${containerStyle}`}>
                <h3 className='medium_font_not_apper'>All restaurants</h3>
                <img className='arrow' src={arrow} alt='arrow'/>
            </div>}
        </div>
    );
}

export default CardsContainer;