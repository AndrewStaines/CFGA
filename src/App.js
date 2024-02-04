import './App.css';
import Home from './components/Home';
import GridItems from './components/Mission';
import { useState, useEffect } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";

function App() {
  const  [loading ,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div className="App">
      {loading?
      <div className='App-logo'>
        <RingLoader
      color={'#123abc'}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      </div>
      :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/ss' element={<GridItems/>}/>
        </Routes>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
