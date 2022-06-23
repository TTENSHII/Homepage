import Head from 'next/head'

const Header = ({title}) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/logos/icon.ico" />
            <title>{title}</title>
        </Head>
    )
}

export default Header;
