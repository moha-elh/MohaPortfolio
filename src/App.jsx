import { useState, useCallback } from 'react';
import { projects } from './models/projects';
import Cursor       from './views/ui/Cursor';
import Nav          from './views/layout/Nav';
import Footer       from './views/layout/Footer';
import Hero         from './views/sections/Hero';
import Intro        from './views/sections/Intro';
import Divider      from './views/ui/Divider';
import Projects     from './views/sections/Projects';
import Toolbox      from './views/sections/Toolbox';
import Achievements from './views/sections/Achievements';
import Experience   from './views/sections/Experience';
import Contact      from './views/sections/Contact';
import Story        from './views/sections/Story';
import ProjectDetail from './views/sections/ProjectDetail';
import WorkPage     from './views/sections/WorkPage';

// page: null | 'story' | 'work' | { type: 'project', id: string }
export default function App() {
  const [page, setPage] = useState(null);

  const goHome = useCallback(() => {
    setPage(null);
    window.scrollTo(0, 0);
  }, []);

  const openProject = useCallback((id) => {
    setPage({ type: 'project', id });
    window.scrollTo(0, 0);
  }, []);

  if (page === 'story') {
    return (
      <>
        <Cursor />
        <Story onBack={goHome} />
      </>
    );
  }

  if (page === 'work') {
    return (
      <>
        <Cursor />
        <WorkPage onBack={goHome} onOpen={openProject} />
      </>
    );
  }

  if (page?.type === 'project') {
    const project = projects.find(p => p.id === page.id);
    return (
      <>
        <Cursor />
        <ProjectDetail project={project} onBack={goHome} />
      </>
    );
  }

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Intro onEasterEgg={() => { setPage('story'); window.scrollTo(0, 0); }} />
        <Divider label="/ section · 02 · work" />
        <Projects
          onOpenProject={openProject}
          onOpenWork={() => { setPage('work'); window.scrollTo(0, 0); }}
        />
        <Toolbox />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
