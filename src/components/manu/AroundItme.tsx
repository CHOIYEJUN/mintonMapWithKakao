import React, {useEffect} from 'react';
import {Box, Text} from "@chakra-ui/react";

const AroundItme = ({value}:any) => {



    return(
        <Box
            w={'100%'}
            h={'100px'}
            background={'white'}
            border={'1px solid black'}
        >
            <Text fontSize={"l"}>{value.name}</Text>
            <Text fontSize={"l"}>{value.adress}</Text>
            <Text fontSize={"l"}>{value.distance}</Text>

        </Box>
    );
};

export default AroundItme;
