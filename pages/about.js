import Header from '../components/header'
import { Box, Heading, Text, Container, Grid, GridItem, Link } from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';
import * as tools from '/tools/tools.js';
import Icon from '@chakra-ui/icon';
import Section from '../components/section'

const About = () => {
  return (
    <Container>
      <Header title="Tenshi - About" />
      <Box>
        <Box paddingTop={6} paddingBottom={6}>
          <Intro />
        </Box>
        <Box paddingTop={6} paddingBottom={6}>
          <Skills />
        </Box>
        <Box paddingBottom={6}>
          <Contact />
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
      <Container maxW={{ base: '20rem', sm: '30rem', md: '40rem' }} p={0}>
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
      </Container>
    </Box>
    </Section>
  );
};

const Skills = () => {
  const toolArray = Object.values(tools).slice(0, 16);
  return (
    <Section delay={0.2}>
    <Box as="section">
      <Heading mb="1.5rem" as="h3" variant="h3">
        Tools & Technologies
      </Heading>
      <Text mb="3rem">
        The languages and tools that I use the most for my projects.
      </Text>
      <Grid templateColumns={{ md: 'repeat(4, 1fr)', base: 'repeat(3, 1fr)' }} gap={4} >
        {toolArray.map((skill) => (
          <Skill
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            key={skill.id}
          />
        ))}
      </Grid>
    </Box>
    </Section>
  );
};

const Skill = ({ name, icon, color }) => {
  return (
    <Section delay={0.2}>
    <GridItem p={{ base: '0.5rem', '2xl': '1rem' }}
      textAlign="center" display="flex" flexDirection="column" transitionDuration="100ms"
      listStyleType="none" as="li" _hover={{
        transform: 'scale(1.2)',
        transition: 'transform 300ms ease-in-out',
        color: color
      }} >
      <Icon mb="0.5rem" boxSize={{ base: '2rem', lg: '3rem', '2xl': '4rem' }}
      mx="auto" as={icon}/>
      {name}
    </GridItem>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section delay={0.3}>
    <Box as="section">
      <Heading mb="4" w={{ base: '90%', sm: '100%' }} as="h1" variant="h1">
        Contact
      </Heading>
      <Container maxW={{ base: '20rem', sm: '30rem', md: '40rem' }} p={0}>
        <Text mb="1rem">
          Contact me on discord.
        </Text>
        <Box as="a" display='flex' alignItems={'center'} justify-content='space-between' mb={'2rem'}>
            <FaDiscord size="2rem" />
            <p>&nbsp; 天使 | Tenshi#9999</p>
        </Box>
      </Container>
    </Box>
    </Section>
  );
};

export default About;
