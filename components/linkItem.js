import { useColorModeValue, Link } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';

const LinkItem = ({ href, path, target, children, ...props }) => {
    const { colorMode } = useColorMode()
    const active = path === href;
    const whiteTheme = false;
    if (active && colorMode === 'light') {
        whiteTheme = true;
    }
    const inactiveColor = useColorModeValue('black', 'grey')
    return (
    <NextLink href={href} passHref scroll={false}>
        <Link p={2} color={active ? useColorModeValue('black', 'white') : inactiveColor} _hover={{ color: useColorModeValue('grey', 'white') }}
        textDecoration={whiteTheme ? 'underline' : 'none'}  {...props}>
            {children}
        </Link>
    </NextLink>
    );
}

export default LinkItem;
