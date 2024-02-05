import React, { useState, useEffect } from 'react';
import './ToolTip.css'; 
import CARFSeal from '../images/CARFSEAL-nobg.png';

const ToolTip = () => {
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
    <div className="hover-popup-page">
        <h2 className='first-sentence'>Okanagan Inclusion is proud to announce the achievement of a three-year 
            <span data-tip="CARF International is a nonprofit accreditor of health and human services. Its goal is to ensure that persons served remain at the center of the service delivery process. Accreditation is official recognition that our organization is guided by internationally recognized service standards and best practices." className="tooltip-trigger">
              CARF Accreditation</span>
        </h2>
        <p className='information'>
        "This achievement is an indication of your organization's dedication and commitment to improving the 
        quality of the lives of the persons served." In addition, Okanagan Inclusion received no 
        recommendations, this is only achieved on 3 percent of CARF surveys. Thank you to our 
        incredible staff and caregivers for their ongoing dedication to the individuals we serve.
        </p>
        <p className='information'>
        Okanagan Inclusion has earned a Three-Year Accreditation. The leadership team and staff are 
        complimented and congratulated for this achievement. In order to maintain this accreditation, 
        throughout the term of accreditation, the organization is required to:
            <ul className='requirements'>
                <li className='requirements-item'>
                    Submit annual reporting documents and other required information to CARF, as detailed 
                    in the Accreditation Policies and Procedures section in the standards manual.
                </li>
                <li className='requirements-item'>
                    Maintain ongoing conformance to CARF's standards, satisfy all accreditation conditions, 
                    and comply with all accreditation policies and procedures, as they are published and made 
                    effective by CARF. 
                </li>
            </ul>
        </p>
        {tooltipText && (
            <div className="tooltip" style={{ top: tooltipPosition.top, left: tooltipPosition.left, fontSize: "2.5vmin" }}>
                {tooltipText}
            </div>
        )}
        <div className='seal-wrapper'> 
            <img className='seal' src={CARFSeal}/>
        </div>
    </div>
  );
};

export default ToolTip;
