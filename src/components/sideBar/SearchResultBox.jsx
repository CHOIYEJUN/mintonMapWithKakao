import {Box, VStack, Text} from "@chakra-ui/react";
import SearchResult from "./SearchResult";
import {useRecoilValue} from "recoil";
import {serchResultState} from "../../states/MapStates";
import '../../style/Paging.css';

export default function SearchResultBox() {

    const searchData = useRecoilValue(serchResultState);

    return (
        <div
            className={'searchResultBox'}
            style={{
                display: 'none'
            }}
        >
            <Box
                h={'250px'}
                bg={'whitesmoke'}
                border={'1px solid gray'}
                borderRadius={'10px'}
                zIndex={'100'}
            >
                <Text
                    fontSize='xl'
                    fontWeight='bold'
                    margin={'5px 0 0 15px'}
                >
                    검색결과
                </Text>

                <VStack
                    spacing={4}
                    align='stretch'
                >
                    <Box
                        w={'100%'}
                        h={'100px'}
                    >
                        {searchData.map((data, index) => (

                                <SearchResult key={data.id} index={index} {...data}></SearchResult>
                        ))}
                    </Box>
                    </VStack>

            </Box>





        </div>

    )
}
