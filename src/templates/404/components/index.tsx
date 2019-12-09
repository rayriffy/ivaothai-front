import React from 'react'
import { Helmet } from 'react-helmet'

import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'

import styled from '@emotion/styled'
import { Box, Card, Flex, Text } from 'rebass'

import App from '../../../app/components'

import { IData } from '../@types/IData'

const StyledCard = styled(Card)`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`

const GatsbyImage = styled(Img)`
  border-radius: 0px;

  @media screen and (min-width: 40em)  {
    border-radius: 0 0 8px 8px;
  }
`

const NotFoundComponent: React.FC = () => {
  const data: IData = useStaticQuery(graphql`
    query NotFoundComponentQuery {
      banner: file(relativePath: {eq: "404.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
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
    <App>
      <Flex justifyContent={`center`}>
        <Box width={[1, 22/24 , 20/24, 16/24]}>
          <GatsbyImage fluid={data.banner.childImageSharp.fluid} />
        </Box>
      </Flex>
      <Flex justifyContent={`center`} pt={4}>
        <Box width={[20/24, 18/24, 14/24, 12/24]} mb={4}>
          <Helmet title={'Not Found'} />
          <StyledCard>
            <Box px={4} py={4}>
              <Text fontSize={46} fontWeight={500}>Not Found</Text>
              <Text fontSize={18} color={`rgba(0, 0, 0, 0.6)`} pt={2}>Whoops! Looks like you're lost in the woods...with Cirno.</Text>
            </Box>
          </StyledCard>
        </Box>
      </Flex>
    </App>
  )
}

export default NotFoundComponent
