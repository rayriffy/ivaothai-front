import React from 'react'

import styled from '@emotion/styled'
import { Box } from 'rebass'

import Footer from './footer'
import Global from './global'
import Header from './header'
import Helmet from './helmet'

const FullHeightBox = styled(Box)`
  height: 100%;
`

const Component: React.FC = props => {
  const {children} = props

  return (
    <FullHeightBox>
      <Helmet />
      <Global />
      <Header />
      {children}
      <Footer />
    </FullHeightBox>
  )
}

export default Component
