import {ReactNode} from "react";
import {Link, useColorModeValue} from "@chakra-ui/react";

export  default function NavLink  ({children}: { children: ReactNode }) {
    return (<Link
        px={5}
        py={5}
        rounded={'md'}
        _hover={{
            textDecoration: 'underLine',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>);
};
