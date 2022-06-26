import NextLink from 'next/link'
import { MdHome } from "react-icons/md"
import Header from '../components/header'
import { Box, Heading, Container, Divider, Button} from '@chakra-ui/react'

const NotFound = () => {
    return (
      <Container>
        <Header title="Tenshi - About" />
        <Heading as="h1" align="center" p={12}>404 error | Not found</Heading>
        <Divider/>
        <Box my={6} align="center" p={7}>
          <NextLink href="/" passHref>
            <Button leftIcon={<MdHome />} colorScheme='blue' variant='outline'>
              Return to home
            </Button>
          </NextLink>
        </Box>
    </Container>
  );
}

export default NotFound
