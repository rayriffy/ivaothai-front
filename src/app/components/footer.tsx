import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Box, Text } from 'rebass'
import styled from 'styled-components'

const CoverFooter = styled(Box)`
`

const NavText = styled(Text)`
  color: rgba(0, 0, 0, 0.25);
`

const FooterComponent: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AppFooterQuery {
      logo: file(sourceInstanceName: {eq: "assets"}, relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fluid(maxWidth: 60, quality: 90) {
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
    <CoverFooter pt={4} px={[5, 5, 6, 7]} pb={4}>
      <Box pt={2} pb={2}>
        <Box width={48}>
          <Img fluid={data.logo.childImageSharp.fluid} />
        </Box>
      </Box>
      <Box pt={2} pb={5}>
        <NavText>© {(new Date().getFullYear())} Phumrapee Limpianchop</NavText>
      </Box>
    </CoverFooter>
  )
}

export default FooterComponent
