import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';
import { Link } from 'rebass';
import Tippy from '@tippy.js/react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSuitcase } from '@fortawesome/free-solid-svg-icons';

library.add(faGraduationCap, faSuitcase);

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['30vh', '20vh']}
      width={['49.2vw', '49.2vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

/*
const Experience = ({
  name,
  completed,
  location,
  description,
  logo,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}<Hide query={MEDIA_QUERY_NONSMALL}> ({completed})</Hide>
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage src={logo.image.src} alt={logo.title} />
        <ProjectTag>
          <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
            {location}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{completed}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
);
*/

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const Experience = ({
  name,
  completed,
  location,
  description,
  url,
  fontAwesomeIcon,
  color,
}) => (
  <VerticalTimelineElement
    contentStyle={{ color: 'background', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #668f6c' }}
    date={completed}
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={
      <Tippy
        content={location}
        placement="bottom"
        trigger="mouseenter"
        arrow={false}
      >
        <IconLink
          href={url}
          target="_blank"
          color={color}
          rel="noreferrer"
          aria-label={location}
        >
          <FontAwesomeIcon icon={fontAwesomeIcon} />
        </IconLink>
      </Tippy>
    }
  >
    <Title>{name}</Title>
    <h4 className="vertical-timeline-element-subtitle">{location}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
);

Experience.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  fontAwesomeIcon: PropTypes.string.isRequired,
};

/*
const Experiences = () => (
  <Section.Container id="experiences" Background={Background}>
    <Section.Header name="Experiences" icon="💻" label="notebook" />
    <StaticQuery
      query={graphql`
        query ExperiencesQuery {
          contentfulAbout {
            experiences {
              id
              name
              completed(formatString: "YYYY")
              location
              description
              logo {
                title
                image: resize(width: 200, quality: 100) {
                  src
                }
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.experiences.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.id}>
              <Experience {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);
*/

const Experiences = () => (
  <Section.Container id="experiences" Background={Background}>
    <Section.Header name="Experiences" />
    <StaticQuery
      query={graphql`
        query ExperiencesQuery {
          contentfulAbout {
            experiences {
              id
              name
              completed
              location
              description
              url
              fontAwesomeIcon
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <VerticalTimeline layout={'2-columns'}>
          {contentfulAbout.experiences.map((p, i) => (
            <Experience {...p} />
          ))}
        </VerticalTimeline>
      )}
    />
  </Section.Container>
);
export default Experiences;
