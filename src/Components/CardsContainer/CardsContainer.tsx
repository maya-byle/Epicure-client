import * as React from 'react';
import './CardsContainer.scss'
import Card from '../Card/Card';
import container, {Restaurant} from '../../Constants/Resturants'

function CardsContainer() {

    return ( 
        <div className='cards_container'>
            <h2 className='medium_font'>{container.title}</h2> 
            <div className='cards'>
                {container.cards.map((card) => (
                    <Card
                        key={card.name}
                        img={card.img}
                        title={card.name}
                        subTitle={card.chef} 
                    />
                ))}
            </div>
        </div>
    );
}

export default CardsContainer;