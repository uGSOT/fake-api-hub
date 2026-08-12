import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-surface pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-brand mb-4">Fake API Hub</h3>
            <p className="text-ink-inverse-muted text-sm">
              Free mock REST APIs for real-world applications. Build and test your frontend without waiting for a backend.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-surface">Platform</h4>
            <ul className="space-y-3 text-sm text-ink-inverse-muted">
              <li><Link to="/apis" className="hover:text-surface transition-colors">APIs</Link></li>
              <li><Link to="/categories" className="hover:text-surface transition-colors">Categories</Link></li>
              <li><Link to="/documentation" className="hover:text-surface transition-colors">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-surface">Resources</h4>
            <ul className="space-y-3 text-sm text-ink-inverse-muted">
              <li><Link to="/documentation" className="hover:text-surface transition-colors">Getting Started</Link></li>
              <li><Link to="/documentation" className="hover:text-surface transition-colors">API Guide</Link></li>
              <li><Link to="/documentation" className="hover:text-surface transition-colors">Examples</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-surface">Community</h4>
            <ul className="space-y-3 text-sm text-ink-inverse-muted">
              <li><Link to="/contribute" className="hover:text-surface transition-colors">Contribute</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-surface transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-ink-inverse-muted">
          <p>&copy; {new Date().getFullYear()} Fake API Hub. Made with ❤️ by Web Dev Team UgSOT.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="font-medium text-surface">Technology:</span>
            <span>React</span>
            <span>Flask</span>
            <span>MySQL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
