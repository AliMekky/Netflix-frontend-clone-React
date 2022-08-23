import React from 'react'
import "./featured.scss"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/InfoOutlined';

function Featured(props) {
  return (
    <div className = "featured container">
      {props.type && (
        <div className = "category">
          <span>{props.type === "movie" ? "Movies" : "Series"}</span>
          <select name = "genre" id = "genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      
      <img src = "https://pbs.twimg.com/media/E79UUP_UcAMzIb8.jpg:large"
        alt = ""
      />
      <div className = "info">
        {/* <img src = "https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" */}
          {/* alt = ""
        /> */}
        {/* <span className = "desc">
          Lorem ipsum dolor sit a proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span> */}
        <div className = "buttons">
          <button className = "play btn btn-outline-light btn-lg"><PlayArrowIcon/> Play</button>
          <button className = "more btn btn-secondary btn-lg"><InfoIcon/> Info</button>
        </div>
      </div>


    </div>
  )
}

export default Featured


