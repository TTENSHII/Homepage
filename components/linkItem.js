import { useColorModeValue, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

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

export default LinkItem;
