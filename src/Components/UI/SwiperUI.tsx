import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card, { CardType } from '../Card/Card';

function SwiperUI( { cards, containerStyle }: { cards: CardType[], containerStyle: string } ) {
    const windowWidth =  window.innerWidth;
    const slidesPerView = windowWidth >= 600 ? 3 : 1.2;
    const isSmallScreen = windowWidth < 600;

    if (!isSmallScreen) {
        return (
            <>
                {cards.map((card: CardType) => (
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
            </>
        );
    }

    return ( 
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={slidesPerView}
        >
            {cards.map((card: CardType) => (
                    <SwiperSlide>
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
                    </SwiperSlide>
                ))}
      </Swiper>
    );
}

export default SwiperUI;