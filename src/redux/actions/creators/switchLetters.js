import { SWITCH_LETTER } from '../';

export const switchSkillLetter = (letter) => {
    return {
        type: SWITCH_LETTER,
        payload: letter,
    };
};
