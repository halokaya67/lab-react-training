import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';

function App() {
    return (
        <div className="App">
            <h5 className="fw-bold m-2">IdCard</h5>
            <IdCard
                lastName='Doe'
                firstName='John'
                gender='male'
                height={178}
                birth={new Date("1992-07-14")}
                picture="https://randomuser.me/api/portraits/men/44.jpg"
            />

            <IdCard
                lastName='Delores '
                firstName='Obrien'
                gender='female'
                height={172}
                birth={new Date("1988-05-11")}
                picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
            
            <h5 className='fw-bold m-2'>Greetings</h5>
            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>

            <h5 className='fw-bold m-2'>Random</h5>
            <Random min={1} max={6}/>
            <Random min={1} max={100} />
            
            <h5 className='fw-bold m-2'>BoxColor</h5>
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />

            <h5 className='fw-bold m-2'>CreditCard</h5>
            <div className='d-flex'>
                <CreditCard
                    type="Visa"
                    number="0123456789018845"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="BNP"
                    owner="Maxence Bouret"
                    bgColor="#11aa99"
                    color="white"
                />
                <CreditCard
                    type="Master Card"
                    number="0123456789010995"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="N26"
                    owner="Maxence Bouret"
                    bgColor="#eeeeee"
                    color="#222222"
                />
                <CreditCard
                    type="Visa"
                    number="0123456789016984"
                    expirationMonth={12}
                    expirationYear={2019}
                    bank="Name of the Bank"
                    owner="Firstname Lastname"
                    bgColor="#ddbb55"
                    color="white"
                />
            </div>
        </div>
    )
}

export default App;
