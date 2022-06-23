import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Header from '../components/header'

import test from '../public/projects/test.jpg'
import defender from '../public/projects/defender.png'
import runner from '../public/projects/runner.png'

const Projects = () => (
    <Container>
      <Header title="Tenshi - Projects" />
      <Heading as="h3" fontSize={20} mb={4}>
        Games
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="my_rpg" title="my_rpg" thumbnail={test}>
            A rpg game made with csfml in c.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="my_defender" title="my_defender" thumbnail={test}>
            A tower defense game made with csfml in c.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="my_runner"
            title="my_runner"
            thumbnail={test}
          >
            A runner game made with csfml in c.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="pacman"
            title="pacman"
            thumbnail={test}
          >
            Pacman game made with html canva and javascript
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="my_hunter"
            title="my_hunter"
            thumbnail={defender}
          >
            A hunter game made with csfml in c.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Experimentations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="Hayate" thumbnail={test} title="Hayate">
            A GTA V complete mod Menu in cpp. Online and offline mod.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="Ayame"
            thumbnail={test}
            title="Ayame"
          >
            A discord bot made with discord.js in javascript.
            Basics features like moderation/ music / pics ...
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="portfolio" thumbnail={test} title="portfolio">
            A portfolio in html css and javascript.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Epitech best projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="LIB-C" thumbnail={runner} title="LIB-C">
            My lib-c for all epitech projects.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="sokoban"
            thumbnail={test}
            title="sokoban"
          >
            A Sokoban in ncurses.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="burp" thumbnail={test} title="burp">
            A cybersecu introduction
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="epytodo" thumbnail={test} title="epytodo">
           A web introduction. Todo app with node.js and express.
           make an api.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
)

export default Projects;
