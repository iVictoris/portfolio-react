import React from 'react';
import { Page } from '../';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <Page className="contact">
            <section className="opening">
                <header>
                    <h3>Contacting Me</h3>
                </header>
                <section>
                    <p>
                        You can visit my <Link to="/projects">projects</Link>,{' '}
                        <Link to="/about">about</Link>, or{' '}
                        <Link to="/">home</Link>
                    </p>
                </section>
            </section>

            <section className="main">
                <section className="method">
                    <section className="email card">
                        <header>
                            <h4>By Email:</h4>
                        </header>
                        <section>
                            <p>
                                <a href="mailto:victor.tran@tempestas.io">
                                    victor.tran@tempestas.io
                                </a>
                            </p>
                            <p>
                                <a href="mailto:victor.n.tran@outlook.com">
                                    victor.n.tran@outlook.com
                                </a>
                            </p>
                            <p>
                                <a href="mailto:victor-tran@lambdastudents.com">
                                    victor-tran@lambdastudents.com
                                </a>
                            </p>
                        </section>
                    </section>

                    <section className="phone card">
                        <header>
                            <h4>By Phone:</h4>
                        </header>
                        <section>
                            <p>
                                <a href="tel:8508665156">850-866-5156</a>
                            </p>
                            <p>
                                <a href="tel:7272399316">727-239-9316</a>
                            </p>
                            <p>(Please don't call me, texting is ok.)</p>
                        </section>
                    </section>
                    <section className="social card">
                        <header>
                            <h4>By Social Media:</h4>
                        </header>
                        <section>
                            <p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/ivictor-tran/">
                                    LinkedIn
                                </a>
                            </p>
                        </section>
                    </section>
                </section>
            </section>
        </Page>
    );
};

export default Contact;
