import NextLink from 'next/link'
import { MdHome } from "react-icons/md"
import Header from '../components/header'
import { Box, Heading, Container, Divider, Button} from '@chakra-ui/react'

const About = () => {
  return (
    <Container>
        <Header title="Tenshi - About" />
      <Heading as="h1" align="center" p={12}>About is not implemented yet</Heading>
      <Divider my={6} />
      <Box my={6} align="center" p={4}>
        <NextLink href="/" passHref>
        <Button leftIcon={<MdHome />} colorScheme='blue' variant='outline'>
            Go back to home
        </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default About