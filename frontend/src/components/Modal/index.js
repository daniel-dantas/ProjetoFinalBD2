import React from 'react';

import {ContentModal,Content} from './style';

function Modal({openModal}){
    return(
       <ContentModal openModal={openModal}>
           <Content></Content>
       </ContentModal>
    );
}

export default Modal;