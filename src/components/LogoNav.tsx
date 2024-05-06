import * as React from 'react';
import { css } from "@emotion/react"
import { Flex } from 'antd'
import { SiMoneygram } from "react-icons/si";
import { mainColor } from 'src/styles/theme';

type size = 'medium' | 'large'

const logoStyle = (size: size, isLogoMinified: boolean) => css`
  color: ${mainColor};
  font-size: ${size == 'medium' ? '24px' : '32px'};
  margin-right: ${isLogoMinified ? '0px' : '10px'};
`

const logoTextStyle = (colorStyle: 'dark' | 'light', size: size) => css`
  transition: all .2s ease-out;
  font-size: ${size == 'medium' ? '18px' : '32px'};
  font-weight: ${size == 'medium' ? '600' : '600'};
  white-space: nowrap;
  color: ${colorStyle === 'dark' ? '#3b3b3b' : '#e1e1e1'};
`

interface ILogoNavProps {
  className?: string;
  isLogoMinified?: boolean;
  colorStyle?: 'dark' | 'light';
  size?: size
}

const LogoNav: React.FunctionComponent<ILogoNavProps> = ({ isLogoMinified = false, className, colorStyle = 'light', size = 'medium' }) => {
  return (
    <Flex align='center' justify='center' className={className} wrap='nowrap'>
      <SiMoneygram css={logoStyle(size, isLogoMinified)} />
      {!isLogoMinified && <h6 css={logoTextStyle(colorStyle, size)}>
        Finance Control
      </h6>}
    </Flex>
  )
};

export default LogoNav;
