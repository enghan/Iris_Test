import Simple from "../Component/navbar";
import {Box, SimpleGrid, VStack} from "@chakra-ui/react";
import {CartCategory} from "../Component/cartCategory";
import {Categories} from "../Component/Constant/data";
import CaptionCarousel from "../Component/Carousel";

export default function Home() {
    return (<VStack>
        <Box w={'full'}>
            <Simple></Simple>
        </Box>
        <SimpleGrid columns={Categories.length} spacing='2' >
        {Categories.map(cat => (
           <CartCategory title={cat.title} description={cat.description}></CartCategory>
        ))}
        </SimpleGrid>
        <CaptionCarousel></CaptionCarousel>
    </VStack>)
}