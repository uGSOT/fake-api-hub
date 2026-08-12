import { Link } from 'react-router-dom';
import { Github, Code, Database, FileText, CheckSquare, Bug } from 'lucide-react';

export default function Contribute() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Contribute to Fake API Hub</h1>
        <p className="text-xl text-ink-muted">
          Fake API Hub is built by the community, for the community. We welcome contributions from developers of all skill levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
          <div className="p-3 bg-brand-muted rounded-xl text-brand w-max mb-4">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-navy mb-2">New API Module</h3>
          <p className="text-ink-muted text-sm">Design and implement a complete mock API for a new business domain (e.g., Banking, Library, Real Estate).</p>
        </div>
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
          <div className="p-3 bg-brand-muted rounded-xl text-brand w-max mb-4">
            <Code className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-navy mb-2">New Resource</h3>
          <p className="text-ink-muted text-sm">Add missing resources or endpoints to existing API modules.</p>
        </div>
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
          <div className="p-3 bg-brand-muted rounded-xl text-brand w-max mb-4">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-navy mb-2">Mock Dataset</h3>
          <p className="text-ink-muted text-sm">Expand our static databases with more realistic, varied, and comprehensive mock records.</p>
        </div>
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
          <div className="p-3 bg-brand-muted rounded-xl text-brand w-max mb-4">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-navy mb-2">Documentation</h3>
          <p className="text-ink-muted text-sm">Improve endpoint descriptions, add more code examples, or fix typos in the docs.</p>
        </div>
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
          <div className="p-3 bg-brand-muted rounded-xl text-brand w-max mb-4">
            <CheckSquare className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-navy mb-2">Tests</h3>
          <p className="text-ink-muted text-sm">Help ensure our APIs return exactly what they promise by writing automated tests.</p>
        </div>
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm">
          <div className="p-3 bg-brand-muted rounded-xl text-brand w-max mb-4">
            <Bug className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-navy mb-2">Frontend & Bugs</h3>
          <p className="text-ink-muted text-sm">Fix UI issues, improve responsiveness, or enhance the overall user experience.</p>
        </div>
      </div>

      <div className="bg-navy text-surface rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <h2 className="text-3xl font-bold mb-8 relative z-10">Contribution Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <div>
            <span className="text-brand text-xl font-bold mb-2 block">01</span>
            <h4 className="font-semibold mb-2">Choose a Domain</h4>
            <p className="text-ink-inverse-muted text-sm">Pick a business domain from our "Coming Soon" list or propose a new one.</p>
          </div>
          <div>
            <span className="text-brand text-xl font-bold mb-2 block">02</span>
            <h4 className="font-semibold mb-2">Create Data Model</h4>
            <p className="text-ink-inverse-muted text-sm">Define the schema and create realistic mock JSON datasets.</p>
          </div>
          <div>
            <span className="text-brand text-xl font-bold mb-2 block">03</span>
            <h4 className="font-semibold mb-2">Build Endpoints</h4>
            <p className="text-ink-inverse-muted text-sm">Implement standard REST endpoints for the new resources.</p>
          </div>
          <div>
            <span className="text-brand text-xl font-bold mb-2 block">04</span>
            <h4 className="font-semibold mb-2">Create PR</h4>
            <p className="text-ink-inverse-muted text-sm">Submit a Pull Request on GitHub for review and merging.</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy mb-6">Ready to start?</h2>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-navy hover:bg-navy-elevated text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md"
        >
          <Github className="w-5 h-5" /> View on GitHub
        </a>
      </div>
    </div>
  );
}
