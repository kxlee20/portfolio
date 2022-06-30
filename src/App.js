import React from 'react'
import { About, Header, Projects} from './container';
import { NavBar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className="app">
        <NavBar />
        <Header />
        <About />
        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;