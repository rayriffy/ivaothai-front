import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'

import TransparentLinkComponent from '../../core/components/transparentLink'
import Dev from './dev'

const StyledBox= styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const HeaderComponent: React.FC = () => {
  const {GATSBY_ENV = 'production'} = process.env

  const data = useStaticQuery(graphql`
    query AppHeaderQuery {
      logo: file(sourceInstanceName: {eq: "assets"}, relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 90) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }        
  `)

  return (
    <StyledBox>
      {GATSBY_ENV !== 'production' ? <Dev /> : null}
      <Flex>
        <Box width={70} mx={3} p={2}>
          <Img fluid={data.logo.childImageSharp.fluid} />
        </Box>
        <Box mx={`auto`} />
        <Box>
          <Box>
            <Text>Home</Text>
          </Box>
        </Box>
      </Flex>
    </StyledBox>
  )
}

export default HeaderComponent
