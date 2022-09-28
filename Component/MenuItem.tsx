import {Button, MenuButton} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

export default function MenuItemButton({children}) {
    return (
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