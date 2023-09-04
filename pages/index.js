import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>THE BONE ZONE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          WHATEVER YOU DO DON'T CHANGE <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
