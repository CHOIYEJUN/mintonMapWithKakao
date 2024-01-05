import React, {useState} from 'react';
import {Box, Text} from "@chakra-ui/react";
import {RxHamburgerMenu} from "react-icons/rx";
import { createContext } from 'react';
import ManuList from "../components/manu/ManuList";

type MenuContextType = {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}

const defaultMenuContextValue: MenuContextType = {
    isMenuOpen: false,
    setIsMenuOpen: () => {} // 빈 함수로 초기화
}

// Context 생성 및 기본값 할당
const MyContext = createContext<MenuContextType>(defaultMenuContextValue);
export { MyContext };
export default function Header() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const ClickHamburgerMenu = () => {
        setIsMenuOpen(true); // 메뉴를 열기
    }

    // @ts-ignore
    return (

        <Box
            margin={'0 0 10px 0'}
        >
            <MyContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
                <ManuList/>
            </MyContext.Provider>


            <Box
                position={'absolute'}
                top={'3px'}
                left={'12px'}
                margin={'5px'}
                fontSize={'2xl'}
                cursor={'pointer'}
                onClick={ClickHamburgerMenu}
            >
                <RxHamburgerMenu/>
            </Box>
            <Text
                fontSize={'xl'}
                fontWeight={'bold'}
                margin={'0 0 0 10px'}
            >
                Minton MAP
            </Text>
            <Box
                position={'absolute'}
                top={'3px'}
                right={'12px'}
                margin={'5px'}
                fontWeight={'600'}
                bgColor={'#3182CE'}
                color={'white'}
                padding={'2px'}
                borderRadius={'10px'}
            >
                Beta
            </Box>

        </Box>
    )

}
