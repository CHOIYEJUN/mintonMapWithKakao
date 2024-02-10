import {Center, HStack} from "@chakra-ui/react";
import MakePinButton from "../components/sideBar/makePinButton";
import CreatePinInfo from "../rightBar/createPinInfo";

export default function RightBar () {
    return (
        <>

            <HStack>
                <Center
                >
                    <CreatePinInfo />
                </Center>
            </HStack>
        </>
    )
}