import React from 'react';
import {Box, IconButton, useBreakpointValue,} from '@chakra-ui/react';
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
import Slider from 'react-slick';
import {courses} from "./Constant/data";
import CoursesCart from "./CoursesCart";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
};

export default function CardCarousel() {

    const [slider, setSlider] = React.useState<Slider | null>(null);

    const top = useBreakpointValue({base: '90%', md: '50%'});
    const side = useBreakpointValue({base: '30%', md: '40px'});


    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {courses.map(course => (
                    <CoursesCart course={course}></CoursesCart>
                ))}
            </Slider>
            <IconButton
                aria-label="left-arrow"
                position="absolute"
                left={side}
                top={top}
                color={'brand.textGray'}
                border={'solid'}
                rounded={'full'}
                bg={"brand.gray"}
                borderColor={'brand.orange'}
                borderWidth={'4px'}
                w={'50px'}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px"/>
            </IconButton>
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                color={'brand.textGray'}
                border={'solid'}
                rounded={'full'}
                bg={"brand.gray"}
                w={'50px'}
                borderColor={'brand.orange'}
                borderWidth={'4px'}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px"/>
            </IconButton>

        </Box>
    );
}