import Simple from "../Component/navbar";
import {Box, VStack} from "@chakra-ui/react";
import {CartCategory} from "../Component/cartCategory";
import {Categories, courses} from "../Component/Constant/data";
import CardCarousel from "../Component/Carousel";
import React from "react";
import Slider from 'react-slick';

export default function Home() {
    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const [slider, setSlider] = React.useState<Slider | null>(null);
    return (<VStack>
        <Box w={'full'}>
            <Simple></Simple>
        </Box>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {Categories.map(cat => (
                <CartCategory title={cat.title} description={cat.description}></CartCategory>
            ))}
        </Slider>

        <CardCarousel></CardCarousel>
    </VStack>)
}