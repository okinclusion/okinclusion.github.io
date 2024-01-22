import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';       
import backgroundVideo from '../../videos/snow.mp4';
import Footer from '../Footer';
import '../Cards.css';
import '../ToolTip.css'; 
import { Button } from '../Button';
import '../Button.css';

const HomeShare = () => {
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

    const handleMouseEnter = (event) => {
      const text = event.target.getAttribute('data-tip');
      setTooltipText(text);

      const rect = event.target.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    };

    const handleMouseLeave = () => {
      setTooltipText('');
    };

    tooltipTriggers.forEach((trigger) => {
      trigger.addEventListener('mouseenter', handleMouseEnter);
      trigger.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      tooltipTriggers.forEach((trigger) => {
        trigger.removeEventListener('mouseenter', handleMouseEnter);
        trigger.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  return (
    <>
    <div className='main-container'>
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type='video/mp4' alt='Video by 33studiodesign from Pixabay'/>
        </video>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Respite", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
        <div className='main-card'>
            <h5 className='main-text' style={{fontFamily: 'Tahoma'}}>Respite Services</h5>
            <div className='main_info'>
                Respite Services provides short-term relief and support services to primary caregivers of adults with 
                intellectual disabilities and families of children with intellectual and/or physical disabilities residing 
                in the South & Central Okanagan. Respite can be provided for a few hours, a day, a weekend or a week. It 
                may be provided on an occasional or on a regular basis. Services may be provided in the individual&apos;s 
                home or the respite provider&apos;s home.
            </div>
            <div className='main_info'>
            Contracted respite providers go through a screening process similar to that of our home share providers.
            </div>
            <div className='disclaimer'>
                For all program areas (with the exception of Home share & Respite): If individuals are self-referred and choose 
                to pay themselves, rates will be based on the per hour rate paid by 
                <span data-tip="Community Living BC" className="tooltip-trigger">
                    CLBC.
                    </span>All agency services are voluntary and 
                participants may refuse service at any time.
            </div>
            {tooltipText && (
                <div className="tooltip" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>
                    {tooltipText}
                </div>
            )}
        </div> 
    <Footer/>
    </>
  )
};

export default HomeShare;


// https://kardelcares.ca/home-share/#:~:text=Home%20Sharing%20enables%20adults%20with,lifestyle%20preferences%20of%20the%20individual.
// Image by <a href="https://pixabay.com/users/elrodion-563650/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=753508">ro dion</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=753508">Pixabay</a>