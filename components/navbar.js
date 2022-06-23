import Logo from './logo'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import { Container, Box, HStack } from '@chakra-ui/react';
import Navbarbutton from './navbarButton'
import NavbarList from './navbarList'
import LinkItem from './linkItem'

const Navbar = ( { path }) => {
    return (
        <Container position="fixed" w="100%" maxWidth="100%" css={{ backdropFilter: 'blur(15px)' }} zIndex={10}>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2.5} maxWidth="1080" marginLeft="auto" marginRight="auto">
                <Logo />
                <HStack display={{ base: 'none', md: 'flex' }} spacing={8}>
                    <LinkItem href="/" path={path}>Home</LinkItem>
                    <LinkItem href="/about" path={path}>About</LinkItem>
                    <LinkItem href="/projects" path={path}>Projects</LinkItem>
                    <LinkItem target="_blank" href="https://github.com/TTENSHII" path={path} display="inline-flex"
                    alignItems="center" style={{ gap: 4 }} pl={2}>
                        <IoLogoGithub/>Github</LinkItem>
                </HStack>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Navbarbutton />
                    <NavbarList />
                </Box>
            </Box>
        </Container>
    );
}

export default Navbar;
