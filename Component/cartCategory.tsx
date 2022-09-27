import {
    Box,
    Center,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";


export function CartCategory({ title, description}) {

    return (

        <Center  >
            <Box

                boxShadow={'xs'}
                rounded={'md'}
                border={'solid'}
                borderWidth={'2px'}
                borderColor={'#EEEEEE'}
                bg={'#1E5B6333'}
               >
                <Stack
                    textAlign={'start'}
                    p={5}
                    color={useColorModeValue('#EEEEEE', '#EEEEEE')}
                    align={'start'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        color={'#1E5B63'}
                        rounded={'full'}>
                        {title}
                    </Text>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        color={'#1E5B63'}
                        rounded={'full'}>
                        {description}
                    </Text>

              </Stack>
            </Box>
        </Center>

    )
}