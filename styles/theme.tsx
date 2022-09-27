import {extendTheme} from '@chakra-ui/react';


const theme = extendTheme({
    body: {
        background: 'brand.primary',
    },
    fonts: {
        body: 'Droid Arabic Kufi, sans-serif',
        heading: 'Georgia, serif',
        monospace: 'Menlo, monospace'



    },
    colors: {
        brand: {
            gray: "#EEEEEE",
            textGray: "#1E5B63",
            light: "#1E5B6333",
            dark:"#AAAAAA",
            orange:"#CBA770",
            orangeLight:"#FFC107"
        },
    },
    components: {

        Button: {
            baseStyle: {
                fontWeight: 'bold',
                textColor: 'brand.textGray',
                width: '120px',
                  bg: "brand.gray", rounded: 'md',
                _hover: {bg: 'brand.orange', color: 'brand.dark'},

                variants: {

                    primary: {
                        fontWeight: 'bold',
                        textColor: 'brand.textGray',
                        width: '100px',
                        bg: "brand.gray", rounded: 'md',
                        _hover: {bg: 'brand.orange', color: 'brand.dark'},
                        },
                    },
            },
        }



    },


});


export default theme;