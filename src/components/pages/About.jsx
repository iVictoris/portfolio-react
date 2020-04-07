import React from 'react';
import { Page } from '../';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Page className="about">
            <section className="opening">
                <header>
                    <h3>About Me</h3>
                </header>
                <section>
                    <p>
                        You can see my <Link to="/projects">projects</Link> or
                        go <Link to="/">home</Link>
                    </p>
                </section>
            </section>

            <section className="main">
                <p>
                    {`You're probably wondering who I am, well for starters, my name is Victor Tran, and I am
                    ${(
                        (new Date() - new Date(1994, 11, 13, 12, 5)) /
                        (1000 * 60 * 60 * 24 * 365.25)
                    )
                        .toString()
                        .substr(0, 6)}
                    years old. I live in Largo, FL (Tampa Bay area for those still unsure). I started my web development journey in 2013, when I was still in high school. I was relatively new and was using a WYSIWYG editor (Adobe Dreamweaver at the time) to code. I honestly wasn't very good.`}
                </p>

                <p>
                    I went to college for web development starting in 2013 and I
                    actually never received my diploma. The curriculum was not
                    the best. I learned Python, Java, and then intro to web
                    development (only the html/css portion). They also taught
                    about history/art and a ton of other useless courses, like
                    who cares? It was then that I realized that colleges don't
                    really teach you what's needed to be a web developer.
                </p>

                <p>
                    I left college in 2017 behind and went to become a self
                    taught programmer. I researched online and found multiple
                    resources, such as codeacademy, udemy, freecodecamp, team
                    treehouse, udacity. I ended up going through each resource
                    and learned something new each time. To be honest,
                    programming didn't click for me until 2017, when I was
                    enrolled in a nonprofit organization's coding bootcamp.
                </p>

                <p>
                    That nonprofit's name was LaunchCode, and I took on their
                    LC101. I graduated from their bootcamp in April 2018, but no
                    job. I didn't get a job because the area that I live in is
                    very centered around two languages that I didn't want to
                    code in, C# and Java. I learned both of those languages
                    (more C# than java), but ultimately, I didn't want to code
                    in it. I also dabbled in JavaScript during my last few
                    months in LaunchCode, and I fell in love with the language.
                </p>

                <p>
                    I've been coding in mostly JavaScript now, both in the front
                    using React and it's html-like JSX tags, and the back with
                    NodeJS runtime environment along with Express/Apollo Server.
                    I would say the reason I haven't gotten a job is the
                    ridiculous requirements tech jobs place for a 'junior' role.
                    It's like the department that wrote the requirements don't
                    know what they're talking about asking for a front end
                    developer skilled in NodeJS/AWS/.NET/Go lang. That coupled
                    with the low-balled rates some companies want to hire for
                    even the though the potential ROI is huge. They say&nbsp;"
                    <a href="https://medium.com/javascript-scene/why-cutting-costs-is-expensive-how-9-hour-software-engineers-cost-boeing-billions-b76dbe571957">
                        being cheap is expensive
                    </a>
                    ", so maybe it might be best to learn a thing or two from
                    Boeing.
                </p>

                <p>
                    My current journey has me in Lambda's coding school. I do
                    want to say that I did NOT have to go this route, but I'm
                    mostly here for the networking opportunity that they have.
                    I've not learned anything new in the period between April
                    2018 to November 2019 (the date I enrolled in Lambda
                    School), I've learned all that which Lambda School has to
                    offer even before enrolling.
                </p>
            </section>
        </Page>
    );
};

export default About;
