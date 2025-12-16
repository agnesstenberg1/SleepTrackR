import React from 'react';
//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import './App.css'
//import ResultAchieved from './components/feedback/resultAchieved';

//import LoggButton from './components/buttons/loggButton'





import LoggView from './viewes/loggViewAchieved';
import RewardsView from './viewes/rewardsView';
import SettingsView from './viewes/settingsView';

import WeeklySummaryView from './viewes/weeklySummaryView';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
 </BrowserRouter>
  </React.StrictMode>
);
