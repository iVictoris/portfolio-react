import React from 'react';
import { Page } from '../';
import { Link } from 'react-router-dom';

const randomIDGenerator = () =>
    (Math.random() * Math.random()).toString(9).substr(2, 9);

const Projects = ({
    //projects
    ...props
}) => {
    const projects = [
        {
            id: randomIDGenerator(),
            title: 'Personal Portfolio v2',
            repo: 'https://github.com/iVictoris/portfolio-react',
            repoLink: 'Portfolio v2',
            description: `This project that you're looking at. This is a React project with Redux and preprocessor SASS. It showcases my skills in the home page, a bit about me in the About Me page, projects in the Project Page, and lastly, a way to contact me with work opportunities. `,
            role: 'Front End',
            contribution: ((1 / 1) * 100).toString().substr(0, 5).concat('%'),
            time: '1 week',
        },
        {
            id: randomIDGenerator(),
            title: 'Optimal AirBnB',
            repo: 'https://www.github.com/AirBnBOptimalPricing/FE',
            repoLink: 'Optimal AirBnB Pricing Repo',
            live: 'https://optimal-airbnb.netlify.com/',
            description:
                'Cross functional project consisting of Front End developers, skilled in using React, React Router, Redux, SASS, AJAX, Authn/Authz, a Backend developer, creating an API in Node/Express, and a Data Science team that provides optimal pricing for an AirBnB host to get the best price possible based on historical data of the region.',
            role: 'Front End',
            contribution: ((240 / 258) * 100)
                .toString()
                .substr(0, 5)
                .concat('%'),
            time: '1 week',
        },
        {
            id: randomIDGenerator(),
            title: 'VR Funding Platform',
            repo:
                'https://www.github.com/virtual-reality-funding-platform-1/front-end',
            live: 'https://vr-funding.netlify.com',
            repoLink: 'VR Repo',
            description:
                'Cross functional project consisting of a UX designer, 3 Front end developers, 1 backend developer and a web developer to create a marketing page working together to solve a problem. We created this website to support Sixr. Sixr is a company that provides underrepresented groups an ability to raise capital for their VR solution. We assist in that by allowing users to login in/sign up and basically start fundraising. Donaters are welcome to sign up as well to donate to projects they find appealing.',
            role: 'Front End',
            contribution: ((181 / 201) * 100)
                .toString()
                .substr(0, 5)
                .concat('%'),
            time: '2 week',
        },
        {
            id: randomIDGenerator(),
            title: 'Digital Resume',
            repo: 'https://www.github.com/iVictoris/Preprocessing-I',
            live: 'https://ivictoris-digital-resume.netlify.com/',
            repoLink: 'Resume v2 Repo',
            description: `This project consisted of just me using React and LESS to create a digital resume while attending Lambda School, it is the 2nd web resume I've created. It lists my past employment and skills I'm knowledgable in`,
            role: 'Front End',
            contribution: ((1 / 1) * 100).toString().substr(0, 5).concat('%'),
            time: '.5 week',
        },
        {
            id: randomIDGenerator(),
            title: 'Portfolio v1',
            repo: 'https://www.github.com/iVictoris/portfolio-website',
            live: 'https://ivictoris-portfolio.netlify.com/',
            repoLink: 'Portfolio website v1',
            description: `In this project, we students were encouraged to go to html5up.net to find ourselves a template that we can use to showcase our projects. I chose to use the Forty template, and changed things as needed. It isn't the best template, and hence why you're seeing this version of my portfolio.`,
            role: 'Front End',
            contribution: ((1 / 1) * 100).toString().substr(0, 5).concat('%'),
            time: '.5 week',
        },
        {
            id: randomIDGenerator(),
            title: 'Resume v1',
            repo: 'https://github.com/iVictoris/resume',
            live: 'https://ivictoris-resume.netlify.com/',
            repoLink: 'Resume website v1',
            description: `I built this web resume in React. It lists my work experience for a single company without any of the IT stuff. I intended to build a version where I could switch between resumes based on a select tag that would load different information.`,
            role: 'Front End',
            contribution: ((1 / 1) * 100).toString().substr(0, 5).concat('%'),
            time: '.5 week',
        },
    ];

    const projectCards = projects.map(
        ({
            id,
            title,
            repo,
            live,
            description,
            role,
            repoLink,
            contribution,
        }) => {
            return (
                <div className="project card" key={id}>
                    <header>
                        <h4>{title}</h4>
                        {live && (
                            <p>
                                &nbsp;&mdash;{' '}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`${live}`}>
                                    Live
                                </a>
                            </p>
                        )}
                    </header>
                    <section className="content">
                        <section className="stat">
                            <p>Github:</p>
                            <p className="repo">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`${repo}`}>
                                    {repoLink}
                                </a>
                            </p>
                        </section>
                        <section className="stat">
                            <p>Role:</p>
                            <p>{role}</p>
                        </section>
                        <section className="stat">
                            <p>Contribution:</p>
                            <p>{contribution}</p>
                        </section>
                        <section className="stat description">
                            <p>Description:</p>
                            <p>{description}</p>
                        </section>
                    </section>
                </div>
            );
        },
    );

    return (
        <Page className="projects">
            <section className="opening">
                <header>
                    <h3>Projects</h3>
                </header>
                <section>
                    <p>
                        You can read more <Link to="/about">about me</Link> or
                        go <Link to="/">home</Link>
                    </p>
                </section>
            </section>
            <section className="main">{projectCards}</section>
        </Page>
    );
};

export default Projects;
