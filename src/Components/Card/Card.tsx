import './Card.scss';
import greyLine from '../../Assets/svg/greyLine.svg'
import TextUI from '../UI/TextUI';
import { CardType } from '../../Types/cardTypes';

function Card(card: CardType) {
    return (
        <div className={`card ${card.isBig}`}>
            <img className='card_img' src={card.image} alt={card.name}/>

            <div className='card_content'>
                {card.restaurant && <h6 className='xsml_font'>{card.restaurant}</h6>}
                <TextUI props={{ className: card.isBig === 'big' ?'h1':'h2', isBold: 'bold' }}>{card.name}</TextUI>

                <div className='desktop_icon_description'>
                    {card.description && <h5 className="xsml_font descriptin">{card.description}</h5> }
                    {card.subtitle && <h5 className="xsml_font">{card.subtitle}</h5> }
                    {card.foodIcon && <img className='dish_icon' src={card.foodIcon} alt='dish icon'/>}
                    {card.foodIcon === "" && <div className='dish_icon'/>}
                </div>

                {card.price && <div className='price_container'>
                    <img className='desktop_grey_line' src={greyLine} alt='-'/>
                    <h5 className="xsml_font bold">₪{card.price}</h5>
                    <img className='desktop_grey_line' src={greyLine} alt='-'/>
                </div>}
                
                { card.stars && <img className="desktop_rank" src={card.stars} alt='rank'/> }
            </div>

        </div>
    );
}

export default Card;
