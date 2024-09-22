import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Archisky | Architecture and Interior Design React Nextjs Template"}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500&family=Oswald:wght@200;300;400;500&display=swap"
                    rel="stylesheet"
                    
                />
            </Head>
        </>
    )
}

export default PageHead