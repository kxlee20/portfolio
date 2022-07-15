import React from 'react'
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import {Link} from 'react-router-dom'

const Mnp = () => {
  return (
    <div className='app__mnp'>
    <h1 className="head-text">Neuroprosthetics iOS App</h1>
    <div className='app__mnp-portfolio'>
        <div className='app__mnp-item'>
          <div className="section-heading">Background</div>
          <div className='background__content p-content'>
            Michigan Neuroprosthetics (MNP) is a club that <b>3D-prints 
            open-source prosthetic arms for children</b>. The arm is controlled 
            through electrodes attached to the child's bicep. 
          </div>
        </div>
        {/* <div className='app__mutation-goal'> */}
        {/* <p>Lorem ipsum</p> */}
        <div className='app__mnp-item'>
        <div className="section-heading">Goal</div>
          <div className='app__mnp-content p-content'>
            Our objective is to make a easily navigable iOS application that 
            will connect to our <b>prosthetic arms via Bluetooth</b>. The app will then 
            allow quick and easy access to <b>prosthetic functionality and 
            status monitoring</b>. For example, changing modes, which controls how 
            the hand will open and close, could then be done through the app 
            rather than a potentiometer on the arm. The app would also allows 
            the user to <b>check battery levels, give voice commands</b>, and <b>check for 
            software updates</b>. 
          </div>
          <div className="section-heading">Mockup</div>
          <div className='app__mnp-image'>
            <img src={images.mnp_mockup} alt="mnp" /> 
          </div>
          {/* <div className="section-heading">Implementation</div>
          <div className='app__mutation-gif'>
            <img src={images.conv} alt="conv" /> 
          </div> */}
          
        {/* </div> */}
      </div>
    </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Mnp, 'app__mnp'),'mnp');