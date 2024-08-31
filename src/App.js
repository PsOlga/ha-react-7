import React, {useState} from 'react';
import { LangContext } from './context/langContext';
import './App.css';
import Value from './components/value';
import ButtonLanguage from './components/ButtonLanguage';
import Navbar from './components/navbar';

function App() {

  const [language, setLanguage] = useState('eng');

  return(
      <LangContext.Provider value={{language, setLanguage}}>
           <Navbar>
           <ButtonLanguage />
           </Navbar>
          <Value />
        
      </LangContext.Provider>
  )
};
export default App;
