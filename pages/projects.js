import NextLink from 'next/link'
import { MdHome } from "react-icons/md"
import Header from '../components/header'
import { Box, Heading, Container, Divider, Button} from '@chakra-ui/react'
import Homebutton from '../components/HomeButton'


const Projects = () => {
  return (
    <Container>
        <Header title="Tenshi - Projects" />
      <Heading as="h1" align="center" p={12}>Projects are not implemented yet</Heading>
      <Divider my={6} />
      <Homebutton />
    </Container>
  )
}

export default Projects
