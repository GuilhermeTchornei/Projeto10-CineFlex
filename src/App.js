import React from 'react';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import styled from 'styled-components';
import Sections from './Components/Sections';
import Seats from './Components/Seats';
import Success from './Components/success';

function App() {
  return (
    <div className="App">
      <AppHeader>
        <h1>CINEFLEX</h1>
      </AppHeader>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/sessoes/:id' element={<Sections />} />
          <Route path='/assentos/:id' element={<Seats />} />
          <Route path='/sucesso' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


const AppHeader = styled.header`
  width: 100%;
  height: 67px;
  background-color: #C3CFD9;

  position: fixed;
  top: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  h1{
    font-weight: 400;
    font-size: 34px;
    text-align: center;
    color: #E8833A;
  }
`