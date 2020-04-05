import { SWITCH_LETTER } from '../actions';

const initialState = {
    active: '',
    B: {
        skill: 'Backend',
        overview: `The backend is responsible for the business logic of the web application. It provides data through an API (application platform interface), or in layman's terms, a way to access data through a set of urls. I've experience building RESTful APIs and Graphs using GraphQL compatible technologies.`,
        skills: [
            {
                name: 'NodeJS',
                overview: `A JS runtime built on Chrome's V8 engine allowing
                        developers to write serverside code in JS.`,
                experience: 2,
            },
            {
                name: 'ExpressJS',
                overview: `An unopinionated, minimalist web framework for Node.js`,
                experience: 2,
            },
            {
                name: 'GraphQL',
                overview: `Provides a complete description of the data in your API, gives clients the power to ask for exactly what they need and nothing more`,
                experience: 1,
            },
            {
                name: 'Apollo Server',
                overview: `An open-source, spec-compliant GraphQL server that's compatible with any GraphQL client`,
                experience: 1,
            },
            {
                name: 'Sequelize with PostgreSQL',
                overview: `A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more`,
                experience: 1,
            },
            {
                name: 'MongoDB using Mongoose',
                overview: `MongoDB is a schema-less NoSQL document database, and Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB `,
                experience: 1,
            },
            {
                name: 'Automated Testing',
                overview: `Using the jest framework, allows unit/integration testing for expected behaviors, and then adding supertest, allows end to end testing, starting in the front end, and finishing with the backend for a complete picture on whether everything works as expected`,
                experience: 1,
            },
        ],
    },
    F: {
        skill: 'Frontend',
        overview: `The front end is in charge of designing the user experience and interface so that it is displayed in a visual appealing way for it's user, and provides accessibility for those that require assisted technologies.`,
        skills: [
            {
                name: 'HTML5',
                overview: `It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications.`,
                experience: 5,
            },
            {
                name: 'CSS',
                overview: `CSS is the latest evolution of the Cascading Style Sheets language. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. `,
                experience: 5,
            },
            {
                name: 'JavaScript',
                overview: `A scripting language for web pages, it has evolved to be a serverside language of it's own thank to NodeJS, but as far as web goes, it adds interactivity to web pages.`,
                experience: 3,
            },
            {
                name: 'React',
                overview: `A JavaScript library for building user interfaces. React makes it painless to create interactive UIs. `,
                experience: 3,
            },
            {
                name: 'Redux',
                overview: `Redux is a predictable state container for JavaScript apps.`,
                experience: 2,
            },
            {
                name: 'Automated Testing',
                overview: `Using the testing library for react, allows you to test user interactions with your website to ensure components and uis are rendering properly.`,
                experience: 1,
            },
            {
                name: 'Apollo Client',
                overview: `A complete state management library for JavaScript apps. Allows you to write GraphQL queries, and takes care of requesting and caching data, and updating UI.`,
                experience: 1,
            },
            {
                name: 'JQuery',
                overview: `A JavaScript Library that allows developers to do more and write less. Extremely popular library, but declining in use.`,
                experience: 1,
            },
            {
                name: 'Bootstrap',
                overview: `An open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with Sass variables and mixins and more. `,
                experience: 1,
            },
        ],
    },
};

export const skills = (state = initialState, { type, payload }) => {
    switch (type) {
        case SWITCH_LETTER:
            return {
                ...state,
                active: payload,
            };

        default:
            return {
                ...state,
            };
    }
};
