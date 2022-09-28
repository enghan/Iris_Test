
import {BsFillBellFill, BsJournalCheck, BsThreeDots,BsUiRadiosGrid} from "react-icons/bs";
import {
    Avatar,
    Box,
    Flex,
    HStack,
    Icon,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuDivider,
    MenuItem,
    MenuList, Spacer,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, Search2Icon} from '@chakra-ui/icons';
import MenuItemButton from "./MenuItem";
import {Links} from "./Constant/data";
import {NavLink} from "./NavigatorLink";

export default function Simple() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} >
                <Flex h={20} px={8} w={'full'} alignItems={'center'} justifyContent={'space-between'} boxShadow={'xl'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}  display={{base: 'none', md: 'flex'}}>
                        <Box>
                            <Image src={'/Image/logo.png'}/>
                        </Box>
                        <Menu>
                            <MenuItemButton>
                            <HStack>
                                <Icon boxSize={4}  color={'brand.textGray'} as={BsUiRadiosGrid}/>
                                <Text  color={'brand.textGray'}fontSize={'l'} textColor={'brand.textGray'} fontWeight={600}>Category</Text>
                            </HStack>

                        </MenuItemButton>
                        </Menu>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}  >
                        <InputGroup w='calc(40vh)' pr={'2'}    display={{base: 'none', md: 'flex'}}>
                            <InputLeftElement
                                pointerEvents='none'
                                color={"brand.dark"}
                                fontSize='1.2em'
                            />
                            <Input placeholder='search' defaultValue={'search'} borderColor={'brand.dark'}/>
                            <InputLeftElement children={<Search2Icon color={"brand.light"}/>}/>
                        </InputGroup>

                        <IconButton
                            size={'s'}
                            icon={<BsThreeDots/>}
                            borderColor={'brand.dark'}
                            border={'solid'}
                            borderWidth={'1px'}
                            aria-label={'menu'}
                            px={2}
                            py={2}
                            display={{base: 'none', md: 'flex'}}
                        />
                        <Spacer w='calc(10vh)' />
                        <Icon boxSize={6} color={'brand.textGray'}  as={BsJournalCheck}    display={{base: 'none', md: 'flex'}}/>
                        <Text pl={'2'} pr={'2'} fontSize={'l'} textColor={'brand.textGray'} fontWeight={600} display={{base: 'none', md: 'flex'}}>Placement
                            Test</Text>

                        <Menu>
                            <Spacer w='calc(10vh)' />
                            <MenuItemButton>
                                <Avatar
                                    size={'sm'}
                                    src={'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png'}

                                />
                            </MenuItemButton>
                            <IconButton
                                size={'md'}
                                icon={<BsFillBellFill/>}
                                aria-label={'Notifications'}
                            />
                            <MenuItemButton>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'

                                    }
                                />

                            </MenuItemButton>
                            <MenuList>
                                <MenuItem>List 1</MenuItem>
                                <MenuItem>List 2</MenuItem>
                                <MenuDivider/>
                                <MenuItem>List 3</MenuItem>
                            </MenuList>

                        </Menu>

                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>

                    </Box>

                ) : null}

            </Box>

            <Text p={10} fontSize={'45px'} fontWeight={'bold'} color={'brand.textGray'}>Categories</Text>
        </>
    );
}