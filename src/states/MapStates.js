
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

export const serchResultState = atom({
        key: 'serchResultState',
        default: [

        ]
});

export const pagenationState = atom({
        key: 'pagenationState',
        default: null,
});

export const markerState = atom({
        key: 'markerState',
        default: [],
});
