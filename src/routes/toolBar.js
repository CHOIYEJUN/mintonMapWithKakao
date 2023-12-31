import {Center, HStack, VStack} from "@chakra-ui/react";
import ZoomIn from "../components/Toolbar/ZoomIn";
import ZoomOut from "../components/Toolbar/ZoomOut";
import Line from "../components/Toolbar/Line";
import Circle from "../components/Toolbar/Circle";
import Polygon from "../components/Toolbar/Polygon";
import MakePinButton from "../components/sideBar/makePinButton";
import MyLocate from "../components/Toolbar/MyLocate";

export default function ToolBar() {
    return (
        <>
            <HStack>
            <Center
            >
                <VStack
                    spacing={4}
                    align='stretch'
                    margin={'20px 0 0 10px'}

                >
                    <MyLocate />
                    <ZoomIn />
                    <ZoomOut />

                    </VStack>
            </Center>
            </HStack>
        </>
    );
}
