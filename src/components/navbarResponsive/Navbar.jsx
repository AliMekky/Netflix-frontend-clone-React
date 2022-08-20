

import React from 'react'
import "./navbar.scss"
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowRight';
import {useMediaQuery} from "react-responsive"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);  
  const isTabletOrMobile = useMediaQuery({
    query : '(max-width: 600px)'
  })

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
    // to prevent infinite looping
  }

  return (
    <nav className = {isScrolled ? "navbar navbar-expand-lg fixed-top scrolled" : "navbar navbar-expand-lg fixed-top"}>
      <div className = "container-fluid">
        <div className = "left">
            <a className = "navbar-brand" href = "">
            <img  style = {!isTabletOrMobile ? {height : "1.875rem"} : {width : "50px",height : "50px"}} src = {!isTabletOrMobile ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" : "https://preview.redd.it/gj1t3nckxyx61.png?auto=webp&s=a0925041ccf11f7453ba4b27cfec24afa0f34594"} alt = ""/> 
            {/* <img src = "https://cdn.hashnode.com/res/hashnode/image/upload/v1647410910018/spTELtuIz.jpeg" alt = ""/> */}
            </a>
            <button className = "navbar-toggler" type = "button" data-bs-toggle = "offcanvas" data-bs-target = "#offcanvasNavbar" aria-controls="offcanvasNavbar">
              {/* <span className="navbar-toggler-icon"></span> */}
              <i class="fa-solid fa-bars"></i>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className = "offcanvas-body">
              <ul className = "navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li  className = "nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Homepage</a>
                  </li>
                  <li  className = "nav-item">
                    <a className="nav-link" href="#">Series</a>
                  </li>
                  <li  className = "nav-item">
                    <a className="nav-link" href="#">Movies</a>
                  </li>
                  <li  className = "nav-item">
                    <a className="nav-link" href="#">New and Popular</a>
                  </li>
                  <li  className = "nav-item">
                    <a className="nav-link" href="#">My List</a>
                  </li>
            </ul>
            </div>
            </div>
            
            

        </div>

        <div className = "right">
            <SearchIcon className = "icon"/>
            <span>KID</span>
            <NotificationsIcon className = "icon"/>
            <img src = "https://media-exp1.licdn.com/dms/image/C4D03AQFA-Jt-HrRbkQ/profile-displayphoto-shrink_800_800/0/1647906287069?e=1665619200&v=beta&t=A1j1xFFfOLO1t6KNUmMNUOh7_zZKKS71_YxcqIQuJkw" alt = ""/>
            
            <div className = "profile">
                <KeyboardArrowDownIcon className = "icon"/>
                <div className = "options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>    
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
