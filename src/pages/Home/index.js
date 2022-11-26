import React from 'react';
import TotalMembersCount from './TotalMembersCount';
import './index.scss';
import CreateNewEvent from './CreateNewEvent';
import Feedbacks from './Feedbacks';

const Home = () => {
  return (
    <div className='Home'>
      <div className='ImportantBoxes'>
        <div className='impBox'>
          <TotalMembersCount></TotalMembersCount>
        </div>
        <div className='impBox'>
          <CreateNewEvent></CreateNewEvent>
        </div>
        <div className='impBox'>
          <Feedbacks></Feedbacks>
        </div>
      </div>
    </div>
  );
};
  
export default Home;