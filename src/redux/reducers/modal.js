import { TOGGLE_MODAL } from '../actions';

const initialState = {
    pulldownMenu: {
        show: false,
    },
};

export const modal = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                [payload]: {
                    show: !state[payload].show,
                },
            };
        default:
            return {
                ...state,
            };
    }
};
