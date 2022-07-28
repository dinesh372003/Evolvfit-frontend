import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Pages/Home";
import Workout from './Pages/Workout';
import Nutrition from './Pages/Nutrition';

const App = () => {
  return(
    <Router>
        <Routes>
            <Route exact path="/" element={ <Home /> } /> 
            <Route exact path={`/:id/workout`} element={ <Workout /> } /> 
            <Route exact path={`/:id/nutrition`} element={ <Nutrition /> } /> 
        </Routes>
    </Router>
  );
};

export default App;
