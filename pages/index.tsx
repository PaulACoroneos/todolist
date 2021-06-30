import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Todolist } from '../components/Todolist'
import { Footer } from '../components/Footer'

export default function Home () {
  return (
    <div className="flex flex-col min-h-screen m-auto max-w-full md:max-w-2xl lg:max-w-4xl">
      <Head>
        <title>Paul Todolist</title>
        <meta name="Coroneos Todolist" content="Todolist by Paul Coroneos" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="flex-auto">
        <Navbar />
        <Todolist />
      </main>
      <Footer />
    </div>
  )
}
