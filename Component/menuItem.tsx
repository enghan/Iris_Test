import {Avatar, Button, MenuButton} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {ReactNode} from "react";

export default function menuItemButton({children}){
    return(
        <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            rightIcon={<ChevronDownIcon/>}
            minW={0}>
            {children}

        </MenuButton>


    )

}