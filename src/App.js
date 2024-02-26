import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Navbar />
            <Routes>
            <Route path='/home' element={<News key='general' pageSize={15} country='in' category='general' />}></Route>
              <Route path='/business' element={<News key='business' pageSize={15} country='in' category='business' />}></Route>
              <Route path='/entertainment' element={<News key='entertainment' pageSize={15} country='in' category='entertainment' />}></Route>
              <Route path='/health' element={<News key='health' pageSize={15} country='in' category='health' />}></Route>
              <Route path='/science' element={<News key='science' pageSize={15} country='in' category='science' />}></Route>
              <Route path='/sports' element={<News key='sports' pageSize={15} country='in' category='sports' />}></Route>
              <Route path='/technology' element={<News key='technology' pageSize={15} country='in' category='technology' />}></Route>
            </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
