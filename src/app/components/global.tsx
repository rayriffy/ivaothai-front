import { css, Global } from '@emotion/core'
import React from 'react'

const GlobalComponent: React.FC = props => {
  return (
    <Global
      styles={css`
        html {
          background-color: rgb(245, 245, 245);
        }

        body, html, #___gatsby, #gatsby-focus-wrapper {
          height: 100%;
        }

        a {
          text-decoration: none;
          color: rgb(83, 106, 144);
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica,Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        }
      `}
    />
  )
}

export default GlobalComponent
