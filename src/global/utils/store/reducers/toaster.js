export const SET_OK_TOASTER = 'SET_OK_TOASTER';
export const SET_KO_TOASTER = 'SET_KO_TOASTER';
export const HIDE_TOASTER = 'HIDE_TOASTER';

const toasterStore = (state = { display: false }, action) => {
    switch (action.type) {
        case SET_OK_TOASTER:
            return {
                ...{ display: true, ok: true },
                ...action.toasterData,
            };
        case SET_KO_TOASTER:
            return {
                ...{ display: true, ok: false },
                ...action.toasterData,
            };
        case HIDE_TOASTER:
            return {
                display: false,
            };
        default:
            return state;
    }
};

export default toasterStore;
