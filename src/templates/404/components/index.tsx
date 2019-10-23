import React from 'react'
import { Helmet } from 'react-helmet'

import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'

import { Box, Card, Flex, Heading, Text } from 'rebass'
import styled from 'styled-components'

import TransparentLink from '../../../core/components/transparentLink'

import { IData } from '../@types/IData'

const StyledCard = styled(Card)`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
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
    <Flex justifyContent={`center`}>
      <Box width={[20/24, 18/24, 14/24, 12/24]} mb={4}>
        <Helmet title={'Not Found'} />
        <StyledCard>
          <Box>
            <Img fluid={data.banner.childImageSharp.fluid} />
          </Box>
          <Box px={4} py={4}>
            <Text fontSize={54} fontWeight={500}>Not Found</Text>
            <Text fontSize={18} color={`rgba(0, 0, 0, 0.6)`} pt={2}>Whoops! Looks like you're lost in the woods...with Cirno.</Text>
          </Box>
        </StyledCard>
      </Box>
    </Flex>
  )
}

export default NotFoundComponent
