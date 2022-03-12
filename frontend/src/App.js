import './App.css';
import {useState, useContext, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Cryptovisor from './Cryptovisor.js';
// import {lightTheme, darkTheme} from './Themes/Theme.js'

// const themes = {
//   dark: {
//     background: 'black',
//     buttonColor: 'linear-gradient(142.96deg, rgba(5, 5, 5, 0.6) 15.96%, rgba(19, 19, 19, 0.8) 83.29%)'
// },

// light: {
//     background: 'F5F5F5',
//     buttonColor: 'linear-gradient(142.96deg, rgba(229, 229,229, 0.6) 83.29%, rgba(214, 214, 214, 0.8) 83.29%)'
// }
// }

const LightTheme = {
  pageBackground: "white"
  // titleColor: "#dc658b",
  // tagLineColor: "black"
}

const DarkTheme = {
pageBackground: "black"
// titleColor: "lightpink",
// tagLineColor: "lavender"
}

// const themes = {
//   light: LightTheme,
//   dark: DarkTheme,
// }

function App() {
   const [theme, setTheme] = useState('light');

  return (
    <Cryptovisor />
  // <ThemeProvider theme={themes[theme]}>
  //   <Cryptovisor theme={theme} setTheme={setTheme}/>
  // </ThemeProvider>
//  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
  // <div>Hello World</div>
  // </ThemeProvider>
  );
}

export default App;
