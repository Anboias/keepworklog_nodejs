import Head from 'next/head';
import Navbar from '../components/Navbar';
import Worklog from '../components/Worklog';
import Todonew from '../components/Todonew';
import Weeks from '../components/Weeks';
import Todolist from '../components/Todolist';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Keep Worklog</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google font - Montserrat --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,200&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Font Awesome --> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <div>
        <Navbar />
        <main>
          <Worklog />
          <Todonew />
          <Weeks />
          <Todolist />
          <Footer />
        </main>
      </div>
    </>
  );
}
