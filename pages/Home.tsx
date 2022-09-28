import Simple from "../Component/NavBar";
import {Box, VStack} from "@chakra-ui/react";
import {Categories} from "../Component/Constant/data";
import CardCarousel from "../Component/Carousel";
import React from "react";
import Slider from 'react-slick';
import CartCategory from "../Component/CartCategory";

export default function Home() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
    };
    const [slider, setSlider] = React.useState<Slider | null>(null);
    return (<VStack>
        <Box w={'full'}>
            <Simple></Simple>
        </Box>
        <Box maxW={'60%'} w={'full'} h={'200'}>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {Categories.map(cat => (
                    <CartCategory key={cat.id} title={cat.title} description={cat.description}></CartCategory>
                ))}
            </Slider></Box>


        <CardCarousel></CardCarousel>
    </VStack>)
}