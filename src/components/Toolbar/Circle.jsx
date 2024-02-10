import {IconButton, useToast} from "@chakra-ui/react";

import {useRecoilValue} from "recoil";
import {mapState} from "../../states/MapStates";
import {BiSolidCircleThreeQuarter} from "react-icons/bi";


export default function Circle () {

const toast = useToast();


    const onClick = () => {
       toast({
            title: "준비중입니다.",
            description: "곧 추가될꺼에요 !_!",
            status: "warning",
       })

    }
    return (
        <>
            <IconButton
                variant='solid'
                colorScheme='teal'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<BiSolidCircleThreeQuarter />}
                onClick={onClick}
            />
        </>
    )
}