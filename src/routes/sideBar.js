import {Box, Center, HStack} from "@chakra-ui/react";
import MakePinButton from "../components/sideBar/makePinButton";

export default function SideBar() {
return (
        <>
            <HStack>
            <Center
            >
                <MakePinButton />

            </Center>
            </HStack>
        </>
    );



}