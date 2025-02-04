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
        {tooltipText && (
            <div className="tooltip" style={{ top: tooltipPosition.top, left: tooltipPosition.left, fontSize: "2.5vmin" }}>
                {tooltipText}
            </div>
        )}
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
        <div className='seal-wrapper'> 
            <img className='seal' src={CARFSeal}/>
        </div>
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
                src="https://okincbucket.s3.us-east-1.amazonaws.com/Outcomes%20Management%20Report%202023%20update.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXAECKAJWLV3L4BFN%2F20250204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250204T221843Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJHMEUCIDdz9vonHF%2FML6IeyP4%2Frntk%2FkZl5dZE1u6jseX7P9qGAiEAqd74G%2B3kWAlT9V9VysxE%2F62ghqld%2Bm9i4itneyNMfCwq7AIINxAAGgw0ODEzMDk2MjI4OTIiDKmPI%2FsHlgYEYiwqUCrJAuCnuuf4ECqMa0KeGFqo9IHJwa5UHkimRQjh2YOrgxjFshEaSz6Nk%2FLkSbIcBg2EYeJjNTSVyeztIaE4bI9JtOV%2FY7bq74%2BF3FgePHkq7YLcQsYNLb2pe%2Bz1NMLpVmkcjzIrg9gm979t4jgKpGfRf2mHTGYeCOLlqP2I24XzentSGr3fyMK94myWbvnHwG2SQ3BLGpETD1e6%2BZeHH4CFoFExXQgTrHVyd3IczvF8%2BmlZMRFKkT9djkfA5DcPjHjKf0ijJazTfzKoxA9BlAqYTJjLLD1qGluhhxrPdLtwSztn7%2BukYPVJp4TjV7K4h00YA%2BqX3J0F3OYHnpN%2Ffj006T5kbSQEPmJxFwIWFpjGsgcjDD9tPUtFnnUIaj5%2BnWlqRt6bj2cLUzFm3iFtgfTPJ46I6U4tGOUxwg%2BXncGJKOxah1NkN%2FXSanegMOGSir0GOrMC5WtyJKQVDN22rCMEXI2XnraZA47yJHfKMrAACHTGKWNQQOu%2BOol1%2F%2FNY4QHnny%2BnBfemiY1UjGamiV6SYqQ4%2Fns6B%2BZrPcldawZAxCbD7Mwlk1Mu32iQr%2FviI1Z1HCy8SYisi7wxOCT2roF1irgWP9NPVxPwicJlKCMDHVOd1NOhcwOC9coOA%2FDIOLCuPO3CbBG7H0IK3hb9YWBvxxtqgGPfwUO4Aj%2BiOFvB6WHXXbLILF%2FYxIeeehXhkHKV%2FywOFC5nsl%2FNgz9SsldoeBxHAEjTaE9JM32%2BRYQMKF%2FWt7d%2BYKk6M7sBRs4dTqNHMOWWcCpUrXPjeBpKlu9n616vQMy3XeNaxd5DB4UDKNfrdMNWe8KLLjCxa1thlB09ArzAZeqH75zNkn%2BRccWxHN6bDWzwvQ%3D%3D&X-Amz-Signature=edf5b449d818073b4f99b20a93422417ce77d93ae6aba6c76d702faf2d308909&X-Amz-SignedHeaders=host&response-content-disposition=inline"
                style={{ width: '80%', height: '90%', border: 'none'}}
                title="OMR PDF"
            />
        </div>
    </div>
  );
};

export default ToolTip;
