import React from 'react'
import * as timerState from '../../TimerState';

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`
}

export default (props) => {
  return (
    <div>
      <div className="row center-block">
        {
          (props.timerState === timerState.COMPLETE)
          && <iframe src='https://www.youtube.com/embed/F1B9Fk_SgI0?autoplay=1' className="center-bloc youtube-responsive-width" height='315'></iframe>
        }
      </div>
      <div className="row">
        <h2 className="text-center">{`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}</h2>
      </div>
    </div>
  )
}
