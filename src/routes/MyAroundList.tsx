import {VStack, Text, Box} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import Header from "./Header";
import AroundItme from "../components/manu/AroundItme";


interface Position {
    lat: number;
    lng: number;
}


export default function MyAroundList() {
    const [userPosition, setUserPosition] = useState<Position >();
    const [objects, setObjects] = useState<any[]>([]);

    useEffect(() => {
        searchMyLocation();

    }, []);

    const searchMyLocation = () => {
        if (navigator.geolocation) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    setUserPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                });

            } else {
                alert("현재 위치를 찾을 수 없습니다.");
                return null;
            }
        }
    }

    const getDistanceFromLatLonInKm =  (
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number
    ) => {
        const R = 6371; // 지구의 반지름(km)
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let distance;
        return distance = R * c; // 거리
    }

    function deg2rad(deg:number) {
        return deg * (Math.PI / 180);
    }


    const nearbyObjects = objects.filter(obj => {
        if(!userPosition) return false; // 사용자 위치가 없으면 false 반환(필터링
        const distance = getDistanceFromLatLonInKm(userPosition.lat, userPosition.lng, obj.lat, obj.lng);
        if(distance === null) return false; // 거리가 없으면 false 반환(필터링)
        return distance <= 3; // 3km 이내의 객체만 반환
    });

    return (
        <VStack>
            <Header />
            <Text fontSize={"xl"} fontWeight={"600"}>내주변 민턴장</Text>

            <Box
                w={'100%'}
                h={'100px'}
                background={'white'}
                border={'1px solid black'}
            >
            </Box>

            <Box
                w={'100%'}
                background={'white'}
            >

                <AroundItme />

            </Box>
        </VStack>
    )
}
