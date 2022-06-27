import { GridItem, Icon, Box, Grid } from '@chakra-ui/react';
import Section from '../components/section';
import toolsArray from '/tools/tools.js';

const Tool = ({ name, icon, color }) => {
    return (
      <Section delay={0.2}>
      <GridItem
        textAlign="center" display="flex" flexDirection="column" transitionDuration="100ms"
        listStyleType="none" as="li" _hover={{
          transform: 'scale(1.2)',
          transition: 'transform 300ms ease-in-out',
          color: color
        }} >
        <Icon mb="0.5rem" boxSize={{ base: '2rem', md: '2.5rem'}}
        mx="auto" as={icon}/>
        {name}
      </GridItem>
      </Section>
    );
};

const Skills = () => {
    return (
        <Section delay={0.2}>
            <Box as="section" >
                <Grid templateColumns={{ md: 'repeat(4, 1fr)', base: 'repeat(3, 1fr)' }} gap={2}>
                    {toolsArray.map((skill) => (
                <Tool
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                    key={skill.id} />
                ))}
                </Grid>
            </Box>
        </Section>
    );
};

export default Skills;
