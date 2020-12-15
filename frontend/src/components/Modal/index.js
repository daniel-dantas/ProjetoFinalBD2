import React,{useState} from 'react';

import {ContentModal} from './style';

function Modal({openModal,children}){
    return(
       <ContentModal openModal={openModal}>
           {children}
       </ContentModal>
    );
}

export default Modal;