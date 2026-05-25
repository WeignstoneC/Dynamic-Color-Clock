// App.jsx — Dynamic Color Clock
// Uses useState + useEffect to tick every second.
// The background hue rotates continuously for the "color" effect.

import { useState, useEffect } from 'react'
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

  // Time parts
  const pad = n => String(n).padStart(2, '0')
  let h = now.getHours()
  const ampm = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  const hours   = pad(h)
  const minutes = pad(now.getMinutes())
  const seconds = pad(now.getSeconds())

  // Date parts
  const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December']
  const ord = n => {
    const s = ['th','st','nd','rd'], v = n % 100
    return n + (s[(v-20)%10] || s[v] || s[0])
  }
  const dayName  = days[now.getDay()]
  const dateStr  = `${months[now.getMonth()]} ${ord(now.getDate())}, ${now.getFullYear()}`

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
        <p className="day-label">{dayName}</p>

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

        <p className="date-label">{dateStr}</p>

        <div className="bar" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
        <p className="footer">DYNAMIC COLOR CLOCK</p>
      </div>
    </div>
  )
}

export default App
