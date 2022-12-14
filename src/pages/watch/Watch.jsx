import React from 'react'
import "./watch.scss"
import ReactPlayer from "react-player"
import UndoOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

function Watch() {
  return (
    <div className = "watch">
      <div className = "back">
        <UndoOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay = {true}
        controls
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
      />

      {/* <iframe className = "video" src = "https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4"></iframe> */}
      {/* <ReactPlayer url = "https://youtu.be/-EW3S3ssm08" className = "video" contols/>
      
      */}</div> 
  )
}

export default Watch
//https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4

//https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"