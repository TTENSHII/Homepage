import Logo from './logo'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import { Container, Box, Link, HStack, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('blue', 'grey')
    return (
    <NextLink href={href} passHref scroll={false}>
        <Link p={2} color={active ? 'white' : inactiveColor} _hover={{ color: 'white' }}  {...props}>
            {children}
        </Link>
    </NextLink>
    );
}

const Navbar = ( { path }) => {
    return (
        <Container position="fixed" w="100%" maxWidth="100%" css={{ backdropFilter: 'blur(15px)' }} zIndex={10}>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2.5}>
                <Logo />
                <HStack display={{ base: 'none', md: 'flex' }} spacing={8}>
                    <LinkItem href="/" path={path}>Home</LinkItem>
                    <LinkItem href="/about" path={path}>About</LinkItem>
                    <LinkItem href="/projects" path={path}>Projects</LinkItem>
                    <LinkItem target="_blank" href="https://github.com/TTENSHII" path={path} display="inline-flex"
                    alignItems="center" style={{ gap: 4 }} pl={2}>
                        <IoLogoGithub/>Github</LinkItem>
                </HStack>
            </Box>
        </Container>
    );
}

export default Navbar;
