import {useEffect, useRef, useState} from "react"
import {  Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import styled from "styled-components";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, useDisclosure, Center, Box,
} from '@chakra-ui/react'
import { mapState} from "../states/MapStates";
import {useRecoilState} from "recoil";

const CoodBox = styled.div`
    position : fixed;
    bottom : 0px;
    right : 0;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid gray;
  
`


let clickLocation = {
    title: '',
    content : '',
    type : '',
    Address : '',
    businessHours : '',
    cost : '',
    lessen : '',
    homepage : '',
};
const { kakao } = window;
export default function KakaoMap() {

    // @ts-ignore
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [map, setMap] = useRecoilState(mapState);
    const [isLoading, setIsLoading] = useState(false);
    const mapRef = useRef(null);

    const locations = [
        { title: '우리집',
            content : '예준이가 사는 집',
            type : '사립',
            Address : '경기도 성남시 분당구 분당동 50',
            businessHours : '오전 9시 ~ 오후 6시',
            cost : '무료',
            lessen : '불가능',
            homepage : 'https://www.naver.com',
            latlng: { lat: 37.370854554175395, lng: 127.13412120168785 }
        }

    ];

    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.3708545, 127.1341) ,
            level: 6
        };
        const kakaoMap = new kakao.maps.Map(container, options);

        window.kakaoMap = kakaoMap;


    },[])




    const markerClick = (loc) => {
        onOpen();
        clickLocation = loc;
    }
    return (
        <>
        <Center>
            <Box
                w={'100%'}
                h={'100vh'}
            >
                <div
                   id={'map'}
                    style={{
                        width: '100%',
                        height: '100%',
                        position : 'absolute',
                        top : '0',
                        left : '0',
                    }}
                >
                </div>

            </Box>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{clickLocation.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <p>{clickLocation.content}</p>
                        <p>{clickLocation.type}</p>
                        <p>{clickLocation.businessHours}</p>
                        <p>{clickLocation.Address}</p>
                        <a
                            href={clickLocation.homepage}
                        >
                            {"시설 홈페이지 바로가기"}
                        </a>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </Center>
        </>

    );

}



