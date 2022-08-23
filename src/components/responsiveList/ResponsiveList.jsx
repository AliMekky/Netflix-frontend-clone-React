
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  ListItem  from "../listItem/ListItem";
import "./responsiveList.scss";



function ResponsiveList() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <div className = "listContainer">
        <h5 className = "listTitle">Continue to watch</h5>
        <Carousel className = "carousel" responsive={responsive} itemClass = "item" partialVisible = {true} >      
                <ListItem className = "item"/>
                <ListItem className = "item"/>
                <ListItem className = "item"/>
                <ListItem className = "item"/>
                <ListItem className = "item"/>
                <ListItem className = "item"/>
                <ListItem className = "item"/>
                <ListItem className = "item"/>
        </Carousel>
    </div>
  )
}

export default ResponsiveList
