import React, { Component } from 'react'
import {secondsToMinutes} from '../Helpers/TimeFormat'

const DisplayTimer = ({secondsRemaining}) => {
  return (
    <div id="time-display" >
      <h1>{secondsToMinutes(secondsRemaining)}</h1>
    </div>
  )
}

export default DisplayTimer
