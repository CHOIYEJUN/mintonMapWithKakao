import {IconButton} from "@chakra-ui/react";
import {AiOutlineZoomIn} from "react-icons/ai";
import {useRecoilValue} from "recoil";
import {mapState} from "../../states/MapStates";


export default function ZoomIn () {




    const onClick = () => {
        const _map = window.kakaoMap;
        _map.setLevel(_map.getLevel() - 1);

    }
    return (
        <>
            <IconButton
                variant='solid'
                colorScheme='blue'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<AiOutlineZoomIn />}
                onClick={onClick}
                width={'30px'}
            />
        </>
    )
}
