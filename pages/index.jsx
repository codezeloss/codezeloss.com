import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>codezloss | Portfolio</title>
        <meta name="description" content="Codezeloss portfolio website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Skills />
        <Projects />
        <AboutMe />
      </main>

      <Footer />
    </div>
  );
}
