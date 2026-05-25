// App.jsx — Dynamic Color Clock
// Uses useState + useEffect to tick every second.
// The background hue rotates continuously for the "color" effect.

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  const [now, setNow] = useState(new Date())
  const [hue, setHue] = useState(0)

  // Tick every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
      setHue(h => (h + 0.4) % 360)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Use date-fns to format the current date and time.
  const formattedDate = format(now, 'EEEE, MMMM do, yyyy')
  const formattedTime = format(now, 'hh:mm:ss a')
  const [hours, minutes, seconds] = format(now, 'hh:mm:ss').split(':')
  const ampm = format(now, 'a')

  // Dynamic gradient that shifts with hue
  const bg = `linear-gradient(135deg,
    hsl(${hue},70%,10%) 0%,
    hsl(${(hue+60)%360},65%,15%) 50%,
    hsl(${(hue+120)%360},70%,10%) 100%)`

  const accent = `hsl(${(hue+180)%360},100%,65%)`

  return (
    <div className="clock-wrapper" style={{ background: bg }}>
      {/* Animated orbs */}
      <div className="orb orb-a" style={{ background: `hsl(${hue},80%,55%)` }} />
      <div className="orb orb-b" style={{ background: `hsl(${(hue+120)%360},80%,55%)` }} />
      <div className="orb orb-c" style={{ background: `hsl(${(hue+240)%360},80%,55%)` }} />

      <div className="clock-card">
        <p className="day-label">{formattedDate}</p>

        <div className="time-row">
          <span className="digits">{hours}</span>
          <span className="colon" style={{ color: accent }}>:</span>
          <span className="digits">{minutes}</span>
          <span className="colon" style={{ color: accent }}>:</span>
          <span className="digits sec" style={{ color: accent, textShadow: `0 0 20px ${accent}` }}>
            {seconds}
          </span>
          <span className="ampm" style={{ color: accent }}>{ampm}</span>
        </div>

        <p className="date-label">{formattedTime}</p>

        <div className="bar" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
        <p className="footer">DYNAMIC COLOR CLOCK</p>
      </div>
    </div>
  )
}

export default App
