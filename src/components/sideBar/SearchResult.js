import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {useRecoilValue} from "recoil";
import {serchResultState} from "../../states/MapStates";

export default function SearchResult(data) {

    console.log(data);
    const BoxCoodinate = {
        x : data.x,
        y : data.y
    };



    return (
            <>
                <Flex
                    color='black'
                    h={'100%'}


                >
                    <Box w='20%'
                         display='flex'
                         justifyContent='center'
                         alignItems='center'
                    >
                        <Image src='http://t1.daumcdn.net/mapjsapi/images/2x/marker.png'
                                 w={'30px'}
                               h={'40px'}

                        />
                    </Box>
                    <Box
                        w='80%'

                    >
                        <Text
                            fontSize='md'
                            fontWeight='bold'
                            margin={'5px'}
                        >
                            {data.place_name}
                        </Text>
                        <Text
                            fontSize='sm'
                            margin={'5px'}
                        >
                            {data.address_name}
                        </Text>


                    </Box>
                </Flex>
            </>
    )


}