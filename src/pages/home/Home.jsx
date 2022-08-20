import React from 'react';
import "./home.scss";
//import Navbar from "../../components/navbar/Navbar.jsx"
import Featured from "../../components/featured/Featured.jsx";
import List from "../../components/list/List.jsx";
import Navbar from '../../components/navbarResponsive/Navbar';
import ResponsiveList from '../../components/responsiveList/ResponsiveList';


const Home = () => {
  return (
    <div className = "home">
      <Navbar/>
      <Featured/>  
      <ResponsiveList/>
      <ResponsiveList/>
      <ResponsiveList/>
      <ResponsiveList/>
    </div>
  )
}

export default Home


// type = "movie"
