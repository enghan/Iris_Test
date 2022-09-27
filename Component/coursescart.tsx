import {
    Avatar,
    Box, Button,
    chakra,
    Divider,
    Flex,
    HStack,
    Icon,
    Image,
    Spacer, Stack, Text,
    Tooltip,
    useColorModeValue, VStack
} from "@chakra-ui/react";
import {ArrowRightIcon} from "@chakra-ui/icons";
import Rating from "./Rating";
import React from "react";
import {BsClock, BsJournalCheck} from "react-icons/bs";

export default function CoursesCart({course}) {
    return (
        <Flex  w="full"  p={'10'} alignItems="center" justifyContent="center">
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative">

            <Image
                src={course.image}
                w={'full'}
            />
            <Box p="6">
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                        fontSize="2xl"
                        fontWeight="bold"
                        lineHeight="tight"
                    >
                        {course.title}
                    </Box>
                    {/*<Tooltip*/}

                    {/*    bg="white"*/}
                    {/*    placement={'top'}*/}
                    {/*    color={'gray.800'}*/}
                    {/*    fontSize={'1.2em'}>*/}
                    {/*    <chakra.a href={'#'} display={'flex'}>*/}
                    {/*        <Icon as={ArrowRightIcon} h={5} w={5} alignSelf={'center'}/>*/}
                    {/*    </chakra.a>*/}
                    {/*</Tooltip>*/}
                </Flex>
                <Flex justifyContent="space-between" alignContent="center" pt={'2'}>
                    <Rating rating={course.rating.rate} numReviews={course.rating.count}/>
                </Flex>
                <HStack pt={'2'}>  <Avatar
                    size={'xs'}
                    src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                />
                    <Box as="span" ml="2" color="brand.dark" fontSize="sm">
                        {course.name}
                    </Box></HStack>
                <Divider pt={'2'} w={'full'} orientation='horizontal' />

                    <HStack pt={'2'} >

                        <Icon boxSize={3} color={'brand.textGray'}  as={BsClock}    />
                        <Text  fontSize={'xs'} fontWeight={'bold'} textColor={'brand.textGray'} >{course.duration}</Text>
                        <Text  color="brand.dark"  fontSize="3xs">
                            Hours
                        </Text>
                        <Icon boxSize={3} color={'brand.textGray'}  as={BsClock}    />
                        <Text  fontSize={'xs'} fontWeight={'bold'} textColor={'brand.textGray'} >{course.count}</Text>
                        <Text  color="brand.dark" fontSize="3xs">
                            Lessons
                        </Text>
                        <Icon boxSize={3} color={'brand.textGray'}  as={BsClock}    />
                        <Text  fontSize={'xs'} fontWeight={'bold'} textColor={'brand.textGray'} >{course.type}</Text>
                        <Text  color="brand.dark" fontSize="3xs">
                            Begginer
                        </Text>
                        <Icon boxSize={3} color={'brand.textGray'}  as={BsClock}    />
                        <Text  fontSize={'xs'} fontWeight={'bold'} textColor={'brand.textGray'} >{course.Gender}</Text>
                        <Text  color="brand.dark" fontSize="3xs">
                            Male
                        </Text>
                    </HStack>
                <Divider pt={'2'} w={'full'} orientation='horizontal' />
                <HStack pt={'2'} spacing={'30%'}>
                <Box >
                    <Button >Reservation</Button>
                </Box>
                    <HStack>
                        <Text  fontSize={'l'} fontWeight={'extrabold'} textColor={'brand.textGray'} >{course.price}</Text>
                        <Text pt={'1'} color="brand.textGray" fontSize="sm">
                            SAR
                        </Text>
                    </HStack>


                </HStack>
            </Box>
        </Box>
    </Flex>)
}