import Header from '../components/header'
import { Box, Heading, Text, Container, Grid, GridItem, Link } from '@chakra-ui/react';
import toolsArray from '/tools/tools.js';
import Icon from '@chakra-ui/icon';
import Section from '../components/section'
import Skills from '/components/skills'

const About = () => {
  return (
    <Container maxW={{ base: '30rem', sm: '30rem', md: '35rem' }} p={0}>
      <Header title="Tenshi - About" />
      <Box>
        <Box paddingTop={6} paddingBottom={6}>
          <Intro />
        </Box>
        <Box paddingTop={6}>
        <Section delay={0.2}>
          <Heading mb="1.5rem" as="h3" variant="h3">
            Tools & Technologies
          </Heading>
          <Text mb="3rem">
            The languages and tools that I use the most for my projects.
          </Text>
        </Section>
        </Box>
        <Box paddingTop={1} paddingBottom={6} marginLeft={-10}>
          <Skills />
        </Box>
      </Box>
    </Container>
  );
};

const Intro = () => {
  return (
    <Section delay={0.1}>
    <Box as="section">
      <Heading mb="1.5rem" as="h3" variant="h3">
      About me
      </Heading>
        <Text mb="2rem">
          Hey there! I’m a second year student at Epitech.
          I'm currently passionate about programming and I've at
          least learned something I think...
          My field of Interests are mobile, web and video
          game development, but I also like
          to learn and try new things.
        </Text>
        <Text mb="2rem">
          When I'm not coding, I like to play video games,
          watch anime and read manga.
          I like technical and competitive games and
          I'm alwayslooking for new challenges.
          I also like to learn new languages, especially those
          with characters like Japanese, Chinese and Korean.
        </Text>
    </Box>
    </Section>
  );
};

export default About;
