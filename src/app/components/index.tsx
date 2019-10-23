import React from 'react'

import { Box } from 'rebass'

import Footer from './footer'
import Global from './global'
import Header from './header'
import Helmet from './helmet'

const Component: React.FC = props => {
  const {children} = props

  return (
    <Box>
      <Helmet />
      <Global />
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default Component
