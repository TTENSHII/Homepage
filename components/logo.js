import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Style = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 30px;
  padding: 10px;
  p {
    padding: 2px;
  }
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const logo_img = `/logos/logo${useColorModeValue('-white', '-black')}.png`;
    return (
        <Link href="/">
            <a>
                <Style>
                    <Image src={logo_img} alt="footprint" width={20} height={20} />
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c", sans-serif'
                        fontWeight='bold'ml={15}>
                        <p>Tenshi</p>
                    </Text>
                </Style>
            </a>
        </Link>
    );
}

export default Logo;
