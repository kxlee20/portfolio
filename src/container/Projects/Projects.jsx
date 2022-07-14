import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss';
import {Link} from 'react-router-dom'
// import {proj_list} from '../../database';
const Projects = () => {
  // const data = proj_list;
  const [projects, setProjects] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

    if (item === 'All') {
        setFilterWork(projects)
      } else {
        setFilterWork(projects.filter((project) => project.tags.includes(item)));
      }
    }, 300);
  };
  return (
    <>
    <h1 className="head-text">PROJECTS</h1>
    <div className='app__work-filter'>
      {['Machine Learning', 'iOS App', 'All'].map((item, index) => (
        <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
          {item}
        </div>
      ))}
    </div>

    <motion.div
       animate={animateCard}
       transition={{ duration: 0.5, delayChildren: 0.5 }}
       className="app__work-portfolio"
     >
      {filterWork.map((project, index) => (
        <div className="app__work-item app__flex" key={index}>
         <div
           className="app__work-img app__flex">
            <img src={urlFor(project.imgUrl)} alt={project.name}/>
            <motion.div
              whileHover={{opacity: [0,1]}}
              transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              className="app__work-hover app__flex">

              {/* <a href={project.projectLink} target="_blank" rel="noreferrer"> */}
              <Link to="/mutation">
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.90] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
              {/* </a>*/}
              </Link> 
            </motion.div> 
          </div>

          <div className="app__work-content app__flex">
              <h2 className="bold-text">{project.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
          </div>
        </div>
      ))}
      {/* ))} */}
     </motion.div>
    </>
  );
};
// export default AppWrap(Projects,'projects');
export default AppWrap(MotionWrap(Projects, 'app__works'),'projects');