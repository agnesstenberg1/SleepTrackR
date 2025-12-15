import { useState } from "react";
import '../../cssFiles/loggButton.css';

function LoggButton({text}) {


  return (
    <div className='logg-button'>
      <div className="cirkle">
      <h2 className="logg-button-text">{text}</h2>
      </div>
      </div>
    
  );
}

export default LoggButton;
