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

    },


});


export default theme;