import Head from "next/head";

export default function MetaTags({ title, description, imgUrl, cannonical }) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="dns-prefetch" href="https://ssl.google-analytics.com" />

            {/* <link rel="stylesheet" href="global.css" /> */}

            <link rel="canonical" href={cannonical} />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={cannonical} />
            <meta property="og:site_name" content="Tekslate" />
            <meta property="og:image" content={imgUrl} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@tekslatetutor" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imgUrl} />
            {/*Twitter img creator */}
            <meta name="twitter:creator" content="@tekslatetutor" />

            {/*Need site verification code and logo done */}
            {/* <meta
        name="google-site-verification"
        content="BZ-jPAsXefeGHPj5Bf_si_WAALH2fm8mlB_TjIhXpJ36lE"
      /> */}

            <link
                rel="shortcut icon"
                href="https://tekslateassets.s3.amazonaws.com/images/favicon.svg"
            />
            <link
                rel="icon"
                type="image/png"
                href="https://tekslateassets.s3.amazonaws.com/images/favicon.svg"
            />

            <title>{title}</title>

            <meta name="description" content={description} />

            <meta name="theme-color" content="#e94850" />
        </Head>
    );
}
