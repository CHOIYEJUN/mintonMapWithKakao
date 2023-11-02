import {Box, Button, Icon, IconButton, Input} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";

export default function SearchBar() {

    return (
        <>
           <Input
                placeholder="Search"
                size="md"
                variant="filled"
                borderRadius="full"
                border='1px solid gray'
           />
            <Box
                position={'absolute'}
                right={'30px'}
                top={'88px'}
                _hover={{cursor: 'pointer'}}
                padding={'5px'}
            >
                <BiSearch/>
            </Box>
        </>

    )
}