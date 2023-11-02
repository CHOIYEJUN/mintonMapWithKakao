import {Box, Center, HStack, StackDivider, Text, VStack} from "@chakra-ui/react";
import MakePinButton from "../components/sideBar/makePinButton";
import SearchBar from "../components/sideBar/SearchBar";
import SearchResultBox from "../components/sideBar/SearchResultBox";
import {useState} from "react";
import Pagination from "react-js-pagination";
export default function SideBar() {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };

return (
        <>
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
                        <Pagination
                            activePage={page} // 현재 페이지
                            itemsCountPerPage={5} // 한 페이지랑 보여줄 아이템 갯수
                            totalItemsCount={20} // 총 아이템 갯수
                            pageRangeDisplayed={5} // paginator의 페이지 범위
                            prevPageText={"‹"} // "이전"을 나타낼 텍스트
                            nextPageText={"›"} // "다음"을 나타낼 텍스트
                            onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
                        />
                    </Text>
                </Box>


            </VStack>
        </>
    );



}