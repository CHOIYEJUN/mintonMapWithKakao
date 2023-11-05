import {Button} from "@chakra-ui/react";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineDownCircle} from "react-icons/ai";
import {useState} from "react";
import {PiCaretCircleUpBold} from "react-icons/pi";

export default function SearchBoxPoldButton() {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        const sideBarBox = document.getElementById('searchResultBox');

        if (isOpen) {
            sideBarBox.style.transition = "width 0.5s";
            sideBarBox.style.display="block";
            setIsOpen(false);
        } else {
            sideBarBox.style.transition = "width 0.5s"
            sideBarBox.style.display="none";
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
                {isOpen ? <PiCaretCircleUpBold /> : <AiOutlineDownCircle />}
            </Button>
        </>
    )
}