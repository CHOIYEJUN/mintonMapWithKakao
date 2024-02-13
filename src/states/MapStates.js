
import { atom } from 'recoil';
export const mapState = atom({
     key: 'mapState',
     default: null,
});

export const mapCursorState = atom({
        key: 'mapCursorState',
        default: false,
});

export const createPinDrawerIsopenState = atom({
        key: 'createPinDrawerIsopenState',
        default: false,
});

export const serchKeyWordState = atom({
        key: 'serchKeyWordState',
        default: '',
});
export const serchResultState = atom({
        key: 'serchResultState',
        default: [

        ]
});

export const pagenationState = atom({
        key: 'pagenationState',
        default: null,
});

export const markersState = atom({
        key: 'markersState',
        default: [],
});

export const SearchBoxPoldButtonState = atom({
        key: 'SearchBoxPoldButtonState',
        default: false,
});

export const onClickListState = atom({
        key: 'onClickListState',
        default: {
                isClick : false,
                listData : {
                        id: '',
                        name: '',
                        adress: '',
                        businessHoursStart: '',
                        businessHoursEnd: '',
                        cost: '',
                        type: '',
                        lessen: '',
                        desc: '',
                        homepage: '',
                        latlng: {
                                lat: 0,
                                lng: 0
                        }
                }
        }
});

export const MapPinFilterIsOpenState = atom({
        key: 'MapPinFilterIsOpenState',
        default: false,
});

export const MapPinFilterState = atom({
        key: 'MapPinFilterState',
        default: {
                operation: 'all',
                open: 'all',
                radius: 'all'
        }
});

