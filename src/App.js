import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import axios from 'axios'

import './App.css'
import Banner from './components/Banner/Banner'
import Rowpost from './components/RowPost/Rowpost'

function App() {
  return(
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost/>
    </div>
  )
}

export default App