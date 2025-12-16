import { useState } from "react";
import '../../cssFiles/loggButton.css';

function LoggButton({text, onClick}) {


  return (
    <div className='logg-button' onClick={onClick}>
      <div className="cirkle">
      <h2 className="logg-button-text">{text}</h2>
      </div>
      </div>
    
  );
}

export default LoggButton;
