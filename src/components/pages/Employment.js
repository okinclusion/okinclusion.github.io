import { React, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';       
import backgroundVideo from '../../videos/snow.mp4';
import ToolTip from '../ToolTip';
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
        <div className='main-container'>
            <div className='responsive-type-animation'>
            <TypeAnimation className='name' sequence={["Employment", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Montserrat', textShadow: '3px 2px #5b05f9', color: '#fff'}}/>
            </div> 
        </div>
        <div className='main-card'>
            <h5 className='main-text' style={{fontFamily: 'Montserrat', fontSize: '4vmin'}}>Work With Us</h5>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Okanagan Inclusion Employment Services responds to the desire of individuals living with a developmental disability to pursue employment as a means to full inclusion in our community. At the same time, the program also addresses employers’ growing demand for qualified, reliable employees by providing creative employment solutions, candidate screening and one-to-one support through the hiring and training process.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Employers who choose to hire an individual with a developmental disability demonstrate their commitment to our community and to diversity in the workplace. They benefit by hiring an enthusiastic individual who is capable and dependable. OI Employment Services helps employers identify opportunities for improved efficiency and employee retention and matches specific needs with individuals who are willing and able to work.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Individuals who wish to become employed identify the types of work that they find of interest, and OI’s Job Developer surveys the local labour market for suitable employment opportunities. OI staff also look for possibilities to “job carve” specific responsibilities from an existing position or multiple positions in order to create a suitable employment opportunity for the individual. Once an employment opportunity is found, OI’s job developer supports the individual through the application, interview, orientation and training process. OI staff continue to liaise with the employee, the employer and his/her business to ensure long-term success.
            </div>
            <div className='main_info' style={{fontSize: '3vmin'}}>
                Support services are typically provided during the week Monday to Friday between the hours of 8:30 – 5:00 pm. The service is designed to be flexible and some individuals, based on individual need may include support services after 5:00 pm and on weekends. Supports will be provided both at the OI program sites and at the employment sites.
            </div>
            {tooltipText && (
                <div className="tooltip" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>
                    {tooltipText}
                </div>
            )}
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
