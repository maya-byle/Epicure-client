import './Card.scss';
import greyLine from '../../Assets/svg/greyLine.svg'
import TextUI from '../UI/TextUI';
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
                <TextUI props={{ className: card.isBig === 'big' ?'h1':'h2', isBold: 'bold' }}>{card.title}</TextUI>

                <div className='desktop_icon_subtitle'>
                    { card.subTitle && <h5 className="xsml_font">{card.subTitle}</h5> }
                    { card.foodIcon && <img className='dish_icon' src={card.foodIcon} alt='dish icon'/> }
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
