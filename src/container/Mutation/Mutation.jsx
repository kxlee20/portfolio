import React from 'react'
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import {Routes, Route, Link} from 'react-router-dom'
// import './Projects.scss';

const Mutation = () => {
  return (
    
    <div className='app__mutation'>
      <h1 className="head-text">Mutation Prediction Model</h1>
      <div className='app__mutation-portfolio'>
          <div className='app__mutation-item'>
            <div className="section-heading">Background</div>
            <div className='background__content p-content'>
              <p>Recent developments in gene sequencing and personalized medicine 
                provide a remarkable opportunity to revolutionize healthcare. 
                Many <b>single-nucleotide polymorphisms (SNPs)</b> are associated with 
                disease-causing mutations. Because these mutations are often 
                deleterious and are eliminated by purifying selection, the 
                opportunity to determine their relationship to human disease is 
                rare. Previous studies have developed neural networks that can 
                identify pathogenic mutations to an adequate accuracy, but 
                success with solely human variants is still lacking.
              </p>
            </div>
          </div>
          {/* <div className='app__mutation-goal'> */}
          {/* <p>Lorem ipsum</p> */}
          <div className='app__mutation-item'>
          <div className="section-heading">Goal</div>
            <div className='app__mutation-content p-content'>
              Here we aimed to train a <b>deep convoluational neural network</b> with a large data 
              set of clinically annotated human variants from the dbSNP 
              database. The goal was to develop a high-performing classifer to test on 
              de novo mutations of sets of rare disease patients able to identify pathogenic mutations in human disease patients
              with high accuracy. 
            </div>
            {/* <div className='app__mutation-image'>
              <img src={images.pipeline} alt="pipeline" /> 
            </div> */}
          {/* </div> */}
        </div>
      </div>
        {/* <div className='image'>
        <img src={images.pipeline} alt="pipeline" /> */}
        {/* </div> */}
        
        {/*
        <div className='goal'>
          <h2>Goal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Quos aliquid sunt esse sapiente omnis perferendis sed facilis 
            aspernatur cumque ipsum consectetur, expedita, ipsa nobis quod error 
            dolorem itaque sit ut.</p>
        </div>
        <div className='image'>
        <img src={images.pipeline} alt="pipeline" />
        </div> */}
      {/* </div> */}
    </div>
  )
}
// export default Mutation
// export default AppWrap(Mutation,'mutation');
export default AppWrap(MotionWrap(Mutation, 'app__mutation'),'mutation');