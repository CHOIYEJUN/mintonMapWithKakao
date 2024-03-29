import React, {useEffect} from 'react';
import {Box, HStack, Text, VStack} from "@chakra-ui/react";
import {useRecoilState} from "recoil";
import {onClickListState} from "../../states/MapStates";
import {doc, getDoc} from "firebase/firestore";
import {DB} from "../../fireBase";


type listDataType = {
    id: string;
    name: string;
    adress: string;
    businessHoursStart: string;
    businessHoursEnd: string;
    cost: string;
    type: string;
    lessen: string;
    desc: string;
    homepage: string;
    latlng: {
        lat: number;
        lng: number;
    }
}

const AroundItme = ({value}:any) => {

    const distance = value.distance.toFixed(2) + "km";
    const [isClick, setIsClick] = useRecoilState(onClickListState);

    const onClick = async (e:any) => {
        const id = e.currentTarget.id;

        const docRef = doc(DB, "mintonLocate", id); // 문서 참조 생성

        try{
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                const data = docSnap.data() as listDataType;
                    setIsClick({isClick: true, listData : data});

            }


        }catch (e) {
            console.log(e);
        }


    }

    return(
        <Box
            w={'100%'}
            h={'100px'}
            background={'white'}
            border={'1px solid black'}
            id={value.id}
            onClick={onClick}
        >
            <HStack
                w={'100%'}
                h={'100%'}
                alignItems={"center"}
            >

                <Box>
                    {value.type === "national" ?
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2Fbaming2.png?alt=media&token=98b56c18-13e8-4374-8b1b-0876ce0e5b90"}
                            style={{width: "60px"}}
                        />
                        :
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/mintonmap-7f2e8.appspot.com/o/img%2Fbaming1.png?alt=media&token=e9130802-8b4c-44e6-84c7-53f0376e9c9b"}
                            style={{width: "60px"}}
                        />
                    }
                </Box>
                <Box>
                    <Text fontSize={"l"}>{value.name}</Text>
                    <Text fontSize={"12px"}>{value.address}</Text>
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
