import React from 'react'
import "./button.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ForwardButton() {
  return (
    <ArrowBackIosIcon className = "sliderArrow left" />
  )
}

function BackButton() {
  return (
    <ArrowForwardIosIcon className = "sliderArrow right" />
  )
}

export {BackButton, ForwardButton};
