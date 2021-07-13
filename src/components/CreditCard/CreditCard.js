import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    let imageUrl = '';
    let monthDigit = '';

    if (type === 'Visa') {
        imageUrl = './img/visa.png';
    } else if (type === 'Master Card') {
        imageUrl = './img/master-card.svg';
    }

    let hashedNumber = number.replace(/.(?=.{4})/g, '•');
    let creditCardNumber = hashedNumber.slice(0,4) + ' ' + hashedNumber.slice(4, 8) + ' ' + hashedNumber.slice(8, 12) + ' ' + hashedNumber.slice(12, 16)

    if (String(expirationMonth).length === 1) {
        monthDigit = '0' + String(expirationMonth);
    } else if (String(expirationMonth).length === 2) {
        monthDigit = String(expirationMonth);
    }
    
    let yearDigit = String(expirationYear).slice(2, 4);

    let style = { backgroundColor: `${bgColor}`, color: `${color}` };
    
    return (
        <div style={style} id='creditCard' className='d-flex flex-column p-3 m-2'>
            <img className="align-self-end d-block mb-4" src={imageUrl} />
            <h5 className='text-center fs-3 mb-4'>{creditCardNumber}</h5>
            <div className='d-flex'>
                <p className='ms-0 my-0'>Expires {monthDigit}/{yearDigit}</p>
                <p className='ms-4 my-0'>{bank}</p>
            </div>
            <p className='ms-0 my-0'>{owner}</p>
        </div>
    )
}

export default CreditCard;