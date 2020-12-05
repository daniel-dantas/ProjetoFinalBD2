import React from 'react';

import {Input} from './style';

function InputField(props) {

    return <Input 
                placeholder={props.placeholder} 
                type={props.type} id={props.id} 
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            />
    
}

export default InputField;