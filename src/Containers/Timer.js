import React, { Component } from 'react'
import DisplayTimer from '../Components/DisplayTimer'
import ControlTimer from '../Components/ControlTimer'
import DisplaySplit from '../Components/DisplaySplit'

class Timer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        secondsRemaining: 120,
        started: false,
        splits: [],
        highlightIndex: null
      }
    }

   decrementTimer = () => {
     this.setState(prevState => ({
       secondsRemaining: prevState.secondsRemaining - 1
     }))
     if (this.state.secondsRemaining === 0) clearInterval(this.timer)
   }

   startTimer = () => {
     this.timer = setInterval(() => this.decrementTimer(), 1000)
     this.setState({started: true})
   }

   addSplit = () => {
     const secondsRemaining = this.state.secondsRemaining
     this.setState({
       splits: [...this.state.splits, secondsRemaining]
     })
   }

   splitClick = (index, seconds) => {
     const newSplits = this.state.splits.slice(0, index + 1)
     this.setState({
       splits: newSplits,
       secondsRemaining: seconds,
       highlightIndex: index
     })
   }

   render () {
     const {secondsRemaining, started, splits, highlightIndex} = this.state
     const splitsChildren = splits.map((s, i) => <DisplaySplit seconds={s} index={i} splitClick={this.splitClick} highlight={highlightIndex === i ? 'highlight' : null}/>)
     return (
      <div id="timer">
        <div id="timer-header">
          <DisplayTimer secondsRemaining={secondsRemaining} />
          <ControlTimer startTimer={this.startTimer} addSplit={this.addSplit} started={started} />
        </div>
        <ul id="splits-list">
          {splitsChildren}
        </ul>
      </div>
      )
    }
}


export default Timer
