import {Box, Center, HStack, StackDivider, Text, useToast, VStack} from "@chakra-ui/react";
import SearchBar from "../components/sideBar/SearchBar";
import SearchResultBox from "../components/sideBar/SearchResultBox";
import {useRecoilState, useRecoilValue} from "recoil";
import {pagenationState, serchResultState} from "../states/MapStates";
import Pagination from "react-js-pagination";


function SideBar() {


return (
        <div>
            <Box
                w={'100%'}
                position={"static"}
                top={"0"}
            >
            </Box>

            <Box
                position={'static'}
                botton={"0"}
                id={"sideBar"}
                display="block"
                w={'100%'}
            >
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

            </Box>


        </div>
    );



}
export default SideBar;
