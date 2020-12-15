import React from 'react';

import {Close} from './style';

function CloseModal({openModal,onClick}){

    return(
        <Close openModal={openModal} onClick={onClick}>
            <div/>
            <div/>
        </Close>
    );
}

export default CloseModal;