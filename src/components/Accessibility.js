import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';

function Accessibility() {
    return (
        <div className='main-container'>
            <div className='main-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Aa</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small'>Aa</Button>
            </div>
        </div>
    )
}