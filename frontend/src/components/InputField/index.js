import React from 'react';

import {Input} from './style';

function InputField(props) {

    const inputSize = {
        width: props.width,
    }

    return <Input 
                placeholder={props.placeholder} 
                type={props.type} id={props.id} 
                name={props.name}
                onChange={props.onChange}
                value={props.value}

                style={inputSize}
            />
    
}

export default InputField;