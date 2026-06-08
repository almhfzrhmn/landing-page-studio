// import { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import TestScreen from './components/TestScreen';

function App() {
  return (
    <div className='min-h-screen text-white bg-secondary-color bg-black'>
      <Navbar/>
      <Hero/>
      {/* <TestScreen/> */}
    </div>
  )
}

export default App;