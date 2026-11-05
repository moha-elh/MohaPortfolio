import { useState, useCallback, useEffect, lazy, Suspense } from 'react';
import { projects } from './models/projects';
import { useLang } from './context/LangContext';
import { useKonami } from './controllers/useKonami';
import Cursor        from './views/ui/Cursor';
import PartyMode     from './views/ui/PartyMode';
import Nav           from './views/layout/Nav';
import Footer        from './views/layout/Footer';
import Hero          from './views/sections/Hero';
import Intro         from './views/sections/Intro';
import Divider       from './views/ui/Divider';
import Projects      from './views/sections/Projects';
import Toolbox       from './views/sections/Toolbox';
import Achievements  from './views/sections/Achievements';
import Experience    from './views/sections/Experience';
import Contact       from './views/sections/Contact';

// Sub-pages are split into their own chunks: the home page no longer downloads
// and parses every page (and GSAP) up front. They are prefetched once the home
// page is idle, so opening one still feels instant.
const pageImports = {
  Story:            () => import('./views/sections/Story'),
  ProjectDetail:    () => import('./views/sections/ProjectDetail'),
  WorkPage:         () => import('./views/sections/WorkPage'),
  Thoughts:         () => import('./views/sections/Thoughts'),
  DrawPage:         () => import('./views/sections/DrawPage'),
  CvPage:           () => import('./views/sections/CvPage'),
  CertificatesPage: () => import('./views/sections/CertificatesPage'),
};
const Story            = lazy(pageImports.Story);
const ProjectDetail    = lazy(pageImports.ProjectDetail);
const WorkPage         = lazy(pageImports.WorkPage);
const Thoughts         = lazy(pageImports.Thoughts);
const DrawPage         = lazy(pageImports.DrawPage);
const CvPage           = lazy(pageImports.CvPage);
const CertificatesPage = lazy(pageImports.CertificatesPage);

const prefetchPages = () => Object.values(pageImports).forEach((load) => load().catch(() => {}));

// Shown only if a page chunk is still downloading (slow networks); fades in late
// so fast loads never flash it.
const pageLoading = <div className="page-loading" role="status">{'one sec…'}</div>;

function pageToPath(page) {
  if (!page) return '/';
  if (typeof page === 'string') return `/${page}`;
  if (page?.type === 'project') return `/work/${page.id}`;
  return '/';
}

function pathToPage(path) {
  if (path === '/' || path === '') return null;
  const parts = path.split('/').filter(Boolean);
  if (parts[0] === 'work' && parts[1]) return { type: 'project', id: parts[1] };
  if (parts[0]) return parts[0];
  return null;
}

// page: null | 'story' | 'work' | 'thoughts' | 'draw' | { type: 'project', id: string }
export default function App() {
  const [page, setPage] = useState(() => pathToPage(window.location.pathname));
  const { t } = useLang();

  useEffect(() => {
    const path = pageToPath(page);
    if (window.location.pathname !== path) history.pushState(null, '', path);
  }, [page]);

  useEffect(() => {
    const onPop = () => setPage(pathToPage(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  // once the first page is idle, fetch the other pages' code in the background
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((fn) => setTimeout(fn, 2000));
    const cancel = window.cancelIdleCallback ?? clearTimeout;
    const handle = idle(prefetchPages, { timeout: 4000 });
    return () => cancel(handle);
  }, []);

  const [party, setParty] = useState(false);
  useKonami(useCallback(() => setParty(true), []));

  const goHome = useCallback(() => {
    setPage(null);
    window.scrollTo(0, 0);
  }, []);

  // certified skill → certificates page with that certificate's modal open
  const openCert = useCallback((id) => {
    history.pushState(null, '', `/certificates?cert=${encodeURIComponent(id)}`);
    setPage('certificates');
    window.scrollTo(0, 0);
  }, []);

  const openProject = useCallback((id, from) => {
    setPage({ type: 'project', id, from });
    window.scrollTo(0, 0);
  }, []);

  const party$ = <PartyMode active={party} onDone={() => setParty(false)} />;

  if (page === 'story') {
    return (
      <>
        <Cursor />
        <Suspense fallback={pageLoading}>
          <Story onBack={goHome} />
        </Suspense>
        {party$}
      </>
    );
  }

  if (page === 'draw') {
    return (
      <>
        <Cursor />
        <Suspense fallback={pageLoading}>
          <DrawPage onBack={goHome} />
        </Suspense>
        {party$}
      </>
    );
  }

  if (page === 'thoughts') {
    return (
      <>
        <Cursor />
        <Suspense fallback={pageLoading}>
          <Thoughts onBack={goHome} />
        </Suspense>
        {party$}
      </>
    );
  }

  if (page === 'certificates') {
    return (
      <>
        <Cursor />
        <Suspense fallback={pageLoading}>
          <CertificatesPage onBack={goHome} />
        </Suspense>
        {party$}
      </>
    );
  }

  if (page === 'cv') {
    return (
      <>
        <Cursor />
        <Suspense fallback={pageLoading}>
          <CvPage onBack={goHome} />
        </Suspense>
        {party$}
      </>
    );
  }

  if (page === 'work') {
    return (
      <>
        <Cursor />
        <Suspense fallback={pageLoading}>
          <WorkPage onBack={goHome} onOpen={(id) => openProject(id, 'work')} />
        </Suspense>
        {party$}
      </>
    );
  }

  // unknown /work/<id> falls through to the home page instead of crashing
  const project = page?.type === 'project' && projects.find(p => p.id === page.id);
  if (project) {
    return (
      <>
        <Cursor />
        <Suspense fallback={pageLoading}>
          <ProjectDetail
            project={project}
            onBack={() => {
              if (page.from === 'work') { setPage('work'); }
              else { goHome(); }
              window.scrollTo(0, 0);
            }}
          />
        </Suspense>
        {party$}
      </>
    );
  }

  return (
    <>
      <Cursor />
      <Nav
        onLogoClick={() => { setPage('draw'); window.scrollTo(0, 0); }}
        onCvClick={() => { setPage('cv'); window.scrollTo(0, 0); }}
      />
      <main>
        <Hero />
        <Intro
          onEasterEgg={() => { setPage('story'); window.scrollTo(0, 0); }}
          onOpenThoughts={() => { setPage('thoughts'); window.scrollTo(0, 0); }}
        />
        <Divider label={t('/ section · 02 · work', '/ section · 02 · projets')} />
        <Projects
          onOpenProject={openProject}
          onOpenWork={() => { setPage('work'); window.scrollTo(0, 0); }}
        />
        <Toolbox onOpenCert={openCert} />
        <Achievements onOpenCerts={() => { setPage('certificates'); window.scrollTo(0, 0); }} />
        <Experience />
        <Contact onOpenCv={() => { setPage('cv'); window.scrollTo(0, 0); }} />
      </main>
      <Footer />
      {party$}
    </>
  );
}
