import React, {useContext, useEffect} from "react";
import {
    Box,
    Drawer,
    DrawerBody, DrawerCloseButton,
    DrawerContent,
    DrawerOverlay, Text,
    useDisclosure
} from "@chakra-ui/react";

import {MyContext} from "../../routes/Header";
import {useNavigate} from "react-router-dom";

export default function ManuList() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const context = useContext(MyContext);
    const navigation = useNavigate();

    useEffect(() => {
        if (context?.isMenuOpen) {
            onOpen();
        }
    }, [context?.isMenuOpen, onOpen]);

    const closeDrawer = () => {
        onClose();
        context?.setIsMenuOpen(false);
    };

    const onAroundClick = () => {
        navigation("/around");
    }


    return (
        <>
            <Drawer placement={"top"} onClose={closeDrawer} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Box
                            h={"70px"}
                            alignItems={"center"}
                            display={"flex"}
                            onClick={onAroundClick}

                        >
                            <Text fontSize={"xl"} fontWeight={"600"}>🔍 내주변 민턴장</Text>
                        </Box>
                        <Box
                            h={"70px"}
                            alignItems={"center"}
                            display={"flex"}
                        >
                            <Text fontSize={"xl"} fontWeight={"600"}>❗민턴장 제안하기</Text>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
