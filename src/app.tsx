import React from "react";
import { createRoot } from 'react-dom/client';

import '/scss/main.scss';

import Header from './components/templates/header';
import About from './components/templates/about';
import Work from './components/templates/work';
import Contact from './components/templates/contact';
import Footer from './components/templates/footer';

const App = () => (
    <main className="bg-white text-black dark:bg-slate-900 dark:text-white">
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
    </main>
);

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);