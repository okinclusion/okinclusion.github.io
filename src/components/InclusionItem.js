import './InclusionItem.css';
import React from 'react';

function InclusionItem() {
    return (
        <>
        <div className='main'>
            <div className='contact-info'>
                <div className='hours-of-operation'>
                    Hours of Operation
                    <div className='hours-of-operation-items'>
                        Monday to Friday: 8:30am to 4:30pm
                    </div>
                </div>
                <div className='phone'>
                    Phone: 
                    <div className='phone-number'>(236) 422-0055</div>
                </div>
                <div className='fax'>
                    Fax:
                    <div className='fax-number'>(236) 422 0056</div>
                </div>
                <div className='email'>
                    Email:
                    <div className='email-'>okinclusion@shaw.ca</div>
                </div>
                <div className='address'>Address: 
                    <div className='address-'>527 Ellis Street, Penticton, BC V2A 4M4</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default InclusionItem;