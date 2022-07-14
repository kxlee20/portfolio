import React from 'react'
import { About, Header, Projects, Mutation, Home} from './container';
import { NavBar } from './components';
import './App.scss';
import {Routes, Route, Link} from 'react-router-dom'
const App = () => {
  return (
    <div className="app">
      
        <NavBar />
        {/* <Home /> */}
        {/* <Header />
        <Projects /> */}
        {/* <About /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/mutation" element={<Mutation />} />
        </Routes>
        
        {/* <Mutation /> */}
        {/* <Skills /> */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;