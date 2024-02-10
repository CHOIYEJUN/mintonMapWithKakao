import {IconButton} from "@chakra-ui/react";

import {BiCurrentLocation} from "react-icons/bi";


export default function MyLocate () {
    const MarkerArr = [];

    const imageSize = new window.kakao.maps.Size(30, 30); // 마커이미지의 크기
    const imgSrc ='https://t1.daumcdn.net/localimg/localimages/07/2018/mw/m640/ico_marker.png';

    const onClick = () => {
        const _map = window.kakaoMap;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                _map.setCenter(new window.kakao.maps.LatLng(lat, lng));
                deleteMarkers(MarkerArr);
                const markerImage = new window.kakao.maps.MarkerImage(
                    imgSrc,
                    imageSize
                );
                const locPosition  = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(lat, lng),
                    map: _map,
                    image : markerImage
                });
                MarkerArr.push(locPosition);
            });
        } else {
            alert("GPS를 지원하지 않습니다.");
        }

        const deleteMarkers = (markers) => {
            if(markers.length === 0) return;

            for (let i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];
        };


    }
    return (
        <>
            <IconButton
                variant='solid'
                colorScheme='blue'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<BiCurrentLocation />}
                onClick={onClick}
                width={'30px'}
            />
        </>
    )
}
