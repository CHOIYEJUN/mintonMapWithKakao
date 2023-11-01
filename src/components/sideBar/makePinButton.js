import {Box, Button} from "@chakra-ui/react";

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
                핀 생성
            </Button>
        </>
    );
}