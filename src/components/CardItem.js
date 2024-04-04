import React from 'react';
import './Cards.css';

function CardItem(props) {
  return (
    <>
    <li className='cards__item' style={{backgroundColor: '#ffffff'}}>
        <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap' style={{fontFamily: 'Montserrat'}} data-category={props.label}>
                <img className='cards__item__img' src={props.src} alt="staff image"/>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text' style={{fontFamily: 'Montserrat'}}>{props.text}</h5>
            </div>
            <div className='cards__item__email'>
              <a href={`mailto:${props.email}`} className='cards__item__email__text' style={{fontFamily: 'Montserrat'}}>{props.email}</a>
            </div>
            <div className='cards__item__text'>
              <p className='cards__item__text1' style={{fontFamily: 'Montserrat'}}>{props.text1}</p>
            </div>
        </div>
    </li>
    </>
  )
}

export default CardItem