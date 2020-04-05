import React from 'react';
import { connect } from 'react-redux';
import { switchSkillLetter } from '../../redux/actions';

const SkillButton = ({
    className = '',
    color = '',
    text = '',
    switchSkillLetter,
}) => {
    const switchLetter = () => {
        switchSkillLetter(text);
    };

    const eventHandler = (e) => {
        e.stopPropagation();
        switchLetter();
    };

    return (
        <div
            className={`skill button ${className} ${color}`.trim()}
            onClick={eventHandler}
            onMouseOver={eventHandler}>
            {text}
        </div>
    );
};

export default connect(null, { switchSkillLetter })(SkillButton);
