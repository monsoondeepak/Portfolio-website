import React, { createContext,useState,useEffect } from "react";
import Navbar from "./components/Nav/Navbar.jsx";
import Navbar2 from "./components/navbar.component.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/services/Services.jsx";
import MyWork from "./components/Mywork/MyWork.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";
import {Routes, Route} from 'react-router-dom';
import UserAuthForm from "./pages/userAuthForm.page.jsx";
import { lookInSession } from "./common/session.jsx";

export const UserContext = createContext({})

const App = () => {
  const [userAuth, setUserAuth] = useState({});
  useEffect(()=>{
      let userInSession = lookInSession("user");
      userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({ access_token: null })
  }, [])
  return (
    <>
      <div>
        <div>


      <Navbar/>
      <UserContext.Provider value ={{userAuth, setUserAuth}}> 
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/service" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/blog" element={<Navbar2/>}></Route>
          <Route path="/signin" element={<UserAuthForm type="sign-in"/>}></Route>
          <Route path="/signup" element={<UserAuthForm type="sign-up"/>}></Route>
        </Routes>
        <Footer/>
      </UserContext.Provider>
        
        </div>
      </div>
    </>
  );
};

export default App;
