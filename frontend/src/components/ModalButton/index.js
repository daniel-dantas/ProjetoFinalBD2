import React from 'react';
import {useState} from 'react';

import {Button,Close} from './style';

import Modal from '../Modal';

function ButtonModal(){

    const [openModal, setOpenModal] = useState(false);

    return(
        <>
            <Button openModal={openModal} onClick={() => {setOpenModal(!openModal)}} >Mais</Button>
            <Modal openModal={openModal} onClick={() => {setOpenModal(!openModal)}}/>
            <Close openModal={openModal} onClick={() => {setOpenModal(!openModal)}}>
                <div/>
                <div/>
            </Close>
        </>
    );
}

export default ButtonModal;