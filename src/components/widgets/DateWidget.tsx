import * as React from 'react';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import { css } from "@emotion/react"
import SpinLoader from 'src/components/loaders/SpinLoader';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

interface IDateWidgetProps {
}

const DateWidget: React.FC<IDateWidgetProps> = (props) => {

  const [date, setDate] = useState({
    dayMonth: '',
    month: '',
    hours: '',
    minutes: ''
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const intervalId = setInterval(() => {
      const date = new Date();
      setDate({
        dayMonth: date.getDate().toString(),
        month: months[date.getMonth()],
        hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours().toString(),
        minutes: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes().toString()
      })
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (date.dayMonth && date.month && date.hours && date.minutes) {
      setLoading(false)
    }
  }, [date])

  return (
    <>
      {loading ?
        <SpinLoader />
        : <Flex>
          <h6 css={css`
            font-size: 16px;
            margin-right: 2px;
          `}>
            {date.dayMonth}
          </h6>
          <h6 css={css`
            font-size: 16px;
            
            margin-right: 4px;
            `}>
            {date.month}
          </h6>
          <h6 css={css`
            font-size: 12px;
            font-weight: 500; 
            `}>
            {`${date.hours}:${date.minutes}`}
          </h6>

        </Flex>}
    </>
  )
};

export default DateWidget;
