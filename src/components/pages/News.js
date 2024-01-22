import React from 'react';
import CardItem from '../CardItem';
import '../Cards.css';
import backgroundVideo from '../../videos/snow.mp4';
import { TypeAnimation } from 'react-type-animation';  

function News() {
  const leanneEmail = "okinclusion@shaw.ca";
  const sherylEmail = "sherylm.okinclusion@shaw.ca";
  const michelleEmail = "michelleb.okinclusion@shaw.ca";

  return (
    <>
         <div className='main-container'>
        <video autoPlay loop muted playsInline>
            <source src={backgroundVideo} type='video/mp4' alt='Video by Jemaver from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["News", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
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
                        email={michelleEmail}/>
                    <br/>
                </ul>
                <ul className='cards__items'>
                <CardItem
                        src="images/staff1.png"
                        text=""
                        label="" 
                        email=""/>
                    <br/>
                    <CardItem
                    src="images/staff2.png"
                    text=""
                    label="" 
                    email=""/>
                    <br/>
                    <CardItem
                    src="images/staff3.jpg"
                    text=""
                    label=""
                    email=""/>
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                        src="images/staff4.jpg"
                        text=""
                        label="" 
                        email=""/>
                        <br/>
                    <CardItem
                        src="images/staff5.jpg"
                        text=""
                        label="" 
                        email=""/>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default News;

/* Coming Soon - Image by Ann Carter from Pixabay */