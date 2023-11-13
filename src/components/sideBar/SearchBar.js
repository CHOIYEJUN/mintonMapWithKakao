import {Box, Button, Icon, IconButton, Input, Text, useToast} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
import {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {markerState, pagenationState, serchResultState} from "../../states/MapStates";
import Pagination from "react-js-pagination";

let makeMarkers = [];
export default function SearchBar() {

    const map = window.kakaoMap;
    const ps = new window.kakao.maps.services.Places();
    const [keyword, setKeyword] = useState('');
    const toast = useToast();
    const [searchData, setSearchData] = useRecoilState(serchResultState);
    const getSerchData = useRecoilValue(serchResultState);
    const [pagenation, setPagenation] = useRecoilState(pagenationState);
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
    const placesSearchCB = (data, status, pagination) => {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        let pinSrc = '';
        const pinA = 'https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2FmarkerA.png?alt=media&token=4964226b-fd11-449d-b774-d3def2e16bd9';
        const pinB ='https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2FmarkerB.png?alt=media&token=bf7ac653-6786-4f23-9640-97056da6d219';
        const pinC = 'https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2FmarkerC.png?alt=media&token=01736d63-bd7b-4b31-a9bf-a519c45c21f8';
        const imageSize = new window.kakao.maps.Size(30, 40); // 마커이미지의 크기


        try {
            if (status === window.kakao.maps.services.Status.OK) {
                setSearchData(data);
                setPagenation(pagination);
            }

            let bounds = new window.kakao.maps.LatLngBounds();
            for (let i=0; i<data.length; i++) {
                if(i === 0){
                    pinSrc = pinA;
                }else if(i === 1) {
                    pinSrc = pinB;
                }else if(i === 2){
                    pinSrc = pinC;
                }

                const markerImage = new window.kakao.maps.MarkerImage(
                    pinSrc,
                    imageSize
                );

                let marker = new window.kakao.maps.Marker({
                    map: map,
                    title: data[i].place_name,
                    image: markerImage,
                    position: new window.kakao.maps.LatLng(data[i].y, data[i].x)
                });
                makeMarkers.push(marker);
                bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정
            map.setBounds(bounds);

        }catch (e) {
            toast({
                title: "카카오 검색에 실패하였습니다",
                status: "warning",
            });
            console.log(e);
            return;
        }
    }

    const deleteMarkers = () => {
        for ( let i = 0; i < makeMarkers.length; i++ ) {
            makeMarkers[i].setMap(null);
        }
        makeMarkers = [];
    };


    const onClick = () => {

        if(keyword === ''){
            toast({
                title: "검색어를 입력해주세요.",
                status: "warning",
            });
            return;
        }
        deleteMarkers();
        const setSearchBound = map.getBounds();
        ps.keywordSearch(keyword, placesSearchCB, {size :3, bounds : setSearchBound });




    }
    const onChange = (e) => {
        setKeyword(e.target.value);

    }
    // 엔터키를 눌러도 onClick이 실행되도록
    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    }


    return (
        <>
           <Input
                placeholder="Search"
                size="md"
                variant='outline'
                background={'white'}
                borderRadius="full"
                border='1px solid gray'
                value={keyword}
                onChange={onChange}
                onKeyDown={onKeyPress}

           />
            <Box
                position={'absolute'}
                right={'10px'}
                top={'7px'}
                _hover={{cursor: 'pointer'}}
                padding={'5px'}
                onClick={onClick}
                zIndex={100}

            >
                <BiSearch />
            </Box>

            <Box
                w={'100%'}
                h={'50px'}
                margin={'0px'}
                padding={'0 0 10px 0'}
                bg={'whitesmoke'}
                position={'fixed'}
                bottom={'0'}
                className={'searchResultBox'}
            >
                {searchData.length === 0 ? <Text></Text>
                    :
                    <Pagination
                        activePage={pagenation.current}
                        itemsCountPerPage={pagenation.perPage}
                        totalItemsCount={pagenation.totalCount}
                        pageRangeDisplayed={pagenation.perPage}
                        onChange={(page) => {
                            pagenation.gotoPage(page);
                            deleteMarkers();
                        }}
                    />
                }
            </Box>
        </>

    )
}
