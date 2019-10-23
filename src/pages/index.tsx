import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Box, Card, Flex, Text } from 'rebass'
import styled from 'styled-components'

import App from '../app/components'

const Wrapper = styled(Box)`
  height: 100%;
`

const GatsbyImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 0px;
`

const FeaturedCard = styled(Card)`
  position: relative;
  border-radius: 0px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.40);
  height: 100%;
`

const Content = styled(Box)`
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 0;
  right: 0;
`

const Page: React.FC = props => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      banner: file(sourceInstanceName: {eq: "assets"}, relativePath: {eq: "HSTXF.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 90) {
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
      <Wrapper>
        <FeaturedCard color='white' bg='rgba(0,0,0,0.3)'>
          <GatsbyImage fluid={data.banner.childImageSharp.fluid} />
          <Content px={[3, 3, 4, 4]} pb={[3, 3, 4, 4]}>
            <Flex justifyContent={`center`}>
              <Text fontSize={54} fontWeight={700}>IVAO Thailand Divison</Text>
            </Flex>
            <Flex justifyContent={`center`}>
            <Text fontSize={27}>Operated under IVAO headquarters</Text>
            </Flex>
          </Content>
        </FeaturedCard>
      </Wrapper>
      <Box py={4}>
        <Flex justifyContent={`center`}>
          <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}>
            OK
          </Box>
        </Flex>
      </Box>
    </App>
  )
}

export default Page
