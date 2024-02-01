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
          <TypeAnimation className='name' sequence={["Home Share", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Tahoma', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
        </div> 
    </div>
        <div className='main-card'>
            <h5 className='main-text' style={{fontFamily: 'Tahoma', fontSize: '4vmin'}}>Shared Living Services</h5>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Shared Living 
                <span data-tip="enables adults with developmental disabilities to choose an environment that addresses their specific needs and desires." className="tooltip-trigger">
                (Home Share)
                </span>is a residential service which provides individuals 
                with developmental disabilities the opportunity to choose a living arrangement that is specifically 
                designed to meet their needs and lifestyle preferences. Homes may be owned, rented or leased by 
                the Shared Living provider or by the individual receiving support. In some situations, the Home 
                Share provider&apos;s family lives in the home. In others, the Home Share provider and the supported 
                individual live together as roommates in a cooperative relationship.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                The individuals within the home share not only their living space, but also their lives. In some homes 
                the members of the household spend significant amounts of time together and are actively involved in 
                one another&apos;s daily activities. In other situations, the home sharing arrangement is characterized 
                by more independent relationships.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                People are happiest when they feel valued and are a contributing member of their household. Home Sharing 
                increases opportunities for people to establish natural relationships and social connections within their 
                community.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Individuals tend to choose this option because it provides an ideal balance of support and independence. 
                The program is 
                <span data-tip="helps to minimise the risk of negative, unfair or harmful treatment and neglect to the recipients of health and social care services." className="tooltip-trigger">
                    person-centered 
                </span>in that it allows individuals to select a Home Share provider and home 
                environment that meet their unique goals and preferences. Support is flexible and evolves according to 
                the changing needs of the individual. For some, Home Share is a stepping stone to even greater 
                independence. For others, it is an arrangement that will last for many years.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Home share contractors complete a lengthy application and screening process prior to being approved as an OI 
                provider. Ongoing monitoring and screening is completed throughout the duration of the contract.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Suppport services are provided 24 hours per day/7 days per week with an additional 24 hour emergency on-call system.
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
            <div className='main-btns apply'>
                <Button className='btns' link="/homeshare-apply" buttonStyle='btn--outline' buttonSize='btn--large'>
                    Apply to Be a Home Share provider
                </Button>
            </div>
        </div> 
    <Footer/>
    </>
  )
};

export default HomeShare;


// https://kardelcares.ca/home-share/#:~:text=Home%20Sharing%20enables%20adults%20with,lifestyle%20preferences%20of%20the%20individual.
// Image by <a href="https://pixabay.com/users/elrodion-563650/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=753508">ro dion</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=753508">Pixabay</a>