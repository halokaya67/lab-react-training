import React from 'react';
import './IdCard.css'

function IdCard(props) {
    return (
        <div id='idCard' className='d-flex flex-row justify-content-start m-2'>
            <img className='m-1' src={props.picture}/>
            <div id='idCardInfo' className='my-1'>
                <b>First Name</b>: {props.firstName}
                <br />
                <b>Last Name</b>: {props.lastName}
                <br />
                <b>Gender</b>: {props.gender}
                <br />
                <b>Height</b>: {props.height / 100}m
                <br />
                <b>Birth</b>: {props.birth.toDateString()}
            </div>
        </div>
    )
}

export default IdCard;
