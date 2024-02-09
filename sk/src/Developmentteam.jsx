import React, { useState } from 'react';

function Developmentteam() {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <div className='container2'>
      <button onClick={toggleContent} id='team2'>Development Team</button>
      <div className={'content2' + (contentVisible ? 'visible' : '')}>
        
        <div className="developer1">

          <div className='profile1'>
            <div className="member1">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Developer Name]</div>
            <div className="Post">Team Lead, SE</div>
          </div>


          <div className='profile2'>
            <div className="member2">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Developer Name]</div>
             <div className='Post'>Software Engineer</div>
          </div>


          <div className='profile3'>
            <div className="member3">
              <div className="dp"><img src="./image.jpg" alt="photo"  /></div>
            </div>
            <div className="Name">[Developer Name]</div>
            <div className='Post'>Software Engineer</div>
          </div>


          <div className='profile4'>
            <div className="member4">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Developer Name]</div>
            <div className='Post'>Software Engineer</div>
          </div>
        </div>


        <div className="developer2">

          <div className="profile5">
            <div className="member4">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Developer Name]</div>
            <div className='Post'>Software Engineer</div>
          </div>


          <div className="profile6">
            <div className="member6">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Developer Name]</div>
            <div className='Post'>Software Engineer</div>
          </div>

          <div className="profile7">
            <div className="member7">
              <div className="dp"><img src="./image.jpg" alt="photo" /></div>
            </div>
            <div className="Name">[Developer Name]</div>
            <div className='Post'>Software Engineer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developmentteam;
