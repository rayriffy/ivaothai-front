import React, { useEffect, useRef, useState } from 'react'

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
  z-index: 99;
  transition: 0.4s;

  ${(props: {navBackground: boolean}) => props.navBackground ? `background: #fff;` : `background: transparent;`}
`

const NavBox = styled(Box)`
  background: transparent;
  border-radius: 99px;
  overflow: hidden;
  transition: 0.6s;

  & > div {
    color: ${(props: {inverted: boolean}) => props.inverted ? `#000` : `#fff`};
  }

  &:hover {
    background: ${(props: {inverted: boolean}) => props.inverted ? `#000` : `#fff`};

    & > div {
      color: ${(props: {inverted: boolean}) => props.inverted ? `#fff` : `#000`};
    }
  }
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

  const [navBackground, setNavBackground] = useState<boolean>(false)
  const navRef = useRef<boolean>()

  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledBox navBackground={navBackground}>
      {GATSBY_ENV !== 'production' ? <Dev /> : null}
      <Flex alignItems={`center`}>
        <Box width={70} mx={3} p={2}>
          <TransparentLinkComponent to={`/`}>
            <Img fluid={data.logo.childImageSharp.fluid} />
          </TransparentLinkComponent>
        </Box>
        <Box mx={`auto`} />
        <Flex px={3}>
          <Box px={2}>
            <NavBox py={2} px={3} inverted={navBackground}>
              <Text fontWeight={600} color={`white`}>HOME</Text>
            </NavBox>
          </Box>
          <Box px={2}>
            <NavBox py={2} px={3} inverted={navBackground}>
              <Text fontWeight={600} color={`white`}>PILOT</Text>
            </NavBox>
          </Box>
          <Box px={2}>
            <NavBox py={2} px={3} inverted={navBackground}>
              <Text fontWeight={600} color={`white`}>ATC</Text>
            </NavBox>
          </Box>
        </Flex>
      </Flex>
    </StyledBox>
  )
}

export default HeaderComponent
