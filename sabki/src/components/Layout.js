import React from "react";
import Navigation from "./Navbar.js";
import Footer from "./Footer.js";

import "./Layout.css";

function Layout (props) {

  return (
    <div className="fullscreen-div" style={{height: "100%", display: "flex", flexDirection: "column"}}>
  
      <Navigation/>
      <div id={props.background !== "background-9.svg" ? "home-id" : "home2"} style={{paddingBottom: "2rem"}}>
        <div className="container">{props.children}</div>
      </div>
      
  
      <Footer />
    </div>
  );
} 


export default Layout;
