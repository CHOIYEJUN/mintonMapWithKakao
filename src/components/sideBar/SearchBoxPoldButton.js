import {Button} from "@chakra-ui/react";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineDownCircle} from "react-icons/ai";
import {useState} from "react";
import {PiCaretCircleUpBold} from "react-icons/pi";

export default function SearchBoxPoldButton() {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        const sideBarBox = document.getElementsByClassName('searchResultBox');

        // sideBarBox 가 여러개 임으로 반복문 돌리면서 해야함
        if (isOpen) {
            for (let i = 0; i < sideBarBox.length; i++) {
                sideBarBox[i].style.display="block";
            }
            setIsOpen(false);
        } else {
            for (let i = 0; i < sideBarBox.length; i++) {
                sideBarBox[i].style.display="none";
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
                {isOpen ? <PiCaretCircleUpBold /> : <AiOutlineDownCircle />}
            </Button>
        </>
    )
}
