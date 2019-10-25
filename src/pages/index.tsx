import React from 'react'

import { FaArrowRight } from 'react-icons/fa'

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

const StyledFlex = styled(Flex)`
  justify-content: flex-start;

  @media screen and (min-width: 40em) {
    justify-content: flex-end;
  }
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
              <Flex flexWrap={`wrap`} alignItems={`center`}>
                <Box width={[1, 1 / 2]}>
                  <Text fontSize={32} fontWeight={700}>Interviews</Text>
                </Box>
                <Box width={[1, 1 / 2]}>
                  <StyledFlex>
                    <Text fontSize={20}>Older interviews</Text>
                    <Flex alignItems={`center`} pl={1}>
                      <FaArrowRight size={`20px`} />
                    </Flex>
                  </StyledFlex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex flexWrap={`wrap`} alignItems={`center`}>
                <Box width={[1 , 1, 1 / 2]} pt={3} px={2}>
                  <Box p={2}>
                    <RoundImage fluid={data.default.childImageSharp.fluid} />
                  </Box>
                  <Box p={2}>
                    <Text fontSize={12}>PRIVATE PILOTS</Text>
                    <Text fontSize={24} fontWeight={500} pb={1}> Phumrapee Limpianchop</Text>
                    <Text fontSize={16} color={`#616161`} pt={1}>แอบมองเธออยู่บนเจ้าคะเจ้าพระยาทนแทบไม่ได้เริ่มกันใหญ่และเธอได้ลบ อย่ารอช้าก้าวออกมาเพื่อก้าวออกไปรับฤดูใหม่ และตอนนี้คงจะมีแค่เพียงเราจะไม่เสียใจ ขอให้เธอรู้ฉันจะได้ไหม ขอให้ชีวิตความฝันนั้นที่พึ่งโยนไปนั้นที่จะบ้า ไม่ว่ารักเธอจะวิ่งตามรถคันนึงที่กำลังได้พบ</Text>
                    <Text fontSize={14} pt={3}>Read more...</Text>
                  </Box>
                </Box>
                <Box width={[1, 1, 1 / 2]} pt={3}>
                  <Flex flexWrap={`wrap`} justifyContent={`center`} alignItems={`center`}>
                    <Box width={[1, 1 / 2]} p={2}>
                      <Text fontSize={10}>ADC</Text>
                      <Text fontSize={22} fontWeight={500} pb={1}>Kwanphathai Wuttisit</Text>
                      <Text fontSize={12} color={`#616161`} pt={1}>จะไม่พักหายใจเข้าสู่วันที่ผ่านและพ้นเรื่องราวหมองหม่น ขอแค่พูดออกไปให้ไกลเหมือนหมดแรงก้าวต่อไปให้ฉันนั้นตั้งกี่ครั้ง ก็ไม่รู้ทำไมบังเอิญอย่างนี้แต่เรื่องดี เธอต้องไปวัดพระแก้วเวลาเหล่านั้นก็สุขใจ แต่นานเพียงใดฉันยังนึกเรื่องนี้ขึ้นมา</Text>
                      <Text fontSize={14} pt={2}>Read more...</Text>
                    </Box>
                    <Box width={[1, 1 / 2]} p={2}>
                      <Text fontSize={10}>SPP</Text>
                      <Text fontSize={22} fontWeight={500} pb={1}>Kwanpadthai Wuttisit</Text>
                      <Text fontSize={12} color={`#616161`} pt={1}>ปล่อยใจไปข้างหน้าอีกไม่ว่าฉันจะมีอยู่ในเวลาที่เดินต่อ จดจำไว้ว่าเธอต้องเข้มแข็งว่างเปล่าน้ำข้ามให้เธอนั้นโชคดีเนื่องในวันนี้ จะได้พบเธอนั้นเฉยเมยจางก้อนหินใต้เท้าปัดมันช่างแสนไกล</Text>
                      <Text fontSize={14} pt={2}>Read more...</Text>
                    </Box>
                    <Box width={[1, 1 / 2]} p={2}>
                      <Text fontSize={10}>APC</Text>
                      <Text fontSize={22} fontWeight={500} pb={1}>Kwanpatai Wuttisit</Text>
                      <Text fontSize={12} color={`#616161`} pt={1}>อย่าได้หวั่นกลัวเลยกับปัญหาและเธอ ลองไม่ว่าสุดท้ายลงเอยเช่นไรก็มีอยู่ ลองวัดกันดูปฏิทินช่วงเวลาที่ความจริงออกไป ให้หัวใจเธอจะดีเฮอีกทีหรือไปเล่นตะกร้อ จงบอกไปด้วยกันตรงนี้เป็นเพื่อนสักทีที่เดินไป</Text>
                      <Text fontSize={14} pt={2}>Read more...</Text>
                    </Box>
                    <Box width={[1, 1 / 2]} p={2}>
                      <Text fontSize={10}>ATP</Text>
                      <Text fontSize={22} fontWeight={500} pb={1}>Kwanpudding Wuttisit</Text>
                      <Text fontSize={12} color={`#616161`} pt={1}>ก้าวไปให้ทุกคนที่ไม่มีวันมีไฟในใจแอบคิดอะไร และข้าวมันคือบางกอกเมืองที่เราไม่ได้ตั้งใจ</Text>
                      <Text fontSize={14} pt={2}>Read more...</Text>
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
              <Flex flexWrap={`wrap`} alignItems={`center`}>
                <Box width={[1, 1 / 2]}>
                  <Text fontSize={32} fontWeight={700}>Knowledges</Text>
                </Box>
                <Box width={[1, 1 / 2]}>
                  <StyledFlex>
                    <Text fontSize={20}>More knowledges</Text>
                    <Flex alignItems={`center`} pl={1}>
                      <FaArrowRight size={`20px`} />
                    </Flex>
                  </StyledFlex>
                </Box>
              </Flex>
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
                      <Text fontSize={14} color={`#616161`} pt={1}>อยากจะได้พบกันสักวันที่ฉันฝัน จะข้ามบันไดและค่อยค่อยเป่าทนผู้คนรัว ก็หัวใจเธอเธอนั้นมีแรงกว่าการที่ใจต้องการ</Text>
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
                      <Text fontSize={14} color={`#616161`} pt={1}>แม้จะไปเด็ดผลไม้ต้องห้าม มาเถิดเราข้ามมันไปให้เธอจะรักไม่อาจเดาได้ ก็ฝ่ามันก็ต้องมาเลยว่าฉันจะเป็นผู้ใหญ่ แอบส่งใจของฉันเป็นโชว์ของทุกช่วงที่เธอ</Text>
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
                      <Text fontSize={14} color={`#616161`} pt={1}>แค่เพียงได้นึกถึงวันเวลาเหล่านั้นก็สุขใจ ถ้าไม่ลองไม่เคยจะไม่เดียวที่เราก้าวเดินออกไป ที่มีในนภาที่รักข้าวยำเป้าหมายปลายทางโดยที่ไม่ได้</Text>
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
