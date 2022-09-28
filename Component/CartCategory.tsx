import {Box, Stack, Text, useBreakpointValue,} from "@chakra-ui/react";
import React from "react";


export default function CartCategory({title, description}) {
    const maxW = useBreakpointValue({base: '70px', md: '140px'});
    const height = useBreakpointValue({base: '80px', md: '150px'});

    return (

        <Box
            boxShadow={'xl'}
            rounded={'xl'}
            border={'solid'}
            borderWidth={'2px'}
            borderColor={'brand.gray'}
            bg={'brand.light'}
            p={useBreakpointValue({base: '1', md: '2'})}
            w={'full'}
            h={height}
            maxW={maxW}
        >

            <Stack>
                <Text
                    fontSize={useBreakpointValue({base: 'xs', md: 'xl'})}
                    fontWeight={'bold'}
                    top={'12'}
                    left={'4'}
                    color={'brand.textGray'}>
                    {title}
                </Text>
                <Text
                    fontSize={useBreakpointValue({base: '2xs', md: 'sm'})}
                    fontWeight={'500'}
                    fontStyle={'italic'}
                    color={'brand.textGray'}>
                    {description}
                </Text>

            </Stack>
        </Box>


    )
}