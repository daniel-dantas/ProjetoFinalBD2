import React from 'react';
import {useState} from 'react';

import Menu from '../Menu';

import {Burguer} from './style';

function BurguerIcon(){
    const [open, setOpen] = useState(false);

    return(
        <>
            <Burguer open={open} onClick={() => {setOpen(!open)}}>
                <div />
                <div />
                <div />
            </Burguer>
            <Menu open={open} />
        </>
    );
}

export default BurguerIcon;