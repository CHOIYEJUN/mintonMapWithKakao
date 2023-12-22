import {Button} from "@chakra-ui/react";
import { AiOutlineDownCircle} from "react-icons/ai";
import {PiCaretCircleUpBold} from "react-icons/pi";
import {useRecoilState} from "recoil";
import {SearchBoxPoldButtonState} from "../../states/MapStates";

export default function SearchBoxPoldButton() {
    const [isOpen, setIsOpen] = useRecoilState(SearchBoxPoldButtonState);

    const onClick = () => {
        const sideBarBox = document.getElementsByClassName('searchResultBox');

        if (isOpen) {
            for (let i = 0; i < sideBarBox.length; i++) {
                sideBarBox[i].style.display="none";
            }
            setIsOpen(false);
        } else {
            for (let i = 0; i < sideBarBox.length; i++) {
                sideBarBox[i].style.display="block";
            }
            setIsOpen(true);
        }

    }


    return (
        <>
            <Button
                onMouseDown={onClick}
                position={"absolute"}
                  top={'-40px'}
                right={'0'}
            >
                {isOpen ? <AiOutlineDownCircle /> : <PiCaretCircleUpBold />}
            </Button>
        </>
    )
}
