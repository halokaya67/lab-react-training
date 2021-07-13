import React from 'react'
import './Greetings.css'

function Greetings(props) {
    let greetingsMessage;

    if (props.lang === 'de') {
        greetingsMessage = 'Hallo';
    } if (props.lang === 'en') {
        greetingsMessage = 'Hello';
    } if (props.lang === 'es') {
        greetingsMessage = 'Hola';
    } if (props.lang === 'fr') {
        greetingsMessage = 'Bonjour';
    }

    return (
        <div id="greetings" className='m-2'>
            <p className='m-1'>{greetingsMessage} {props.children}</p>
        </div>
    )
}

export default Greetings;