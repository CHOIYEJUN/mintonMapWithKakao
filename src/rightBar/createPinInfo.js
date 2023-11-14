import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormLabel,
    Grid,
    GridItem,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import {RecoilState, useRecoilState, useRecoilValue} from "recoil";
import {createPinDrawerIsopenState, mapCursorState} from "../states/MapStates";
import {useState} from "react";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { DB } from "../fireBase.js";

export default function CreatePinInfo () {
    const [isOpen, SetOpen] = useRecoilState(createPinDrawerIsopenState);
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [businessHoursStart, setBusinessHoursStart] = useState('');
    const [businessHoursEnd, setBusinessHoursEnd] = useState('');
    const [cost, setCost] = useState('');
    const [type, setType] = useState('');
    const [lessen, setLessen] = useState('');
    const [homepage, setHomepage] = useState('');
    const [desc, setDesc] = useState('');
    const getPositionValue = useRecoilValue(mapCursorState);
    const toast = useToast();
    
    const onsubmit = async () => {
        try {
            const doc =await addDoc(collection(DB, "mintonLocate"), {
                name : name,
                adress : adress,
                businessHoursStart : businessHoursStart,
                businessHoursEnd : businessHoursEnd,
                cost : cost,
                type : type,
                lessen : lessen,
                homepage : homepage,
                desc : desc,
                latlng: getPositionValue,
            });
            toast({
                status: "success",
                title: "등록 성공",
                description: "배드민턴장 등록에 성공하였습니다😉",
            });
        }catch (e) {
            console.log(e);
            toast({
                status: "error",
                title: "등록 실패",
                description: "배드민턴장 등록에 실패하였습니다😥",
            });

        }
        onClose();
        initValue();

    };

    const onChange = (e) => {
        const {value, name} = e.target;
        if(name === 'name') setName(value);
        else if(name === 'adress') setAdress(value);
        else if(name === 'businessHoursStart') setBusinessHoursStart(value);
        else if(name === 'businessHoursEnd') setBusinessHoursEnd(value);
        else if(name === 'cost') setCost(value);
        else if(name === 'type') setType(value);
        else if(name === 'lessen') setLessen(value);
        else if(name === 'homepage') setHomepage(value);
        else if(name === 'desc') setDesc(value);
    }


    const onClose = () => {
        SetOpen(false);
    }

    const initValue = () => {
        setName('');
        setAdress('');
        setBusinessHoursStart('');
        setBusinessHoursEnd('');
        setCost('');
        setType('');
        setLessen('');
        setHomepage('');
        setDesc('');
    }



    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        배드민턴장 위치 등록
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel htmlFor='name'>상호명</FormLabel>
                                <Input
                                    id='username'
                                    name={'name'}
                                    placeholder='상호명을 입력해주세요'
                                    required={true}
                                    value={name}
                                    onChange={onChange}

                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor='adress'>주소</FormLabel>
                                <Input
                                    id='adress'
                                    name={'adress'}
                                    placeholder='배드민턴 장의 주소를 입력해주세요'
                                    required={true}
                                    value={adress}
                                    onChange={onChange}
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='cost'>요금</FormLabel>
                                <Grid templateColumns='repeat(9, 1fr)' gap={9}>
                                    <GridItem colSpan={8}>

                                        <Input
                                            id='cost'
                                            name={'cost'}
                                            placeholder='이용요금을 입력해주세요 ex) 게스트 5000'
                                            required={true}
                                            value={cost}
                                            onChange={onChange}
                                        />
                                    </GridItem>

                                    <GridItem  colSpan={1}>
                                        원
                                    </GridItem>
                                    </Grid>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='businessHours'>운영시간</FormLabel>
                                <Grid templateColumns='repeat(9, 1fr)' gap={9}>
                                    <GridItem colSpan={4}>
                                        <Input
                                            id='businessHours'
                                            name={'businessHoursStart'}
                                            placeholder='시작시간 ex) 09:00'
                                            required={true}
                                            value={businessHoursStart}
                                            onChange={onChange}
                                        />
                                    </GridItem>
                                    <GridItem textAlign={"center"} colSpan={1}>
                                        ~
                                    </GridItem>

                                    <GridItem colSpan={4}>
                                        <Input
                                            id='adrees'
                                            name={'businessHoursEnd'}
                                            placeholder='종료시간 ex) 18:00'
                                            required={true}
                                            value={businessHoursEnd}
                                            onChange={onChange}
                                        />
                                    </GridItem>
                                </Grid>

                            </Box>

                            <Box>
                                <FormLabel htmlFor='type'>운영기관</FormLabel>
                                <RadioGroup defaultValue='private'>
                                    <Stack spacing={5} direction='row'>
                                        <Radio name={'type'} colorScheme='blue' value='national' onChange={onChange}>
                                            국립
                                        </Radio>
                                        <Radio name={'type'} colorScheme='green' value='private' onChange={onChange}>
                                            사립
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='lessen'>레슨여부</FormLabel>
                                <RadioGroup defaultValue='noLesson'>
                                    <Stack spacing={5} direction='row'>
                                        <Radio name={'lessen'} colorScheme='blue' value='haveLesson' onChange={onChange}>
                                            가능
                                        </Radio>
                                        <Radio  name={'lessen'} colorScheme='red' value='noLesson' onChange={onChange}>
                                            불가능
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='homepage'>홈페이지 URL</FormLabel>
                                <Input
                                    id='homepage'
                                    name={'homepage'}
                                    placeholder='바로가기 URL'
                                    required={true}
                                    value={homepage}
                                    onChange={onChange}
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor='desc'>참고사항</FormLabel>
                                <Textarea id='desc' name={'desc'} value={desc} onChange={onChange} />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme='blue'
                            onClick={onsubmit}
                        >
                            Submit
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
