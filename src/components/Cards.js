import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  const leanneEmail = "okinclusion@shaw.ca";
  const sherylEmail = "sherylm.okinclusion@shaw.ca";
  const michelleFEmail = "michelleb.okinclusion@shaw.ca";
  const michelleYEmail = "KeremeosCO.okinclusion@shaw.ca";
  const amyEmail = "tbd";

  return (
    <div className='cards'>
        <h1 className='title-work'></h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
              <CardItem
                  src="images/leanne.png"
                  text="Leanne Williams"
                  label="CEO" 
                  email={leanneEmail} />
                  <br/>
                  <CardItem
                  src="images/sheryl.png"
                  text="Sheryl Martin"
                  label="Program Coordinator"
                  email={sherylEmail}/>
                  <CardItem
                    src="images/michelle.png"
                    text="Michelle Fritsche"
                    label="Home Share Coordinator" 
                    email={michelleFEmail}/>
                  <br/>
              </ul>
              <ul className='cards__items'>
              <CardItem
                    src="images/staff1.png"
                    text="Michelle Young"
                    label="Program Coordinator" 
                    email={michelleYEmail}/>
                  <br/>
                  <CardItem
                  src="images/staff2.png"
                  text="Amy Temple"
                  label="Program Coordinator" 
                  email={amyEmail}/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards

/* Coming Soon - Image by Ann Carter from Pixabay */