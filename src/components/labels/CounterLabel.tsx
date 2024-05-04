import * as React from 'react';
import { css } from "@emotion/react"

const counterStyle = css`
  font-weight: 500;
  color: #7e7e7e;
`

interface ICounterLabelProps {
  count: number;
  className?: string;
}

const CounterLabel: React.FunctionComponent<ICounterLabelProps> = ({ count, className }) => {
  return (
    <div className={className} css={counterStyle}>
      {`Total: ${count}`}
    </div>
  )
};

export default CounterLabel;
