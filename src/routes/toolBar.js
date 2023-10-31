import {Center, HStack, VStack} from "@chakra-ui/react";
import ZoomIn from "../components/Toolbar/ZoomIn";
import ZoomOut from "../components/Toolbar/ZoomOut";

export default function ToolBar() {
    return (
        <>
            <HStack>
            <Center
            >
                <VStack
                    spacing={4}
                    align='stretch'
                >
                <ZoomIn />
                <ZoomOut />
                    </VStack>
            </Center>
            </HStack>
        </>
    );
}