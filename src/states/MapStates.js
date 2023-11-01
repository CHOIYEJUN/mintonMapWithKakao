
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
