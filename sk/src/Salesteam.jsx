import React, { useState } from 'react';

function Salesteam() {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <div className='container3'>
      <button onClick={toggleContent} id='team3'>Sales and Marketing Team</button>
      <div className={'content3 ' + (contentVisible ? 'visible' : '')}>
        <div className="manager1">

          <div className='profile1'>
            <div className="member1">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Employee Name]</div>
            <div className="Post">Team Lead</div>
          </div>


          <div className='profile2'>
            <div className="member2">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Employee Name]</div>
            <div className="Post">Sales Officer</div>
          </div>


          <div className='profile3'>
            <div className="member3">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Employee Name]</div>
            <div className="Post">Sales Officer</div>
          </div>


          <div className='profile4'>
            <div className="member4">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Employee Name]</div>
            <div className="Post">Sales Officer</div>
          </div>
        </div>


        <div className="manager2">

          <div className="profile5">
            <div className="member4">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Founder Name]</div>
            <div className="Post">Marketing Officer</div>
          </div>


          <div className="profile6">
            <div className="member6">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
           <div className="Name">[Founder Name]</div>
            <div className="Post">Marketing Officer</div>
          </div>


          <div className="profile7">
            <div className="member7">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Founder Name]</div>
            <div className="Post">Marketing Officer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salesteam;
