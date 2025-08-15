
import Navbar from './components/NavBar/navbar';

import Intro from './components/Intro/intro';


import Skills from './components/Skills/skills';

import Contact from './components/Contact/contact';
import Links from './components/Links/links';

import Footer  from './components/Footer/footer';

import './styles.css'; 

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Contact></Contact>
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;
