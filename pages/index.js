import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Audrey | Front-End Developer</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contacts />
    </div>
  )
}
