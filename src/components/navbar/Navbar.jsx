import React from 'react'
import "./navbar.scss"
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);  

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
    // to prevent infinite looping
  }

  return (
    <div className = {isScrolled ? "navbar scrolled" : "navbar"}>
      <div className = "container">
        <div className = "left">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt = ""/> 
            {/* <img src = "https://cdn.hashnode.com/res/hashnode/image/upload/v1647410910018/spTELtuIz.jpeg" alt = ""/> */}
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
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
    </div>
  )
}

export default Navbar
