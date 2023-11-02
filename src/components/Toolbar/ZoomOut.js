import {IconButton} from "@chakra-ui/react";
import { AiOutlineZoomOut} from "react-icons/ai";



export default function ZoomOut () {




    const onClick = () => {
        const _map = window.kakaoMap;
        _map.setLevel(_map.getLevel() +1);
        
    }
    return (
        <>
            <IconButton
                variant='solid'
                colorScheme='teal'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<AiOutlineZoomOut />}
                onClick={onClick}
            />
        </>
    )
}