import {Box, VStack, Text, Flex, Center, Image, useToast} from "@chakra-ui/react";
import SearchResult from "./SearchResult";
import {useState} from "react";
import {useRecoilValue} from "recoil";
import {pagenationState, serchResultState} from "../../states/MapStates";
import Pagination from "react-js-pagination";
import '../../style/Paging.css';

export default function SearchResultBox() {

    const searchData = useRecoilValue(serchResultState);
    const pagenation = useRecoilValue(pagenationState);
    const map = window.kakaoMap;
    console.log(map);

    return (
        <>
            <Box
                h={'600px'}
                bg={'whitesmoke'}
                border={'1px solid gray'}
                borderRadius={'10px'}
                zIndex={'100'}
            >
                <Text
                    fontSize='xl'
                    fontWeight='bold'
                    margin={'5px'}
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
                        border={'1px solid white'}

                    >

                        {searchData.map((data) => (
                                <SearchResult key={data.id} {...data}></SearchResult>
                        ))}

                    </Box>
                    </VStack>

            </Box>

            {searchData.length === 0 ? <Text></Text>
                :
                <Pagination
                    activePage={pagenation.current}
                    itemsCountPerPage={pagenation.perPage}
                    totalItemsCount={pagenation.totalCount}
                    pageRangeDisplayed={pagenation.perPage}
                    onChange={(page) => {
                        pagenation.gotoPage(page);

                    }}

                />
            }

        </>

    )
}