import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  const leanneEmail = "ceo@okinclusion.ca";
  const michelleFEmail = "michelleb.okinclusion@shaw.ca";
  const michelleYEmail = "homeshare@okinclusion.ca";
  const bethEmail = "kcommunityoptions@okinclusion.ca"
  const amyEmail = "pc2@okinclusion.ca";
  const andreaEmail = "s.emp@okinclusion.ca";
  const kobeEmail = 'asstpcpen@okinclusion.ca';
  const sierraEmail = 'it@okinclusion.ca';

  return (
    <>
   
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
                  label="Director of Share Living"
                  email={michelleFEmail}/>
                  <br/>
                  <CardItem
                src="images/StaffPhotos/AmyTemple.jpeg"
                text="Amy Temple"
                label="Program Coordinator" 
                email={amyEmail}/>
              </ul>
              <ul className='cards__items'>
              <CardItem
                  src="images/MichelleYoung.jpeg"
                  text="Michelle Young"
                  label="Program Coordinator" 
                  email={michelleYEmail}/>
                <br/>
              <CardItem 
                src="images/comingsoon.png"
                text="Andrea Scarfo"
                label="Employment Specialist/Job Developer"
                email={andreaEmail}
              />
              <CardItem
                src="images/StaffPhotos/KobeHutchinson.jpg"
                text="Kobe Hutchinson"
                label="Assistant Program Coordinator" 
                email={kobeEmail}
              />
              <CardItem
                src="images/StaffPhotos/BethRoth.jpg"
                text="Elizabeth Roth"
                label="Assistant Program Coordinator" 
                email={bethEmail}
              />
              <CardItem
                src="images/StaffPhotos/SierraWilliams.jpg"
                text="Sierra Williams"
                label="IT" 
                email={sierraEmail}
              />
                </ul>
                <br/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards
// Image by <a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3080102">Mohamed Hassan</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3080102">Pixabay</a>