import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Box, Link, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';
import colors from '../../colors';

const FooterContainer = styled.div`
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-bottom: 50px;
`;

const TextFooter = styled(Text)`
  color: ${colors.backgroundDark};

  & a {
    color: ${colors.backgroundDark};
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        contentfulAbout {
          name
          roles
          socialLinks {
            id
            url
            name
            fontAwesomeIcon
            fontAwesomeType
          }
        }
      }
    `}
    render={data => {
      const { name, socialLinks } = data.contentfulAbout;

      return (
        <Box p={3} backgroundColor="secondary" as="footer">
          <FooterContainer>
            <Fade left>
              <TextFooter fontSize={[2, 3]}>
                <span>{`${name} Portfolio - Powered by `}</span>
                <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
                <span>, </span>
                <Link href="https://www.contentful.com/" mr={1}>
                  Contentful
                </Link>
                <span> and </span>
                <Link href="https://www.netlify.com/" mr={1}>
                  Netlify
                </Link>
              </TextFooter>
            </Fade>
            <Flex>
              <Fade right>
                {socialLinks.map(({ id, ...rest }) => (
                  <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                    <SocialLink {...rest} color="backgroundDark" />
                  </Box>
                ))}
              </Fade>
            </Flex>
          </FooterContainer>
        </Box>
      );
    }}
  />
);

export default Footer;
