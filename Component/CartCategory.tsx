import {
    Box,
    Center,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";


export default function CartCategory({ title, description}) {

    return (

        <Center  >
            <Box
                boxShadow={'xs'}
                rounded={'md'}
                border={'solid'}
                borderWidth={'2px'}
                borderColor={'brand.gray'}
                bg={'brand.light'}
               >
                <Stack
                    textAlign={'start'}
                    p={5}
                    color={useColorModeValue('brand.gray', 'brand.gray')}
                    align={'start'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        color={'brand.textGray'}
                        rounded={'full'}>
                        {title}
                    </Text>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        color={'brand.textGray'}
                        rounded={'full'}>
                        {description}
                    </Text>

              </Stack>
            </Box>
        </Center>

    )
}