import React, { Component } from 'react'
import {secondsToMinutes} from '../Helpers/TimeFormat'

const DisplaySplit = ({seconds, index, splitClick, highlight}) => {
  return (
    <li className="split" id={highlight} onClick={() => splitClick(index, seconds)}>{secondsToMinutes(seconds)}</li>
  )
}



export default DisplaySplit
