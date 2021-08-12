import Head from 'next/head';
import Header from '../components/Header';
import BrifeIntro from '../components/BrifeIntro';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>👨‍💻 Arindam Biswas</title>
      </Head>
      <Header />
      <main className="bg-blue-200" style={{ backgroundColor: '#e2e8f0' }}>
        <section
          className="bg-gray-400 h-[300px] sm:h-[400px] lg:h-[500px] w-full bg-center bg-cover"
          style={{ backgroundImage: `url('/banner.jpg')` }}
        />

        <section className="p-6 mx-6 my-4 md:mx-14 md:py-6 bg-white -mt-28 md:-mt-48 z-50 rounded-xl items-center shadow-lg">
          <BrifeIntro />
          <hr className="border" />
          <About />
          <hr className="border" />
          <Skills />
          <hr className="border" />
          <Projects />
        </section>

        <section className="mx-6 mt-10 md:mt-14 md:mx-14 md:pt-6">
          <Contact />
          <hr className="border-t-1 border-gray-300" />
        </section>
      </main>
      <footer
        className="text-center font-bold text-sm text-gray-500 py-4"
        style={{ backgroundColor: '#e2e8f0' }}
      >
        Design & Develop by Arindam Biswas
      </footer>
    </div>
  );
}
