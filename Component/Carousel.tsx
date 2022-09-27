import React from 'react';
import {Box, Flex, IconButton, Image, Tooltip, useBreakpointValue, useColorModeValue,} from '@chakra-ui/react';
// import Rating from "./Rating";
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
import Slider from 'react-slick';
import {offers} from "./Constant/data";

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function CaptionCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({base: '90%', md: '50%'});
    const side = useBreakpointValue({base: '30%', md: '40px'});

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Design Projects 1',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
        {
            title: 'Design Projects 2',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        },
    ];

    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
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
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px"/>
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px"/>
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {offers.map(offer => (
                    <Flex p={50} w="full"  alignItems="center" justifyContent="center">
                        <Box
                            bg={useColorModeValue('white', 'gray.800')}
                            maxW="sm"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative">


                            <Image
                                src={offer.image}
                                roundedTop="lg"
                            />

                            <Box p="6">

                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="xl"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                    >
                                        {offer.title}
                                    </Box>
                                    <Tooltip

                                        bg="white"
                                        placement={'top'}
                                        color={'gray.800'}
                                        fontSize={'1.2em'}>
                                        {/*<chakra.a href={'#'} display={'flex'} onClick={resetModal}>*/}
                                        {/*    <Icon as={ArrowRightIcon} h={5} w={5} alignSelf={'center'} />*/}
                                        {/*</chakra.a>*/}
                                    </Tooltip>
                                </Flex>

                                {/*<Flex justifyContent="space-between" alignContent="center">*/}
                                {/*    <Rating rating={offer.rating.rate} numReviews={offer.rating.count} />*/}

                                {/*</Flex>*/}
                            </Box>
                        </Box>
                    </Flex>
                ))}
            </Slider>
        </Box>
    );
}