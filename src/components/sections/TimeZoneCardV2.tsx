import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'
import 'moment/locale/es'

const Timezone = ({ timezone }: { timezone: string }) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      moment.locale('es')

      const now = moment().tz(timezone)

      setDateTime(now.format('dddd, DD MMMM YYYY [a] h:mm:ss A'))
    }, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">🇦🇷 Buenos Aires, Argentina </p>
    </div>
  )
}

export default Timezone
