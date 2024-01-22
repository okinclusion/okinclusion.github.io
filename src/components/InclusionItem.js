import './InclusionItem.css';
import React from 'react';

function InclusionItem(props) {
    return (
        <>
        <div className='main'>
            <div className='contact-info'>
                <div className='hours-of-operation'>
                    Hours of Operation
                    <div className='hours-of-operation-items' data-category={props.hours}>
                        {props.hours}
                    </div>
                    <div className='hours-of-operation-items' data-category={props.hours2}>
                        {props.hours2}
                    </div>
                </div>
                <div className='phone'>
                    Phone: 
                    <div className='phone-number' data-category={props.phone}>
                        {props.phone}
                    </div>
                </div>
                <div className='fax'>
                    Fax:
                    <div className='fax-number' data-category={props.fax}>
                        {props.fax}
                    </div>
                </div>
                <div className='email'>
                    Email:
                    <div className='email-' data-category={props.email}>
                        {props.email}
                    </div>
                </div>
                <div className='address'>Address: 
                    <div className='address-' data-category={props.address}>
                        {props.address}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default InclusionItem;