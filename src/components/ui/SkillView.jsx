import React from "react";

const SkillView = ({
    className = "",
    skill = "Backend",
    overview = "",
    skills = []
}) => {
    return (
        <div className={`skill view ${className}`.trim()}>
            <header>
                <h4>{skill}</h4>
            </header>

            <section className="overview">
                {overview ||
                    "The backend is responsible for the business logic of the web application. It provides data through an API (application platform interface), or in layman's terms, a way to access data through a set of urls. I've experience building RESTful APIs and Graphs using GraphQL compatible technologies."}
            </section>

            <section className="skill use">
                <h4>Technology Experience</h4>
                <section className="tech card">
                    <header>
                        <h5>NodeJs</h5>
                    </header>
                    <section className="overview">
                        A JS runtime built on Chrome's V8 engine allowing
                        developers to write serverside code in JS.
                    </section>

                    <section className="experience">
                        <p>Experience:</p>
                        <p>1 years</p>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default SkillView;
