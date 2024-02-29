import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import Card from '../Card/Card';
import { CardType } from '../../Types/cardTypes';


function SwiperUI( { cards, containerStyle }: { cards: CardType[], containerStyle: string } ) {
    const windowWidth =  window.innerWidth;
    const isSmallScreen = windowWidth < 600;

    if (!isSmallScreen) {
        return (
            <>
                {cards.map((card: CardType) => (
                    <Card
                        key={card._id}
                        image={card.image}
                        name={card.name}
                        description={card.description}
                        restaurant={card.restaurant}
                        stars={card.stars}
                        foodIcon={card.foodIcon}
                        price={card.price}
                        isBig={containerStyle}
                    />
                ))}
            </>
        );
    }

    const slidesPerView = windowWidth >= 600 ? 3 : 1.4;

    return ( 
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={slidesPerView}
            watchOverflow={true}
        >
            {cards.map((card: CardType) => (
                    <SwiperSlide key={card._id}>
                        <Card
                            key={card.name}
                            image={card.image}
                            name={card.name}
                            subtitle={card.subtitle}
                            description={card.description}
                            stars={card.stars}
                            foodIcon={card.foodIcon}
                            price={card.price}
                            isBig={containerStyle}
                        />
                    </SwiperSlide>
                ))}
      </Swiper>
    );
}

export default SwiperUI;