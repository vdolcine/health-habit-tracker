import { useState } from 'react'

const DateHeader = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  console.log(currentDate)

  const onDateShift = (direction: 1 | -1) => {
    const shiftedDate = currentDate.setDate(currentDate.getDate() + direction)
    setCurrentDate(new Date(shiftedDate))
  }

  const onJumpToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <>
      <div>Good day, Sophia</div>
      <div>
        <button onClick={() => onDateShift(-1)}>‹</button>
        <div>{currentDate.toDateString()}</div>
        <button onClick={() => onDateShift(+1)}>›</button>
      </div>
      <div>
        <button onClick={onJumpToToday}>Jump to today</button>
      </div>
      <p>potential event that is happening today</p>
    </>
  )
}

export default DateHeader