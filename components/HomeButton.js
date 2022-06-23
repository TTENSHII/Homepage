import Logo from './logo'
import NextLink from 'next/link'
import { MdHome } from "react-icons/md"

import { IoLogoGithub } from 'react-icons/io5'
import { Container, Box, Button } from '@chakra-ui/react'

const Homebutton = ( { path }) => {
    return (
        <Box my={6} align="center" p={4}>
        <NextLink href="/" passHref>
        <Button leftIcon={<MdHome />} colorScheme='blue' variant='outline'>
            Go back to home
        </Button>
        </NextLink>
      </Box>
    );
}

export default Homebutton;
