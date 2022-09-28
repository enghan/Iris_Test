import {Box, Stack, Text,} from "@chakra-ui/react";
import React from "react";


export default function CartCategory({title, description}) {

    return (

        <Box
            boxShadow={'xl'}
            rounded={'xl'}
            border={'solid'}
            borderWidth={'2px'}
            borderColor={'brand.gray'}
            bg={'brand.light'}
            p={'2'}
            w={'full'}
            h={'150'}
            maxW={'130px'}
        >
            <Stack>
                <Text
                    fontSize={'xl'}
                    fontWeight={'bold'}
                    top={'12'}
                    left={'4'}
                    color={'brand.textGray'}>
                    {title}
                </Text>
                <Text
                    fontSize={'sm'}
                    fontWeight={'500'}
                    fontStyle={'italic'}
                    color={'brand.textGray'}>
                    {description}
                </Text>

            </Stack>
        </Box>


    )
}