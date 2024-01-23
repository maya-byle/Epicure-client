import './Card.scss';
import greyLine from '../../Assets/svg/greyLine.svg'
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
                {card.stars && <img className="rank" src={card.stars} alt='rank'/>}
                {card.foodIcon && <img className='mobile_dish_icon' src={card.foodIcon} alt='dish icon'/>}
                {card.price && <div className='price_container'>
                    <img className='desktop_grey_line' src={greyLine} alt='-'/>
                    <h5 className="xsml_font bold">₪{card.price}</h5>
                    <img className='desktop_grey_line' src={greyLine} alt='-'/>
                </div>}
            </div>
            {/* <Typography size customStyles>
                asdasdada
            </Typography> */}
        </div>
    );
}

export default Card;
