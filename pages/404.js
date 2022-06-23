import NextLink from 'next/link'
import { MdHome } from "react-icons/md"
import { Box, Heading, Container, Divider, Button} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" align="center" p={12}>Error 404 - Not found</Heading>
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

export default NotFound