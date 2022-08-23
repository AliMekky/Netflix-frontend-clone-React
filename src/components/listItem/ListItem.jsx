import React from 'react'
import "./listItem.scss"
import PlayIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

function ListItem(props) {
    const [isHovered,setIsHovered] = React.useState(false);
    const videoURL = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    //"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  return (
    <div className = "listItem"
    style = {{left : isHovered && (props.index*225-50+(props.index*2.5) )}}
     onMouseEnter={() => {setIsHovered(true)}} onMouseLeave = {() => {setIsHovered(false)}}>
      <img src= "https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUyZW6QmG0ZDuX2SLfl3PT7xuXjliTPGjeAb4LEwNt-Y-ZfYE6Inro4qg8Obvjenhp05InYvYBKOU8Wd57UMMdJupwp5m_1gldQx6DEI3fHVqiKdKbgcGCFViBsJtoq2fQTn0Q.jpg?r=b25" alt = ""/>
      {isHovered && (<div>
        <video src = {videoURL} autoPlay = {true} loop/>
        <div className = "itemInfo">
          <div className = "icons">
            <PlayIcon className = "listIcon"/>
            <AddIcon className = "listIcon"/>
            <ThumbUpOutlinedIcon className = "listIcon"/>
            <ThumbDownOutlinedIcon className = "listIcon"/>
          </div>
          <div className = "itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className = "limit">+16</span>
            <span>2019</span>
          </div>
          <div className = "desc">
            Lorem ipsum dolor sit mollit anim id est laborum.
          </div>
          <span className = "genre">Action</span>
        </div>  

      </div>)}
      
    </div>

  )
}

export default ListItem;