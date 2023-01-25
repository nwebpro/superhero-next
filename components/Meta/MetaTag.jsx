import Head from "next/head";

const MetaTag = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content='Superhero' />
            <meta name="keywords" content='Superhero' />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

MetaTag.defaultProps = {
    title: 'Supper Heros'
}
 
export default MetaTag