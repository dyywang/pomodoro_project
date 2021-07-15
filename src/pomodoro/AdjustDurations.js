import React from "react"

function AdjustDurations ({session, durations, setDurations, formatTime }) {
  function handleChangeDuration(sessionType, direction) {
    const changeDirection = direction === "increase"? 1:-1
    let newDuration = 0
    if (sessionType === "focus"){
      newDuration =  Math.max(5, 
                     Math.min(durations[sessionType] + (changeDirection * 5), 60))
    }
    else {
      newDuration =  Math.max(1, 
                     Math.min(durations[sessionType] + (changeDirection * 1), 15))
    }
    setDurations({...durations, [sessionType]:newDuration})
  }
  return (
  <div className="row">
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration */}
          Focus Duration: {formatTime(durations.focus * 60)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            onClick={()=>handleChangeDuration("focus", "decrease")}
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            disabled={session}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            onClick={()=>handleChangeDuration("focus", "increase")}
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            disabled={session}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* TODO: Update this text to display the current break session duration */}
            Break Duration: {formatTime(durations.break *60)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
            <button
              onClick={()=>handleChangeDuration("break", "decrease")}
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              disabled={session}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
            <button
              onClick={()=>handleChangeDuration("break", "increase")}
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              disabled={session}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default AdjustDurations