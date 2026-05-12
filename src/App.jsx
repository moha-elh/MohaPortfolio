import Cursor       from './views/ui/Cursor';
import Nav          from './views/layout/Nav';
import Footer       from './views/layout/Footer';
import Hero         from './views/sections/Hero';
import Intro        from './views/sections/Intro';
import Divider      from './views/ui/Divider';
import Projects     from './views/sections/Projects';
import Toolbox      from './views/sections/Toolbox';
import Achievements from './views/sections/Achievements';  // now Certificates
import Experience   from './views/sections/Experience';
import Contact      from './views/sections/Contact';

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Divider label="/ section · 02 · work" />
        <Projects />
        <Toolbox />
        <Achievements />   {/* 04 · certificates */}
        <Experience />     {/* 05 · experience   */}
        <Contact />        {/* 06 · say hi       */}
      </main>
      <Footer />
    </>
  );
}
