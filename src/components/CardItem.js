import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  return (
    <>
    <li className='cards__item' style={{backgroundColor: '#ffffff'}}>
        <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap' style={{fontFamily: 'Tahoma'}} data-category={props.label}>
                <img className='cards__item__img' src={props.src} alt="staff image"/>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text' style={{fontFamily: 'Tahoma'}}>{props.text}</h5>
            </div>
            <div className='cards__item__email'>
              <a href={`mailto:${props.email}`} className='cards__item__email__text' style={{fontFamily: 'Tahoma'}}>{props.email}</a>
            </div>
        </div>
    </li>
    </>
  )
}

export default CardItem