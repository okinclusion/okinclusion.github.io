import { React, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';    
import Footer from '../Footer';
import { Button } from '../Button';
import '../Button.css';



function Employment() { 
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
        <div className='main-all exception'>
            <div className='responsive-type-animation1'>
            <TypeAnimation className='name' sequence={["Employment", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Montserrat', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
            </div> 
        </div>
        <div className='main-card'>
            <h5 className='main-text' style={{fontFamily: 'Montserrat', fontSize: '4vmin'}}>Work With Us</h5>
            <div className='main_info' style={{fontSize: '3vmin'}}>
            Okanagan Inclusion is hiring casual and permanent part-time Community Inclusion Workers to work with adults with diversabilities.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
            Competitive wages and benefits.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
            If you would  like to work in an environment that is fun, inclusive and active then this is the place for you!
            </div>
            <div className='requirements' style={{fontSize: '3vmin'}}>
            <ul>
              Requirements
              <li>First Aid Certificate</li>
              <li>Criminal Record Check</li>
              <li>Driving Record</li>
              <li>Dr. Note of Fitness for Work</li>
              <li>Valid Class 5 Driver's Licence</li>
              <li>Own Vehicle in Good Working Condition</li>
            </ul>
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
            Preference to applicants with certification in the human services field and/or experience working with people with developmental disabilities, but willing to train the right people.
            </div>
            {tooltipText && (
                <div className="tooltip" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>
                    {tooltipText}
                </div>
            )}
            <br/>
            <div className='link'>
              <a href='https://communitylivingcareers.ca'>Careers In Community Living</a>
            </div>
            <div className='main-btns apply'>
                <Button className='btns' link="/employment-apply" buttonStyle='btn--outline' buttonSize='btn--large'>
                    Apply
                </Button>
            </div>
            
        </div>
        <Footer/>
    </>
  )
};

export default Employment;
