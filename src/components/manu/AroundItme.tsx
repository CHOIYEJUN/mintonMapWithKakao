import React, {useEffect} from 'react';
import {Box, HStack, Text, VStack} from "@chakra-ui/react";

const AroundItme = ({value}:any) => {

    const distance = value.distance.toFixed(2) + "km";



    return(
        <Box
            w={'100%'}
            h={'100px'}
            background={'white'}
            border={'1px solid black'}
        >
            <HStack>
                <Box>
                    {value.type === "national" ?
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2Fbaming2.png?alt=media&token=98b56c18-13e8-4374-8b1b-0876ce0e5b90"}
                            style={{width: "60px"}}
                        />
                        :
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2Fbaming1.png?alt=media&token=e9130802-8b4c-44e6-84c7-53f0376e9c9b"}
                            style={{width: "80px"}}
                        />
                    }
                </Box>
                <Box>
                    <Text fontSize={"l"}>{value.name}</Text>
                    <Text fontSize={"l"}>{value.adress}</Text>
                    <Text fontSize={"m"}
                          color={"red"}
                    >
                        {distance}
                    </Text>
                </Box>
            </HStack>


        </Box>
    );
};

export default AroundItme;
