import './Cryptovisor.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
// dont need it ? ? ^^ 
// Components
import Navbar from './Components/Navbar';
import Backdrop from './Components/Backdrop';
import SideDrawer from './Components/SideDrawer';
import Footer from './Components/Footer';
import CryptoPanel from './Components/CryptoPanel'

// Pages
import HomePage from './Pages/HomePage';
import EducationPage from './Pages/EducationPage';
import CourseContentPage from './Pages/Education/CourseContentPage';
import CoursePage from './Pages/Education/CoursePage';
import AnalysisPage from './Pages/AnalysisPage'
import ArticlePage from './Pages/ArticlePage'
import CoinAnalysisPage from './Pages/Analysis/CoinAnalysisPage';

// Dark / Light Icons
import {CgSun} from "react-icons/cg"
import {HiMoon} from "react-icons/hi"


const PageNotFound = () => {
    <div> 404!</div>
  }

// const App = styled.div` 
//     text-align: center;
//     font-family: Noto Sans Tamil UI;
//     background-color: black;
//     transition: all .5s ease;
//   `;

  // styled div element to pass background color based on current theme setting 
  // background-color: ${props => props.theme.pageBackground};
//   const Toggle = styled.button `
//     cursor: pointer; 
//     height: 50px;
//     width: 50px;
//     border-radius: 50%;
//     border: none;
//     color: ${props => props.theme.pageBackground};
//     &:focus {
//         outline: none; 
//     }
//     transition: all .5s ease;
// `;

// Example toggle button to experiment theme toggle 
// <Toggle onClick={changeTheme}>
// {icon}
// </Toggle>


  //   function changeTheme(){
  //     if (props.theme === "light") {
  //         props.setTheme("dark")
  //     } else {
  //         props.setTheme("light")
  //     }
  // };
  
  //   const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />
function Cryptovisor() {

      const [sideToggle, setSideToggle] = useState(false);
  //   const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />

  //      function changeTheme(){
  //     if (props.theme === "light") {
  //         props.setTheme("dark")
  //     } else {
  //         props.setTheme("light")
  //     }
  // };
  return (

    <Router>
      
        <div className="App">
          <div className="App-wrapper">
          <header>
            <Navbar click={() => setSideToggle(true)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
          </header>
            <div>
              <CryptoPanel />
            </div>
            <main>
              {/* <button onClick={changeTheme}>
                {icon}
              </button>
              <p>The switch is {props.theme === "light" ? "on" : "off"}.</p> */}
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/Education">
                  <EducationPage />
                </Route>
                <Route exact path="/Education/:coursecontent">
                  <CourseContentPage />
                </Route>
                <Route exact path="/Education/:coursecontent/:course">
                  <CoursePage />
                </Route>
                <Route exact path="/Analysis">
                  <AnalysisPage />
                </Route>
                <Route exact path="/Articles/:Article">
                  <ArticlePage />
                </Route>
                <Route exact path="/Analysis/:Coin">
                  <CoinAnalysisPage />
                </Route>
                <Route component={PageNotFound} />
              </Switch>
            </main>
            <div>
              <Footer />
            </div>
          </div>
        </div>
    
    </Router>
  );
}
 
export default Cryptovisor


// This file used to have <div className="App"> instead of <App> styled component
