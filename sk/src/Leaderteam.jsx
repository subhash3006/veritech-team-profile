import React, { useState } from 'react';

function Leaderteam() {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <div className="container1">
      <button onClick={toggleContent} id='team1'>Leaders/Management Team</button>
      <div className={'content1 ' + (contentVisible ? 'visible' : '')}>
        <div className="leader1">
          <div className='profile1'>
            <div className="member1">
              <div className="dp"><img src="./image.jpg" alt="photo"/></div>
            </div>
            <div className="Name">[Founder Name]</div>
            <div className="Post">Founder/CEO</div>
          </div>


          <div className='profile2'>
            <div className="member2">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Founder Name]</div>
            <div className="Post">Founder/CEO</div>
          </div>
        </div>
        
        <div className="leader2">
          
          <div className='profile3'>
            <div className="member3">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
             <div className="Name">[VP Name]</div>
            <div className="Post">VP, Development & Growth</div>
          </div>

          <div className='profile4'>
            <div className="member4">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[VP Name]</div>
            <div className="Post">VP, Sales & Marketing</div>
          </div>
       
          <div className="profile5">
            <div className="member5">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
             <div className="Name">[Vp Name]</div>
            <div className="Post">VP, Finance & Operation</div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Leaderteam;
