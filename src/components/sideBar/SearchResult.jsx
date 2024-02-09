import {Box, Flex, Image, Text} from "@chakra-ui/react";


export default function SearchResult({index, ...data}) {

    console.log(data);
    const BoxCoodinate = {
        x : data.x,
        y : data.y
    };
    let pinImage = '';
    const pinA = 'https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2FmarkerA.png?alt=media&token=4964226b-fd11-449d-b774-d3def2e16bd9';
    const pinB ='https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2FmarkerB.png?alt=media&token=bf7ac653-6786-4f23-9640-97056da6d219';
    const pinC = 'https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2FmarkerC.png?alt=media&token=01736d63-bd7b-4b31-a9bf-a519c45c21f8';


    if(index === 0){
        pinImage = pinA;
    }else if(index === 1){
        pinImage = pinB;
    }else if(index === 2){
        pinImage = pinC;
    }

    return (
            <>
                <Flex
                    color='black'
                    h={'70px'}
                >
                    <Box w='20%'
                         display='flex'
                         justifyContent='center'
                         alignItems='center'
                    >
                        <Image src={pinImage}
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
