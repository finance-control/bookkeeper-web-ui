import * as React from 'react';
import { css } from "@emotion/react"

const defaultError: string = 'Something went wrong, please try again'

const errorStyle = css`
  background-color: #ff9e9e;
  color: #da2a2a;
  padding: 8px 16px;
  border-radius: 6px;
`

interface IErrorLabelProps {
  errorTitle?: string;
  className?: string;
}

const ErrorLabel: React.FunctionComponent<IErrorLabelProps> = ({ errorTitle = defaultError, className }) => {
  return (
    <div css={errorStyle} className={className}>
      <h5>{errorTitle}</h5>
    </div>
  )
};

export default ErrorLabel;
