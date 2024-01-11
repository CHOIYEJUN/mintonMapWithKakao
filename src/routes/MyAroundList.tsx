import {VStack, Text, Box, Select, HStack} from "@chakra-ui/react";
import React, {useEffect, useRef, useState} from "react";
import Header from "./Header";
import AroundItme from "../components/manu/AroundItme";
import {pinData} from "../hooks/PinData";
import {collection, onSnapshot} from "firebase/firestore";
import {DB} from "../fireBase";


interface Position {
    latlng?: LatLng;
    lat: number;
    lng: number;
}

interface LatLng {
    lat: number;
    lng: number;
}

type LocationPinType = {
    id: string;
    name: string;
    address: string;
    type: string;
    latlng: LatLng;
    distance: number;
}


export default function MyAroundList() {
    const userPosition = useRef<Position | null>(null);
    const [objects, setObjects] = useState<any[]>([]);
    const [nearbyObjects, setNearbyObjects] = useState<LocationPinType[]>([]);
    const [makeLocations, setMakeLocations] = useState<LocationPinType[]>([]);
    const [radius, setRadius] = useState<number>(3);
    const [menageingType, setMenageingType] = useState<string>("all");

    useEffect( () => {
        const fatchData = async () => {
            await searchMyLocation();
            await getObjects();
        }
        fatchData();
    }, []);


    useEffect(() => {
        if (makeLocations.length > 0) {
            nearbyObj(makeLocations);
        }
    }, [radius, menageingType]); 


    const onChange = (e:any) => {
        if(e.target.name === "menageingType") {
            setNearbyObjects([]);
            const value = e.target.value;
            setMenageingType(value);

        }
        if(e.target.name === "radius"){
            setNearbyObjects([]);
            const value = Number(e.target.value);
            setRadius(value);
        }

    }

    const getObjects = async () => {
        try {

            onSnapshot(collection(DB, "mintonLocate"), (snapshot) => {
                const locations = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    // LocationPinType에 필요한 필드가 있는지 확인하고, 누락된 경우 기본값을 제공합니다.
                    return {
                        id: doc.id,
                        name: data.name ?? "이름 정보 없음",
                        address: data.adress ?? "주소 정보 없음",
                        type: data.type ?? "타입없음",
                        latlng: data.latlng ?? {lat: 0, lng: 0},
                        distance: data.distance ?? 0,
                    };
                });

                setMakeLocations(locations);
                nearbyObj(locations);
            });
        }catch (e) {
            console.log(e);
            return false;
        }

    }

    const searchMyLocation = () => {
        if (navigator.geolocation) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    userPosition.current = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
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


    const nearbyObj = (makeLocations : any) => {
        // @ts-ignore
        makeLocations.filter(obj => {
            if (!userPosition.current) return false; // 사용자 위치가 없으면 false 반환(필터링
            const distance = getDistanceFromLatLonInKm(userPosition.current.lat, userPosition.current.lng, obj.latlng.lat, obj.latlng.lng);
            if (distance === null) return false; // 거리가 없으면 false 반환(필터링)
            const result = distance <= radius; // 3km 이내의 객체만 반환
            if(menageingType === "national") {
                if(obj.type != "national") return false;
            }
            if(menageingType === "private") {
                if(obj.type != "private") return false;
            }
            if (result) {
                // obj 에 거리 추가하고 싶어
                obj.distance = distance;
                setNearbyObjects(prevState => [...prevState, obj]);
            }
        });
    }


    return (
        <VStack>
            <Header />
            <Text fontSize={"xl"} fontWeight={"600"}>내주변 민턴장</Text>

            <HStack
                w={'100%'}
                background={'white'}
                justifyContent={"space-around"}
            >
                <Select
                    onChange={onChange}
                    w={'40%'}
                    name={"menageingType"}
                >
                    <option value="all">전체보기</option>
                    <option value="national">국립</option>
                    <option value="private">사립</option>
                </Select>

                <Select
                    onChange={onChange}
                    w={'40%'}
                    name={"radius"}
                >
                    <option value="1"> 3 km </option>
                    <option value="5"> 5 km </option>
                    <option value="10"> 10 km </option>
                </Select>
            </HStack>

            <Box
                w={'100%'}
                background={'white'}
            >
                {nearbyObjects.map((obj:any, index:number) => {
                    return  <AroundItme key={index} value={obj}/>
                })}


            </Box>
        </VStack>
    )
}
