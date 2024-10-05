import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id="work" className='mywork'>
      <div className="mywork-title">
        <h1>My Work</h1>
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work, index) => (
          <div key={index} className='mywork-item'>
            <div className='mywork-item-inner'>
              {/* Front Side */}
              <div className='mywork-item-front'>
                <img src={work.w_img} alt={`Work ${index}`} />
              </div>
              {/* Back Side */}
              <div className='mywork-item-back'>
                <p>{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mywork-showmore'>
        <p>Show more</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
