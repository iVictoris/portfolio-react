import React from 'react';
import { Page, SkillButton, SkillView } from '../';
import { Link } from 'react-router-dom';

const Home = ({ className = '' }) => {
    return (
        <Page className="home">
            <div className="resume overview">
                <header>
                    <h3>I'm Victor Tran</h3>
                </header>

                <section className="resume redirect">
                    <p>
                        You can read more <Link to="/about">about me</Link>
                    </p>
                </section>

                <section className="resume skills">
                    <h3 className="resume skills title">Skills</h3>
                    <SkillButton color="green" text="F" />
                    <SkillButton color="teal" text="B" />
                </section>

                <SkillView />
            </div>
        </Page>
    );
};

export default Home;
