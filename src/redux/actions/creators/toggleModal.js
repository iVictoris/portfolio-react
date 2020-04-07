import { TOGGLE_MODAL } from '../';
export const toggleModal = (modalName = '') => {
    return {
        type: TOGGLE_MODAL,
        payload: modalName,
    };
};
