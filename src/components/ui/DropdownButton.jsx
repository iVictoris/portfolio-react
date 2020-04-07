import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux';

const DropdownButton = ({ toggleModal, show }) => {
    const clickHandler = e => {
        e.stopPropagation();
        toggleModal('pulldownMenu');
    };

    return (
        <div
            className={`dropdown button ${show ? 'show' : ''}`.trim()}
            onClick={clickHandler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

const mapStateToProps = ({
    modal: {
        pulldownMenu: { show },
    },
}) => ({ show });

export default connect(mapStateToProps, { toggleModal })(DropdownButton);
