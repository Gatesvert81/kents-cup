import React from 'react'
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MenuCard from '../Componnents/MenuCard';
import products from '../Componnents/products'

SwiperCore.use([Navigation]);

const StyledSwiper = styled(Swiper)`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media all and (min-width: 425px) {
        width: 350px;
    }
`

function MenuSlider() {

    
    return (
        <StyledSwiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={true}
            onSwiper={(swiper) => swiper}
            
        >
            {
                products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <MenuCard product={product} />
                    </SwiperSlide>
                ))
            }

        </StyledSwiper>
    )
}

export default MenuSlider
