import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/actions';

const Backdrop = ({ name, modal }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        toggleModal(name);
    };
    return (
        <div
            className={`backdrop ${modal[name]?.show ? 'show' : ''}`.trim()}
            onClick={handleClick}></div>
    );
};

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(mapStateToProps, { toggleModal })(Backdrop);
