import React from 'react';
import { connect } from 'react-redux';

const SkillView = ({
    className = '',
    skill = '',
    overview = '',
    skills = [],
}) => {
    const techCards = skills.map(({ name, overview, experience }) => {
        return (
            <section className="tech card" key={name}>
                <header>
                    <h5>{name}</h5>
                </header>
                <section className="overview">{overview}</section>

                <section className="experience">
                    <p>Experience:</p>
                    <p>{experience} years</p>
                </section>
            </section>
        );
    });
    return (
        skills.length > 0 && (
            <div className={`skill view ${className}`.trim()}>
                <header>
                    <h4>{skill}</h4>
                </header>
                <section className="overview">{overview}</section>
                <section className="skill use">
                    <h4>Technology Experience</h4>
                    {techCards}
                </section>
            </div>
        )
    );
};

const mapStateToProps = ({ skills: { active, ...skills } }) => {
    return {
        ...skills[active],
    };
};

export default connect(mapStateToProps, {})(SkillView);
