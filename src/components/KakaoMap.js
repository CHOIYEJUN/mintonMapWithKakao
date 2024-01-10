import {useEffect, useRef, useState} from "react"
import {Map, MapMarker, CustomOverlayMap, DrawingManager, Toolbox} from 'react-kakao-maps-sdk';
import styled from "styled-components";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Center,
    Box,
    useToast,
    Stack,
    FormLabel,
    Input,
    GridItem,
    Grid,
    Textarea,
    RadioGroup, Radio, Link,
} from '@chakra-ui/react'
import {createPinDrawerIsopenState, mapCursorState, mapState} from "../states/MapStates";
import {RecoilState, useRecoilState} from "recoil";
import{ addDoc,onSnapshot, collection, query } from "firebase/firestore";
import {DB} from "../fireBase.js";


let clickLocation = {
    id : '',
    name : '',
    adress : '',
    businessHoursStart : '',
    businessHoursEnd : '',
    cost : '',
    type : '',
    lessen : '',
    homepage : '',
    desc : '',
    latlng: '',
};
export default function KakaoMap() {
    // @ts-ignore
    const { isOpen, onOpen, onClose } = useDisclosure();
    const mapRef = useRef(null);
    const managerRef = useRef(null);
    let [pinClickPosition, setPinClickPosition] = useRecoilState(mapCursorState);
    const[mapCursor, setMapCursor] = useState(null);
    const [createPinDrawerIsopen, setCreatePinDrawerIsopen] = useRecoilState(createPinDrawerIsopenState);
    const [locations, setLocations] = useState([]);
    const toast = useToast();

    const getLocationsData = async () => {

        try {
            await onSnapshot(collection(DB, "mintonLocate"), (snapshot) => {

                const makeLocations = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setLocations(makeLocations);
            });
        }catch (e) {
            console.log(e);
            toast({
                title: "데이터를 불러오는데 실패했습니다.",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }

    };
    const [coordinates, setCoordinates] = useState(null);
    const getCoordinates = () => {
        const map = mapRef.current;
        if (map) {
            setCoordinates({
                center: {
                    lat: map.getCenter().getLat(),
                    lng: map.getCenter().getLng(),
                },
            });
        }
    };
    const markerClick = (loc) => {
        onOpen();
        clickLocation = loc;
    }

    const makePinInfo = () => {
        window.manager = managerRef.current
        setPinClickPosition(mapCursor);
    }
    useEffect(() => {
        setCreatePinDrawerIsopen(true);
    }, [mapCursor]);

    useEffect(() => {
        setCreatePinDrawerIsopen(false);
        getLocationsData();
    }, []);

    useEffect(() => {
            const manager = window.manager;
            if (manager) {
                manager.clear();
            }
        },
        [createPinDrawerIsopen === false]);

    return (
        <>
        <Center>
            <Box
                w={'100%'}
                h={'100vh'}
            >
                <Map
                    center={{ lat: 37.38, lng: 127.12}}
                    style={{
                        width: '100%',
                        height: '100%',
                        position : 'absolute',
                        top : '0',
                        left : '0',
                    }}
                    level={6}
                    ref={mapRef}
                    onCreate={(map) => { window.kakaoMap = map;}}
                    onClick={(_t, mouseEvent) => setMapCursor({
                        lat: mouseEvent.latLng.getLat(),
                        lng: mouseEvent.latLng.getLng(),
                    })}
                >
                    {locations.map((loc, idx) => (
                        <MapMarker
                            key={`${loc.id}-${loc.lat}-${loc.lng}`}
                            position={loc.latlng}

                            // image 에 loc.type 이 national 이면 파란색, private 이면 초록색 핀을 넣어준다.

                            image={{
                                src: loc.type === 'national' ?
                                    'https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2Fbaming2.png?alt=media&token=98b56c18-13e8-4374-8b1b-0876ce0e5b90'
                                    : 'https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2Fbaming1.png?alt=media&token=e9130802-8b4c-44e6-84c7-53f0376e9c9b',
                                size: { width: 50, height: 50 },
                            }}
                            title={loc.name}
                            onClick={() => markerClick(loc)}
                        />
                    ))}

                    <DrawingManager
                        ref={managerRef}
                        markerOptions={{
                            draggable: false,
                            removable: false,
                        }}
                        onCreate={makePinInfo}
                    >

                    </DrawingManager>


                </Map>

            </Box>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{clickLocation.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing='10px'>
                            <Box>
                                <FormLabel htmlFor='name'>주소</FormLabel>
                                <Input
                                    value={clickLocation.adress}
                                    readOnly={true}
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor='name'>운영시간</FormLabel>
                                <Grid templateColumns='repeat(9, 1fr)' gap={9}>
                                <GridItem colSpan={4}>
                                    <Input
                                        value={clickLocation.businessHoursStart}
                                        readOnly={true}
                                    />
                                </GridItem>
                                <GridItem textAlign={"center"} colSpan={1}>
                                    ~
                                </GridItem>

                                <GridItem colSpan={4}>
                                    <Input
                                        readOnly={true}
                                        value={clickLocation.businessHoursEnd}
                                    />
                                </GridItem>
                            </Grid>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='name'>비용</FormLabel>
                                <Input
                                    value={clickLocation.cost}
                                    readOnly={true}
                                />

                            </Box>
                            <Box>
                                <FormLabel htmlFor='type'>운영기관</FormLabel>
                                <RadioGroup defaultValue={clickLocation.type}>
                                    <Stack spacing={5} direction='row'>
                                        <Radio  colorScheme='blue' value='national' onClick={()=>{return(false)}}>
                                            국립
                                        </Radio>
                                        <Radio colorScheme='green' value='private' onClick={()=>{return(false)}}>
                                            사립
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='lessen'>레슨여부</FormLabel>
                                <RadioGroup defaultValue={clickLocation.lessen}>
                                    <Stack spacing={5} direction='row'>
                                        <Radio colorScheme='blue' value='haveLesson' >
                                            가능
                                        </Radio>
                                        <Radio  colorScheme='red' value='noLesson' >
                                            불가능
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='name'>기타</FormLabel>
                                <Textarea
                                    value={clickLocation.desc}
                                    readOnly={true}
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor='name'>홈페이지</FormLabel>
                                <Link color='teal.500' fontWeight={'600'} href={clickLocation.homepage}>
                                    바로가기
                                </Link>
                            </Box>
                        </Stack>
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



