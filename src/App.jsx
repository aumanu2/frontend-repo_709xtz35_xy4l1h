import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            © {new Date().getFullYear()} Naman Meena. All rights reserved.
          </p>
          <p>
            Built with React, Tailwind and a playful 3D touch.
          </p>
        </div>
      </footer>
    </div>
  );
}
