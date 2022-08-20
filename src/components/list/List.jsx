import React from 'react'
import "./list.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ListItem from '../listItem/ListItem';



function List() {
    const [slideNumber, setSlideNumber] = React.useState(0);
    const listRef = React.useRef()

    function handleClick(direction){
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0){
            listRef.current.style.transform = `translateX(${distance + 230}px)`;
            setSlideNumber(slideNumber - 1);
        }
        else if(direction === "right" && slideNumber < 4){
            listRef.current.style.transform = `translateX(${distance - 230}px)`;
            setSlideNumber(slideNumber + 1);
        }
    }

  return (
    <div className = "list">
      <span className = "listTitle">Continue to watch</span>
      <div className = "sliderWrapper">
        {slideNumber > 0 && (<ArrowBackIosIcon className = "sliderArrow left" onClick = {() => handleClick("left")}/>)}
        <div className = "sliderContainer" ref = {listRef}>
            <ListItem index = {0}/>
            <ListItem index = {1}/>
            <ListItem index = {2}/>
            <ListItem index = {3}/>
            <ListItem index = {4}/>
            <ListItem index = {5}/>
            <ListItem index = {6}/>
            <ListItem index = {7}/>
            <ListItem index = {8}/>
            <ListItem index = {9}/>
        </div>
        <ArrowForwardIosIcon className = "sliderArrow right" onClick = {() => handleClick("right")}/>
      </div>
    </div>
  )
}

export default List;
