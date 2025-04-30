import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import GalleryPage from './pages/Gallery';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-primary shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  {/* <Sun className="h-8 w-8 text-secondary" /> */}
                  <span className="text-xl font-bold text-white flex items-center gap-1">
  <img src="https://raw.githubusercontent.com/nyoupaneroshan/SunflowerAcademy/refs/heads/main/public/main-logo.png" alt="Sunflower Academy Logo here" className="h-12 w-auto" />
  Sunflower Academy
</span>
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-secondary"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-white hover:text-secondary">Home</Link>
                <Link to="/about" className="text-white hover:text-secondary">About</Link>
                <Link to="/gallery" className="text-white hover:text-secondary">Gallery</Link>
                <Link to="/news" className="text-white hover:text-secondary">News</Link>
                <Link to="/contact" className="text-white hover:text-secondary">Contact</Link>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-primary-dark">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block px-3 py-2 text-white hover:text-secondary">Home</Link>
                <Link to="/about" className="block px-3 py-2 text-white hover:text-secondary">About</Link>
                <Link to="/gallery" className="block px-3 py-2 text-white hover:text-secondary">Gallery</Link>
                <Link to="/news" className="block px-3 py-2 text-white hover:text-secondary">News</Link>
                <Link to="/contact" className="block px-3 py-2 text-white hover:text-secondary">Contact</Link>
              </div>
            </div>
          )}
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/news" element={<News />} /> */}
          </Routes>
        </main>

        <footer className="bg-primary text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sunflower Academy</h3>
                <p className="text-gray-300">Inspiring Excellence Building Future</p><br></br>
                <p className="text-lg font-semibold mb-4">Grades Offered</p>
                <p className="text-gray-300">Pre-Primary: Playgroup to UKg</p>
                <p className="text-gray-300">Basic: Grade 1 to Grade 8</p>
                <p className="text-gray-300">Secondary: Grade 9 to Grade 10</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-300 hover:text-secondary">Home</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-secondary">About</Link></li>
                  <li><Link to="/gallery" className="text-gray-300 hover:text-secondary">Gallery</Link></li>
                  <li><Link to="/news" className="text-gray-300 hover:text-secondary">News</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-secondary">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <p className="text-gray-300">Tarakeshwor- 06, KTM</p>
                <p className="text-gray-300">Bagmati, Nepal</p>
                <p className="text-gray-300">sfa2061@gmail.com</p>
                <p className="text-gray-300">Phone: (977)  01-5136321</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-light text-center">
              <p className="text-gray-300">&copy; {new Date().getFullYear()} Sunflower Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
