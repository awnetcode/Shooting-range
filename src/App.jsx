
import './App.css';

import { useState, useEffect } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';

function App() {

  const [content, setContent] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const setScrollY = () =>{
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', setScrollY);

    return () =>{
      window.removeEventListener('scroll', setScrollY);
    };

  }, []);

  return (
    <>
     <Header isScrolled = { isScrolled }/>
    <Navigation setContent={setContent}/>
    <Main content={content}/>
    </>
  )
}

export default App
