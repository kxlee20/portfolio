import React from 'react'
import {motion} from 'framer-motion';
import {images} from '../../constants';
import {AppWrap} from '../../wrapper';
import './Header.scss';
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
        <img src={images.profile} alt="profile_bg" />
      </motion.div>
      <motion.div 
        whileInView={{ x: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"> 
          <div className='app__header-greeting'>
            Hi, I am
          <div className='app__header-name'>
            Katherine
          </div>
          <div className='tag-cmp app__flex'>
            Computer Science, University of Michigan
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');