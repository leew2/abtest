import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { GrowthBookProvider } from '@growthbook/growthbook-react';
import growthbook from './gb';
import { IfFeatureEnabled } from '@growthbook/growthbook-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './page/Layout';
import Home from './page/Home';
import NoPage from './page/NoPage';

function App() {
  useEffect(() =>{
    growthbook.init({streaming:true});
  }, []);
  
  
  return (
    <GrowthBookProvider growthbook={growthbook}>
      <div className="App">
        <h1>My App</h1>
        <IfFeatureEnabled feature="show-image">
          <img src={logo} className="App-logo" alt="logo" />
        </IfFeatureEnabled>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  </GrowthBookProvider>


    
  );
}

export default App;
