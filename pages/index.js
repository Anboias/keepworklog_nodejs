import Head from 'next/head'
import Navbar from '../components/Navbar'
import Worklog from '../components/Worklog'
import Todonew from '../components/Todonew'
import Weeks from '../components/Weeks'
import Todolist from '../components/Todolist'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <html>
      <Head>
        <title>Keep Worklog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar/>
        <main>
          <Worklog />
          <Todonew />
          <Weeks />
          <Todolist />
          <Footer />
        </main>

      </body>
    </html>
  )
}
