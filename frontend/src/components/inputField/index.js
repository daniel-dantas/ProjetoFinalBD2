import React from 'react';

import {Input} from './style';

function inputField(props) {
    return(
        <Input placeholder={props.placeholder} type={props.type}></Input>
    );
}

export default inputField;