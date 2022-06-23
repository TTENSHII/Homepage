import { ChakraProvider, Container } from '@chakra-ui/react';
import Theme from '../styles/theme';
import Navbar from '../components/navbar';

const App = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={Theme}>
            <Navbar path={router.asPath} />
                <Container maxWidth="100%" w="100%" pt="20">
                    <Component {...pageProps} /> 
                </Container>
        </ChakraProvider>
    );
}

export default App;
