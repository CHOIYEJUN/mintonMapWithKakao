import {Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text} from "@chakra-ui/react";
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
          size={'md'}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>필터</DrawerHeader>
                <DrawerBody>
                <Box>
                    <Text>필터</Text>
                </Box>
                </DrawerBody>
            </DrawerContent>
      </Drawer>
    </>
  )
}
