import {
    Box, Button,
    FormLabel, Grid, GridItem, Input, Link, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Radio, RadioGroup,
    Stack, Textarea, Center, useDisclosure
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {onClickListState} from "../../states/MapStates";

type locationType= {
    isClick: boolean;
    listData: listDataType;
}

type listDataType = {
    id: string;
    name: string;
    adress: string;
    businessHoursStart: string;
    businessHoursEnd: string;
    cost: string;
    type: string;
    lessen: string;
    desc: string;
    homepage: string;
    latlng: {
        lat: number;
        lng: number;
    }
}

export default function MintonInfoModal() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    // 이거 위에있는 타입으로 어떻게 지정하지?
    const [clickLocation, setClickLocation] = useRecoilState(onClickListState);
    const [location, setLocation] = useState<listDataType>({
            id: '',
            name: '',
            adress: '',
            businessHoursStart: '',
            businessHoursEnd: '',
            cost: '',
            type: '',
            lessen: '',
            desc: '',
            homepage: '',
            latlng: {
                lat: 0,
                lng: 0
            }
    });

    useEffect(() => {
        if(clickLocation.isClick === true) {
            onOpen();
        }
    }, [clickLocation, onOpen]);

    useEffect(() => {
        setLocation(clickLocation.listData);
    }, [clickLocation.listData]);

    const onCloseModal = () => {
        setClickLocation({isClick: false, listData: location});
    }
    return(
      <Center>
          <Modal onClose={onCloseModal} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader>{location.name}</ModalHeader>
                  <ModalCloseButton
                      onClick={onClose}
                  />
                  <ModalBody>
                      <Stack spacing='10px'>
                          <Box>
                              <FormLabel htmlFor='name'>주소</FormLabel>
                              <Input
                                  value={location.adress}
                                  readOnly={true}
                              />
                          </Box>

                          <Box>
                              <FormLabel htmlFor='name'>운영시간</FormLabel>
                              <Grid templateColumns='repeat(9, 1fr)' gap={9}>
                                  <GridItem colSpan={4}>
                                      <Input
                                          value={location.businessHoursStart}
                                          readOnly={true}
                                      />
                                  </GridItem>
                                  <GridItem textAlign={"center"} colSpan={1}>
                                      ~
                                  </GridItem>

                                  <GridItem colSpan={4}>
                                      <Input
                                          readOnly={true}
                                          value={location.businessHoursEnd}
                                      />
                                  </GridItem>
                              </Grid>
                          </Box>

                          <Box>
                              <FormLabel htmlFor='name'>비용</FormLabel>
                              <Input
                                  value={location.cost}
                                  readOnly={true}
                              />

                          </Box>
                          <Box>
                              <FormLabel htmlFor='type'>운영기관</FormLabel>
                              <RadioGroup defaultValue={location.type}>
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
                              <RadioGroup defaultValue={location.lessen}>
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
                                  value={location.desc}
                                  readOnly={true}
                              />
                          </Box>

                          <Box>
                              <FormLabel htmlFor='name'>홈페이지</FormLabel>
                              <Link color='teal.500' fontWeight={'600'} href={location.homepage}>
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
    );

}
