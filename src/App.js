import React, {useContext} from 'react'
import logo from './logo.svg';
import './App.css';
import Form from './Pages/Form'
import MainContextProvider from './Context/HomeContext'
import Home from './Pages/Home'
import Darkmode from './components/Darkmode'

function App() {
  console.log(<Home />)
  return (
    <MainContextProvider>
      <div className="App">
        {
          true
          ?
          <>
            
          <Home />
          </>
          :
        <Form />
        }
    </div>
    </MainContextProvider>
    
  );
}

export default App;
