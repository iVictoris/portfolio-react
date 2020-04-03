import React from "react";

const SkillButton = ({ className = "", color = "", text = "F" }) => {
    return (
        <div className={`skill button ${className} ${color}`.trim()}>
            {text}
        </div>
    );
};

export default SkillButton;
