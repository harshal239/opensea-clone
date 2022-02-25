import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Open Sea 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>Hello World</div>
      </main>
    </div>
  )
}

export default Home
