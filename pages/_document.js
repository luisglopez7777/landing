import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    render() {
        return (
            <Html lang="es">
                <Head >
                    <title>Matchmaking Technologies</title>
                    <meta name="description" content="Cambia la forma en que se juega tenis en tu club. Ten una red social de tenistas, inscríbete a torneos, posicionate en el ranking y mucho mas!" />
                    <meta name="theme-color" content="#ff9900"></meta>
                    <link rel="manifest" href="/manifest.json" />
                    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

