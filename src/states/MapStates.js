
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
