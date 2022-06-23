import { Box, Menu, MenuItem, MenuList, Link, MenuButton, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'

const NavbarList = () => {
    return (
        <Box display={{ base: 'inline-block', md: 'none' }} pl={2}>
            <Menu isLazy id="navbar-menu">
                <MenuButton as={IconButton} icon={<HamburgerIcon />}
                    variant="outline" aria-label="Options"/>
                    <MenuList>
                        <NextLink href="/about" passHref>
                            <MenuItem as={Link}>About</MenuItem>
                        </NextLink>
                        <NextLink href="/projects" passHref>
                            <MenuItem as={Link}>Projects</MenuItem>
                        </NextLink>
                        <MenuItem as={Link} href="https://github.com/TTENSHII">
                            Github
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
}

export default NavbarList;
