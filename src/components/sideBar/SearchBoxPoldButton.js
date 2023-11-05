import {Button} from "@chakra-ui/react";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
import {useState} from "react";

export default function SearchBoxPoldButton() {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        const sideBarBox = document.getElementById('sideBarBox');
        const sideBar = document.getElementById('sideBar');

        if (isOpen) {
            sideBarBox.style.width = "15%";
            sideBarBox.style.transition = "width 0.5s";
            sideBar.style.display="block";
            setIsOpen(false);
        } else {
            sideBarBox.style.width = "0%";
            sideBarBox.style.transition = "width 0.5s"
            sideBar.style.display="none";
            setIsOpen(true);
        }


    }


    return (
        <>
            <Button
                onMouseDown={onClick}
                position={"absolute"}
                bottom={'50%'}
                right={'-40px'}

            >
                {isOpen ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />}
            </Button>
        </>
    )
}