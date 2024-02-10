import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Select,
    Text
} from "@chakra-ui/react";
import {useRecoilState} from "recoil";
import {MapPinFilterIsOpenState} from "../states/MapStates";
import {useEffect} from "react";

export default function MapPinFilter () {
  const [isOpen, setIsOpen] = useRecoilState(MapPinFilterIsOpenState);
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    console.log('MapPinFilter');
  }, [isOpen]);

  return (
    <>
      <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          size={'sm'}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>지도 필터</DrawerHeader>
                <DrawerBody>
                <Box>
                    <Text>운영기관</Text>
                    <Select placeholder="운영기관">
                        <option value="all">전체</option>
                        <option value="national">국립</option>
                        <option value="private">사립</option>
                    </Select>

                    <Text>운영중</Text>
                    <Select placeholder="운영">
                        <option value="all">전체</option>
                        <option value="Y">운영중</option>
                        <option value="N">마감</option>
                    </Select>

                    <Text>내위치 기준 반경</Text>
                    <Select placeholder="반경">
                        <option value="all">전체</option>
                        <option value="1">1km</option>
                        <option value="3">3km</option>
                        <option value="5">5km</option>
                    </Select>


                </Box>
                </DrawerBody>
            </DrawerContent>
      </Drawer>
    </>
  )
}
