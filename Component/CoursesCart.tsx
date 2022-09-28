import {Avatar, Box, Button, Divider, Flex, HStack, Icon, Image, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {BsClock} from "react-icons/bs";
import StarRatings from 'react-star-ratings';

export default function CoursesCart({course}) {
    return (
        <Flex w="full" p={'10'} alignItems="center" justifyContent="center">
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
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center" pt={'2'}>
                        <StarRatings
                            rating={course.rating.rate}
                            starRatedColor="yellow"
                            starEmptyColor="gray"
                            numberOfStars={6}
                            name='rating'
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </Flex>
                    <HStack pt={'2'}>
                        <Avatar
                            size={'md'}
                            showBorder
                            borderColor={'brand.orangeLight'}
                            borderWidth={'3px'}
                            src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                            }
                        />
                        <Box as="span" ml="2" color="brand.dark" fontSize="sm">
                            {course.name}
                        </Box>
                    </HStack>
                    <Divider pt={'2'} w={'full'} orientation='horizontal'/>

                    <HStack pt={'2'} spacing={'4'}>
                        <Flex> <Icon boxSize={4} color={'brand.textGray'} as={BsClock}/>
                            <Text pl={'1'} pr={'1'} fontSize={'xs'} fontWeight={'bold'}
                                  textColor={'brand.textGray'}>{course.duration}</Text>
                            <Text pt={'1'} color="brand.dark" fontSize="2xs">
                                Hours
                            </Text></Flex>

                        <Flex> <Icon boxSize={4} color={'brand.textGray'} as={BsClock}/>
                            <Text pl={'1'} pr={'1'} fontSize={'xs'} fontWeight={'bold'}
                                  textColor={'brand.textGray'}>{course.count}</Text>
                            <Text pt={'1'} color="brand.dark" fontSize="2xs">
                                Lessons
                            </Text>
                        </Flex>
                        <Flex> <Icon boxSize={4} color={'brand.textGray'} as={BsClock}/>
                            <Text pl={'1'} pr={'1'} fontSize={'xs'} fontWeight={'bold'}
                                  textColor={'brand.textGray'}>{course.type}</Text>
                        </Flex>
                        <Flex> <Icon boxSize={4} color={'brand.textGray'} as={BsClock}/>
                            <Text pl={'1'} pr={'1'} fontSize={'xs'} fontWeight={'bold'}
                                  textColor={'brand.textGray'}>{course.Gender}</Text>
                        </Flex>
                    </HStack>
                    <Divider pt={'2'} w={'full'} orientation='horizontal'/>
                    <HStack pt={'2'} spacing={'30%'}>
                        <Box>
                            <Button
                                textColor={'brand.textGray'}
                                width={'120px'}
                                bg={"brand.gray"}
                                rounded={'md'}>Reservation</Button>
                        </Box>
                        <HStack>
                            <Text fontSize={'l'} fontWeight={'extrabold'}
                                  textColor={'brand.textGray'}>{course.price}</Text>
                            <Text pt={'1'} color="brand.textGray" fontSize="sm">
                                SAR
                            </Text>
                        </HStack>
                    </HStack>
                </Box>
            </Box>
        </Flex>)
}