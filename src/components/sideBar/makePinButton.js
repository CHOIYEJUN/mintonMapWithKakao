import {Box, Button} from "@chakra-ui/react";
import {TbMapPinPlus} from "react-icons/tb";

export default function MakePinButton() {

    const onClick = (type) => {
        const manager = window.manager;
        manager.clear();
        manager.cancel();
        manager.select(type);
    }

    return (
        <>
            <Button
                colorScheme='blue'
                onClick={(e) => onClick(window.kakao.maps.drawing.OverlayType.MARKER)}

            >
                <TbMapPinPlus/>
            </Button>
        </>
    );
}