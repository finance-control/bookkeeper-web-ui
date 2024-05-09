import { useEffect, useState } from 'react';
import { useGetUserQuery } from 'src/services/user/userApi'
import { css } from '@emotion/react';
import { Typography } from 'antd';
import SpinLoader from 'src/components/loaders/SpinLoader';

const { Title } = Typography

interface IGreetingWidgetProps {
}

const GreetingWidget: React.FunctionComponent<IGreetingWidgetProps> = (props) => {
  const { data, isLoading, isError } = useGetUserQuery({})
  const [timePeriod, setTimePeriod] = useState('')

  useEffect(() => {
    const date = new Date()
    const hours = date.getHours()
    if (hours >= 6 && hours <= 10) {
      setTimePeriod('morning')
    } else if (hours > 10 && hours <= 17) {
      setTimePeriod('day')
    } else if (hours > 17 && hours <= 23) {
      setTimePeriod('evening')
    } else {
      setTimePeriod('night')
    }
  }, [])

  return (
    <>
      {isLoading ?
        <SpinLoader />
        :
        <Title css={css`
							font-size: 12px !important;
							font-weight: 500;
							margin-bottom: 6px !important;
						`}>{`Good ${timePeriod}, ${data?.name}`}</Title>}
    </>
  )
};

export default GreetingWidget;
