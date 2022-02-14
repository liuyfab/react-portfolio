import React, {useState} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const Portfolio = () => {

    //Using useState, set the default value for currentPage to 'Home'
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

   
    //handle rendering and highlighting the page titles in the navigation bar.
    return (
        <div>
            <header className="header">
                <h1>Joe Lawton</h1>
                <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </header>
            <main className="content-wrapper">
                {renderPage(currentPage)}
            </main>
            <Footer />
        </div>
    );
}

export default Portfolio;