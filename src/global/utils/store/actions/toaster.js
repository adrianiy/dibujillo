import { SET_OK_TOASTER, SET_KO_TOASTER, HIDE_TOASTER } from '../reducers/toaster';

const setOkToaster = (toasterData) => ({
    type: SET_OK_TOASTER,
    toasterData,
});

const setKoToaster = (toasterData) => ({
    type: SET_KO_TOASTER,
    toasterData,
});

const hideToaster = () => ({
    type: HIDE_TOASTER,
});

export default {
    setOkToaster,
    setKoToaster,
    hideToaster,
};
