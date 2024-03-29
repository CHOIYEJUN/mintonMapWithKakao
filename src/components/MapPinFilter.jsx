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
import {MapPinFilterIsOpenState, MapPinFilterState} from "../states/MapStates";
import {useEffect} from "react";

export default function MapPinFilter () {
  const [isOpen, setIsOpen] = useRecoilState(MapPinFilterIsOpenState);
  const [mapFilter, setMapFilter] = useRecoilState(MapPinFilterState);
  const onClose = () => setIsOpen(false);

  const onChage = (e) => {
    if(e.target.name === 'operation') {
        setMapFilter({...mapFilter, operation: e.target.value});
    }else if(e.target.name === 'radius') {
        setMapFilter({...mapFilter, radius: e.target.value});
    }
  }

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
                    <Select
                        onChange={onChage}
                        name={'operation'}
                    >
                        <option value="all">전체</option>
                        <option value="national">국립</option>
                        <option value="private">사립</option>
                    </Select>
                    <Text>운영중</Text>
                    <Select>
                        <option value="all">전체</option>
                        <option value="Y">운영중</option>
                        <option value="N">마감</option>
                    </Select>
                    <Text>내위치 기준 반경</Text>
                    <Select
                            name={'radius'}
                            onChange={onChage}
                    >
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
