import Head from 'next/head'

const MainLayout = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {/* notificatino */}
        </div>
        {props.children}
      </main>
    </div>
  )
}

export default MainLayout;