import React from 'react';
import './Random.css';

function Random(props) {
    let randomNumber = Math.floor(Math.random() * ( props.max - props.min ) + props.min );

    return (
        <div className='m-2' id='randomBox'>
            <p className='m-1'>Random value between {props.min} and {props.max} => {randomNumber}</p>
        </div>
    )
}
export default Random;