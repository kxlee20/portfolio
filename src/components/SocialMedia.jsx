import React from 'react';
import { BsEnvelope, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="mailto:kxlee@umich.edu" target="_blank"> 
        <BsEnvelope/>
       </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/katherinexlee/" target="_blank"> 
        <BsLinkedin/>
      </a>
    </div>
  </div>
);

export default SocialMedia;