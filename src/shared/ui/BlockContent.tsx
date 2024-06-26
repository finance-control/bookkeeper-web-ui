import * as React from 'react';
import { css } from '@emotion/react'
import { useAppSelector } from 'src/app';
import { mainDarkBg } from 'src/app/styles/theme';

const contentStyle = (isDarkMode: boolean = false) => css`
	padding: 16px;
  border-radius: 8px;
  background-color: ${isDarkMode ? mainDarkBg : 'white'};
  width: 100%;
`

interface IContentProps {
  children: React.ReactNode
  className?: string;
}

export const BlockContent: React.FunctionComponent<IContentProps> = ({ children, className }) => {
  const { isDarkMode } = useAppSelector(state => state.rootSliceReducer)
  return (
    <>
      <div css={contentStyle(isDarkMode)} className={className}>
        {children}
      </div>
    </>
  )
};
