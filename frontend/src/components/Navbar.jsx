import { Link, NavLink } from 'react-router-dom';
import { Menu, Github } from 'lucide-react';
import SearchBar from './SearchBar.jsx';

export default function Navbar() {
  const linkClass = ({ isActive }) => 
    `transition-colors ${isActive ? 'text-brand' : 'text-ink hover:text-brand'}`;

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 font-bold text-xl text-brand">
              Fake API Hub
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-6 text-sm font-medium">
                <NavLink to="/" end className={linkClass}>Home</NavLink>
                <NavLink to="/apis" className={linkClass}>APIs</NavLink>
                <NavLink to="/categories" className={linkClass}>Categories</NavLink>
                <NavLink to="/documentation" className={linkClass}>Documentation</NavLink>
                <NavLink to="/contribute" className={linkClass}>Contribute</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <SearchBar />
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-ink hover:text-brand p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
