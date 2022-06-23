import { Box, Menu, MenuItem, MenuList, Link, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'

const NavbarList = () => {
    return (
        <Box display={{ base: 'inline-block', md: 'none' }} pl={2}>
            <Menu isLazy id="navbar-menu">
                <MenuButton as={IconButton} icon={<HamburgerIcon />}
                    variant="outline" colorScheme={useColorModeValue(undefined, undefined)}
                    color={useColorModeValue('grey', 'grey')}
                    _hover={{ color: useColorModeValue('black', 'white') }} />
                    <MenuList color={'white'} bg="#191919">
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
