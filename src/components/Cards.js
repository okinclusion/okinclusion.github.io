import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  const leanneEmail = "ceo@okinclusion.ca";
  const sherylEmail = "sherylm.okinclusion@shaw.ca";
  const michelleFEmail = "michelleb.okinclusion@shaw.ca";
  const michelleYEmail = "keremeosco.okinclusion@shaw.ca";
  const amyEmail = "pc2@okinclusion.ca";
  const andreaEmail = "s.emp@okinclusion.ca";
  const sierraEmail = 'it@okinclusion.ca';

  return (
    <div className='cards'>
        <h1 className='title-work'></h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
              <CardItem
                  src="images/comingsoon.png"
                  text="Leanne Williams"
                  label="CEO" 
                  email={leanneEmail} />
                  <br/>
                  <CardItem
                  src="images/comingsoon.png"
                  text="Michelle Fritsche"
                  label="Home Share Coordinator"
                  email={michelleFEmail}/>
                  <br/>
                  <CardItem
                src="images/comingsoon.png"
                text="Amy Temple"
                label="Program Coordinator" 
                email={amyEmail}/>
              </ul>
              <ul className='cards__items'>
              <CardItem
                  src="images/comingsoon.png"
                  text="Michelle Young"
                  label="Program Coordinator" 
                  email={michelleYEmail}/>
                <br/>
              <CardItem 
                src="images/comingsoon.png"
                text="Andrea Scarfo"
                label="Employment Specialist/Job Developer"
                email={andreaEmail}/>
                <CardItem
                  src="images/comingsoon.png"
                  text="Sierra Williams"
                  label="IT" 
                  email={sierraEmail}/>
                </ul>
                <br/>
            </div>
        </div>
    </div>
  )
}

export default Cards
// Image by <a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3080102">Mohamed Hassan</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3080102">Pixabay</a>