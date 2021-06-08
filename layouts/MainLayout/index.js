import Head from 'next/head';

const MainLayout = (props) => (
  <>
    <Head>
      <title>Checkout</title>
      <meta name="description" content="Checkouk SPA" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
    </Head>

    <main>
      {props.children}
    </main>
  </>
);

export default MainLayout;
