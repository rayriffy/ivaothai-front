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
  height: 100%;
`

const Content = styled(Box)`
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 0;
  right: 0;
`

const RoundImage = styled(Img)`
  border-radius: 4px;
  overflow: hidden;
`

const StyledCard = styled(Card)`
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
      default: file(sourceInstanceName: {eq: "assets"}, relativePath: {eq: "banner.jpg"}) {
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
            <Text fontSize={22}>Operated under IVAO headquarters</Text>
            </Flex>
          </Content>
        </FeaturedCard>
      </Wrapper>
      <Box py={4}>
        <Flex justifyContent={`center`}>
          <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}>
            <Box>
              <Text fontSize={32} fontWeight={700}>Interviews</Text>
            </Box>
            <Box>
              <Flex flexWrap={`wrap`} alignItems={`center`}>
                <Box width={[1 , 1, 3 / 4]} pt={3}>
                  <Flex flexWrap={`wrap`} justifyContent={`center`} alignItems={`center`}>
                    <Box width={[1, 1, 1 / 2]} p={2}>
                      <RoundImage fluid={data.default.childImageSharp.fluid} />
                    </Box>
                    <Box width={[1, 1, 1 / 2]} p={2}>
                      <Text fontSize={12}>PRIVATE PILOTS</Text>
                      <Text fontSize={24} fontWeight={500} pb={1}> Phumrapee Limpianchop</Text>
                      <Text fontSize={18} color={`#616161`} pt={1}>YEET</Text>
                    </Box>
                  </Flex>
                </Box>
                <Box width={[1, 1, 1 / 4]} pt={3}>
                  <Flex flexWrap={`wrap`} justifyContent={`center`} alignItems={`center`}>
                    <Box width={[1, 1 / 2]} p={2}>
                      <Text fontSize={10}>ADC</Text>
                      <Text fontSize={22} fontWeight={500} pb={1}>YEET</Text>
                      <Text fontSize={16} color={`#616161`} pt={1}>YEET</Text>
                    </Box>
                    <Box width={[1, 1 / 2]} p={2}>
                      <Text fontSize={10}>SPP</Text>
                      <Text fontSize={22} fontWeight={500} pb={1}>YEET</Text>
                      <Text fontSize={16} color={`#616161`} pt={1}>YEET</Text>
                    </Box>
                    <Box width={[1, 1 / 2]} p={2}>
                      <Text fontSize={10}>APC</Text>
                      <Text fontSize={22} fontWeight={500} pb={1}>YEET</Text>
                      <Text fontSize={16} color={`#616161`} pt={1}>YEET</Text>
                    </Box>
                    <Box width={[1, 1 / 2]} p={2}>
                      <Text fontSize={10}>ATP</Text>
                      <Text fontSize={22} fontWeight={500} pb={1}>YEET</Text>
                      <Text fontSize={16} color={`#616161`} pt={1}>YEET</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box py={4}>
        <Flex justifyContent={`center`}>
          <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}>
            <Box>
              <Text fontSize={32} fontWeight={700}>Knowledges</Text>
            </Box>
            <Box>
              <Flex flexWrap={`wrap`} alignItems={`center`} pt={1}>
                <Box width={[1, 1 / 2, 1 / 3]} p={3}>
                  <StyledCard>
                    <Box>
                      <Img fluid={data.default.childImageSharp.fluid} />
                    </Box>
                    <Box p={3}>
                      <Text fontSize={12}>PILOT</Text>
                      <Text fontSize={24} fontWeight={500} pb={1}>How to fly VFR</Text>
                      <Text fontSize={18} color={`#616161`} pt={1}>YEET</Text>
                    </Box>
                  </StyledCard>
                </Box>
                <Box width={[1, 1 / 2, 1 / 3]} p={3}>
                  <StyledCard>
                    <Box>
                      <Img fluid={data.default.childImageSharp.fluid} />
                    </Box>
                    <Box p={3}>
                      <Text fontSize={12}>PILOT</Text>
                      <Text fontSize={24} fontWeight={500} pb={1}>How to fly VFR</Text>
                      <Text fontSize={18} color={`#616161`} pt={1}>YEET</Text>
                    </Box>
                  </StyledCard>
                </Box>
                <Box width={[1, 1 / 2, 1 / 3]} p={3}>
                  <StyledCard>
                    <Box>
                      <Img fluid={data.default.childImageSharp.fluid} />
                    </Box>
                    <Box p={3}>
                      <Text fontSize={12}>PILOT</Text>
                      <Text fontSize={24} fontWeight={500} pb={1}>How to fly VFR</Text>
                      <Text fontSize={18} color={`#616161`} pt={1}>YEET</Text>
                    </Box>
                  </StyledCard>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box py={4}>
        <Flex justifyContent={`center`}>
          <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}>
            <Box>
              <Text fontSize={32} fontWeight={700}>Resources</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </App>
  )
}

export default Page
