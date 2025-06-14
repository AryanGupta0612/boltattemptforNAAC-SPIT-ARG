import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PrincipalInterview } from './components/PrincipalInterview';
import { StudentAchievements } from './components/StudentAchievements';
import { NewsEvents } from './components/NewsEvents';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navbar />
      <main id="main-content">
        <Hero />
        <PrincipalInterview />
        <StudentAchievements />
        <NewsEvents />
      </main>
    </div>
  );
}

export default App;