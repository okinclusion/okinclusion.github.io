import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';       
import Footer from '../Footer';
import '../Cards.css';
import '../ToolTip.css'; 
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
    <div className='main-all'>
    <div className='name' style={{fontSize:'8vmin', fontFamily: 'Montserrat', color: '#fff', textShadow: '3px 2px #6C3092'}}>
      Supported Living
        </div> 
    </div>
        <div className='main-card'>
            <h5 className='main-text' style={{fontFamily: 'Montserrat', fontSize: '4vmin'}}>Supported Living Services</h5>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Supported living is an independent living options for people who want to live independently in their 
                own home, but still need some help with daily living. Support staff assist individuals in their home 
                and in the community with things like banking, medical appointments and cooking healthy meals, etc. 
                Supported Living is possible for a wide range of individuals with different support requirements, as 
                long as the person has the desire to live more independently and make choices for themself.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Support services are typically provided during the week Monday to Friday between the hours of 8:30 – 5:00 pm. 
                The service is designed to be flexible and some individuals, based on individual need may include support 
                services after 5:00 pm and on weekends. Supports will be provided both at the OI program sites and at the 
                individual&apos;s home as required.

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