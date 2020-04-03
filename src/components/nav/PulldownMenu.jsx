import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux';

const PulldownMenu = ({ className = '', show, toggleModal }) => {
    const clickHandler = e => {
        toggleModal('pulldownMenu');
    };
    return (
        <div
            className={`navigation pulldown ${
                show ? 'show' : ''
            } ${className}`.trim()}>
            <Link to="/" onClick={clickHandler}>
                Home
            </Link>
            <Link to="/about" onClick={clickHandler}>
                About
            </Link>
            <Link to="/projects" onClick={clickHandler}>
                Projects
            </Link>
            <Link to="/contacts" onClick={clickHandler}>
                Contact
            </Link>
        </div>
    );
};

const mapStateToProps = ({
    modal: {
        pulldownMenu: { show },
    },
}) => ({ show });

export default connect(mapStateToProps, { toggleModal })(PulldownMenu);
