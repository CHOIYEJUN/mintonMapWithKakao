import KakaoMap from "../components/KakaoMap";
import {Box, HStack} from "@chakra-ui/react";
import Header from "./Header";
import SearchBar from "../components/sideBar/SearchBar";
import ToolBar from "./toolBar";
import SearchResultBox from "../components/sideBar/SearchResultBox";
import SearchBoxPoldButton from "../components/sideBar/SearchBoxPoldButton";
import React from "react";
import MapPinFilter from "../components/MapPinFilter";

const HomeMap = () => {

    return (
        <HStack>
            <KakaoMap />
            <Box
                w={'100%'}
                zIndex={'120'}
                position={'absolute'}
                top={'0'}
                margin={'0 auto'}
            >
                <Box
                    background={'white'}
                    textAlign={'center'}
                    padding={'5px'}
                >
                    <Header />
                    <SearchBar />
                </Box>

                <ToolBar />
            </Box>

            <Box
                w={'100%'}
                zIndex={'120'}
                position={'absolute'}
                bottom={'50px'}
                margin={'0 auto'}
            >
                <SearchResultBox />
                <SearchBoxPoldButton />
            </Box>

            <Box>
                {/*<RightBar />*/}
                <MapPinFilter />
            </Box>
        </HStack>
    );
}

export default HomeMap;
