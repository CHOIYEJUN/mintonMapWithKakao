import {IconButton} from "@chakra-ui/react";

import {BiCurrentLocation} from "react-icons/bi";


export default function MyLocate () {




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
                icon={<BiCurrentLocation />}
                onClick={onClick}
                width={'30px'}
            />
        </>
    )
}
