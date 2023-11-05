import {Box, Center, HStack, StackDivider, Text, VStack} from "@chakra-ui/react";
import MakePinButton from "../components/sideBar/makePinButton";
import SearchBar from "../components/sideBar/SearchBar";
import SearchResultBox from "../components/sideBar/SearchResultBox";
import {useState} from "react";


export default function SideBar() {

return (
        <div
            id={"sideBar"}
            display="none"
        >
            <Text
                fontSize='3xl'
                fontWeight='bold'
                margin={'0 0 20px 0'}

            >
                지도검색
            </Text>

            <VStack
                spacing={4}
                align='stretch'
            >
                <Box w={'100%'}>
                    <SearchBar />
                </Box>

                <Box w={'100%'}>
                    <SearchResultBox />
                </Box>
                <Box w={'100%'} >
                    <Text
                        fontSize='l'
                        textAlign={'center'}
                    >
                    </Text>
                </Box>
            </VStack>

        </div>
    );



}