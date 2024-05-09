import * as React from 'react';
import { css } from "@emotion/react"
import { Flex, Typography } from 'antd'
import { SiMoneygram } from "react-icons/si";
import { mainColor } from 'src/styles/theme';

const { Title } = Typography

type size = 'medium' | 'large'

const logoStyle = (size: size, isLogoMinified: boolean) => css`
  color: ${mainColor};
  font-size: ${size == 'medium' ? '20px' : '32px'};
  margin-right: ${isLogoMinified ? '0px' : '8px'};
`

const logoTextStyle = css`
  font-weight: 600;
  white-space: nowrap;
`

interface ILogoNavProps {
  className?: string;
  isLogoMinified?: boolean;
  size?: size
}

const LogoNav: React.FC<ILogoNavProps> = ({
  isLogoMinified = false,
  className, size = 'medium'
}) => {
  return (
    <Flex align='center' justify='center' className={className} wrap='nowrap'>
      <SiMoneygram css={logoStyle(size, isLogoMinified)} />
      {!isLogoMinified && <Title level={size == 'medium' ? 5 : 2} css={logoTextStyle}>
        Finance Control
      </Title>}
    </Flex>
  )
};

export default LogoNav;
