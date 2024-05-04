import * as React from 'react';
import { css } from "@emotion/react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Flex } from 'antd';

const successStyle = css`
  /* background-color: #f0f0f0; */
  color: #08b72e;
  padding: 8px 16px;
  border-radius: 6px;
  /* border: 1px solid #e7e7e7; */
`

const iconStyle = css`
  font-size: 50px;
  color: #38d03a;
  margin-right: 6px;
`

interface ISuccessLabelProps {
  successTitle: string;
  className?: string;
}

const SuccessLabel: React.FunctionComponent<ISuccessLabelProps> = ({ className, successTitle }) => {
  return (
    <>
      <Flex align="center" css={successStyle} className={className}>
        <IoIosCheckmarkCircleOutline css={iconStyle} />
        <h5>{successTitle}</h5>
      </Flex>
    </>
  )
};

export default SuccessLabel;
