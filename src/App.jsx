import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import { themeContext } from './themeContext'; //från föreläsningen
import React, { useState, useEffect } from "react"; // från föreläsning data

/* Firebase imports for Realtime Database operations */
import { rdb } from "./firebase";
import { ref, push, onValue, remove } from "firebase/database";


import { Routes, Route } from 'react-router-dom';




//import Achieved from './components/timeIndicator/achieved';
import ResultAchieved from './components/feedback/resultAchieved';
//import LoggButton from "./components/buttons/loggButton";
import ResultNotAchieved from './components/feedback/resultNotAchieved';
import TimeIndicatorCalendarNotAchieved from './components/timeIndicator/timeIndicatorCalendarNotAchieved';
import TimeIndicatorSmallerNotAchieved from './components/timeIndicator/timeIndicatorSmallerNotAchieved';
import AchievedMascot from "./components/feedback/achievedMascot";
import NotAchievedMascot from "./components/feedback/notAchievedMascot";
import TimeIndicatorAchieved from "./components/timeIndicator/timeIndicatorAchieved";
import TimeIndicatorNotAchieved from "./components/timeIndicator/timeIndicatorNotAchieved";
import LoggButtonTime from "./components/timeIndicator/loggButtonTime";
import LoggButton from "./components/buttons/loggButton";
import Rewards from "./components/ikons/rewards";
import Trash from "./components/ikons/trash";
import Logo from "./components/logo/logo";
import CloseButtonLight from "./components/buttons/closeButtonLight";
import SmallButton from "./components/buttons/smallButton";
import TiredMascot from "./components/mascot/tiredMascot";
import BottomMenu from "./components/menu/bottomMenu";
import Reminder from "./components/reminder/reminder";
import HappyMascot from "./components/mascot/happyMascot";
import SleepyMascot from "./components/mascot/tiredMascot";
import SleepTextIkon from "./components/information/sleepTextIkon";
import Form1 from "./components/forms/form1";

import RewardsScroll from "./components/rewards/rewardsScroll";
import TemplateView from "./components/templates/templateView";
import LoggView from "./viewes/loggView";
import Diagram from "./components/weeklySummaries/diagram";
import WeeklySummaryView from "./viewes/weeklySummaryView";
import RewardsView from "./viewes/rewardsView";
import SettingsView from "./viewes/settingsView";

function App() {
  const [logs, setLogs] = useState([]);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [date, setDate] = useState("");


  // --- Real-time listener ---
  useEffect(() => {
    // Create reference to the 'readingLogs' path in database
    const logsRef = ref(rdb, "readingLogs");

    // Subscribe to real-time updates
    const unsub = onValue(
      logsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          // Convert Firebase data to array and filter by userId
          const data = snapshot.val();
          const items = Object.keys(data)
            .map((key) => ({
              id: key, // Firebase auto-generated ID
              ...data[key], // Spread operator: merge object properties
            }))
            .filter((item) => item.userId === 10) // Only show current user's logs
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort newest first

          // Update state with processed logs
          setLogs(items);
        } else {
          // No logs in database yet
          setLogs([]);
        }
      },
      (err) => {
        // Error handler: log any database errors to console
        console.error("Realtime DB error", err);
      }
    );

    // Cleanup function - runs when component unmounts
    return () => unsub();
  }, []);

  // --- Add log ---
  const addLog = async () => {
    const newLog = {
      userId: 10, // Associate log with user
      username: "testUser", // Store username for display
      hours: 1, // Reading hours
      minutes: 30, // Reading minutes
      date: "2025-10-10", // Selected date
      createdAt: new Date().toISOString(), // Timestamp when log was created
    };

    try {
      // Push new log to database and get reference with generated ID
      const newRef = await push(ref(rdb, "readingLogs"), newLog);
      console.log("Pushed RTDB key:", newRef.key);

      // Reset form to default values for next entry
      setHours(0);
      setMinutes(0);
    } catch (err) {
      console.error("Error pushing log to RTDB", err);
    }
  };

  // --- Delete log ---
  const deleteLog = async (id) => {
    try {
      // Remove the log at the specified database path
      await remove(ref(rdb, `readingLogs/${id}`));
      // Success - UI updates automatically via onValue listener
    } catch (err) {
      console.error("Error deleting log", err);
    }
  };


  
  return (
    <Routes>
      <Route path="/loggview" element={<LoggView/>} />
      

      <Route
        path="/WeeklySummaryView"
        element={<WeeklySummaryView logs={logs} />}
      />

            <Route path="/RewardsView" element={<RewardsView />} />

     
      <Route path="/SettingsView" element={<SettingsView />} />
    </Routes>
  );
}
export default App;
