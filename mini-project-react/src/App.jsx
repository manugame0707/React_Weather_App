// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Alert from '@mui/material/Alert';
// import InfoBox from "./InfoBox";
// import SearchBox from "./SearchBox";
import WeatherApp from "./WeatherApp";

function App() {
  let handleClick = () => {
    console.log("Button was clicked!!!");
  }

  return (
    <>
      {/* <h1>Material UI</h1>
      <Button variant="contained" onClick={handleClick} size="large">Click me</Button>
      <br /><br />
      <Button variant="contained" onClick={handleClick} disabled >Click me</Button>
      <br /><br />
      <Button variant="contained" onClick={handleClick} color="success" size="large" >Click me</Button>
      <br /><br />
      <Button variant="contained" onClick={handleClick} color="error" size="small">Click me</Button>
      <br /><br />
      <Button variant="contained" onClick={handleClick} color="error" startIcon={<DeleteIcon />} >Delete me</Button>
      <br /><br />
      <Alert severity="error">This is an error Alert.</Alert> */}
      {/* <SearchBox />
      <InfoBox /> */}
      <WeatherApp />

    </>
  )
}

export default App
