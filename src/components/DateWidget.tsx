import * as React from 'react';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import { css } from "@emotion/react"
import SpinLoader from './loaders/SpinLoader';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

interface IDateWidgetProps {
}

const DateWidget: React.FunctionComponent<IDateWidgetProps> = (props) => {

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
      const d = new Date();
      setDate({
        dayMonth: d.getDate().toString(),
        month: months[d.getMonth()],
        hours: d.getHours() < 10 ? `0${d.getHours()}` : d.getHours().toString(),
        minutes: d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes().toString()
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
          <h6 css={css`margin-right: 2px; font-size: 16px;`}>{date.dayMonth}</h6>
          <h6 css={css`margin-right:4px; font-size: 16px;`}>{date.month}</h6>
          <h6 css={css`font-size: 16px;`}>{`${date.hours}:${date.minutes}`}</h6>
        </Flex>}
    </>
  )
};

export default DateWidget;
