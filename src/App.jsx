
import './App.css';

import { useState } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';

function App() {

  const [content, setContent] = useState('');

  return (
    <>
    <Header />
    <Navigation setContent={setContent}/>
    <Main content={content}/>
    </>
  )
}

export default App
