import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//import { themeContext } from './themeContext'; //från föreläsningen
import React, { useState, useContext, useEffect } from "react"; // från föreläsning data

/* Firebase imports for Realtime Database operations */
import { rdb } from "./firebase";
import { ref, push, onValue, remove } from "firebase/database";

import "./cssFiles/resultAchieved.css";

//import Achieved from './components/timeIndicator/achieved';
//import ResultAchieved from './components/feedback/resultAchieved';
import LoggButton from "./components/buttons/loggButton";

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
    <div class="logg-container">
      <LoggButton />
    </div>
  );
}

export default App;
