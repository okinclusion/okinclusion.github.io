import { React, useState } from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';

function Accessibility() {
    const [fontSize, setFontSize] = useState(14);
    return (
        <div className='main-container'>
            <div className='main-btns'>
                <Button onChange={() => setFontSize(fontSize + 1)} className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Aa</Button>
                <Button onChange={() => setFontSize(fontSize - 1)} className='btns' buttonStyle='btn--primary' buttonSize='btn--small'>Aa</Button>
            </div>
        </div>
    )
}