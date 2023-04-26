import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {getResourceById} from "./FhirServices/FhirServices"
import { Patient } from 'fhir/r4';

function App() {
  const [patient, setPatient] = useState<Patient | undefined>();
  
  const handleClick = async () => {
    const result = await getResourceById('Patient', 1);
    setPatient(result);
    console.log(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={()=>getResourceById("Patient",1)}>Get Resource</button> */}
      </header>
      <button onClick={()=>{handleClick()}}>Get Resource</button>
    </div>
  );
}

export default App;
