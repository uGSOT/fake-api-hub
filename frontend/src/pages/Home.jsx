import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import ApiCard from '../components/ApiCard';
import { categories, apis } from '../data/apiData';
import { Search, Code, CheckCircle, Copy, Terminal } from 'lucide-react';

export default function Home() {
  const featuredApis = apis.slice(0, 6);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/apis?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center max-w-7xl mx-auto w-full">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-navy">
          Build Faster with <br className="hidden md:block" />
          <span className="text-brand">Ready-to-Use Mock APIs</span>
        </h1>
        <p className="text-xl text-ink-muted max-w-2xl mx-auto mb-10">
          Explore free mock REST APIs for real-world applications.
          Build and test your frontend without waiting for a backend.
        </p>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-ink-subtle" />
          </div>
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search APIs, resources..." 
            className="w-full pl-14 pr-6 py-4 rounded-full border border-border text-lg shadow-card hover:shadow-card-hover focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-surface"
          />
        </form>
        <div className="flex justify-center flex-wrap gap-2 text-sm text-ink-subtle items-center">
          <span>Popular searches:</span>
          <Link to="/apis/hospital" className="text-ink-muted font-medium hover:underline">Hospital</Link>
          <span className="text-ink-muted">Food</span>
          <span className="text-ink-muted">College</span>
          <span className="text-ink-muted">Transport</span>
          <span className="text-ink-muted">E-commerce</span>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-surface-muted px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-2">Explore API Categories</h2>
              <p className="text-ink-muted">Find the perfect mock data for your specific domain.</p>
            </div>
            <Link to="/categories" className="hidden md:inline-flex text-brand font-medium hover:text-brand-dark">
              View all categories &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/categories" className="text-brand font-medium hover:text-brand-dark">
              View all categories &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured APIs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-2">Popular APIs</h2>
              <p className="text-ink-muted">Start building immediately with these ready-to-use APIs.</p>
            </div>
            <Link to="/apis" className="hidden md:inline-flex text-brand font-medium hover:text-brand-dark">
              View all APIs &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApis.map(api => (
              <ApiCard key={api.id} api={api} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-navy text-surface px-4 relative overflow-hidden">
        {/* Abstract shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand/10 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-ink-inverse-muted max-w-2xl mx-auto">Get up and running with realistic mock data in four simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-surface/10 flex items-center justify-center text-brand text-2xl font-bold mb-6">01</div>
              <h3 className="text-xl font-bold mb-2">Find an API</h3>
              <p className="text-ink-inverse-muted text-sm">Search our catalog for the domain you need.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-surface/10 flex items-center justify-center text-brand text-2xl font-bold mb-6">02</div>
              <h3 className="text-xl font-bold mb-2">Explore the docs</h3>
              <p className="text-ink-inverse-muted text-sm">Read the structured documentation and schemas.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-surface/10 flex items-center justify-center text-brand text-2xl font-bold mb-6">03</div>
              <h3 className="text-xl font-bold mb-2">Test the endpoint</h3>
              <p className="text-ink-inverse-muted text-sm">Use our built-in playground to try requests.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-surface/10 flex items-center justify-center text-brand text-2xl font-bold mb-6">04</div>
              <h3 className="text-xl font-bold mb-2">Copy and build</h3>
              <p className="text-ink-inverse-muted text-sm">Copy the endpoint URL and start coding your UI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-brand text-white rounded-3xl p-10 md:p-16 shadow-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Build without waiting for a backend.</h2>
          <p className="text-brand-muted text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Explore realistic mock APIs designed for frontend development and testing. 
            Stop writing mock JSON files and start building features.
          </p>
          <Link to="/apis" className="inline-block bg-white text-brand font-bold py-4 px-10 rounded-full hover:bg-surface-muted transition-colors shadow-lg relative z-10">
            Explore APIs
          </Link>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-surface-muted px-4 border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4">Built by the Community</h2>
          <p className="text-ink-muted mb-8">
            Help expand Fake API Hub by contributing new APIs, datasets, documentation and tests. 
            Perfect for students and open-source beginners.
          </p>
          <Link to="/contribute" className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Contribute to Fake API Hub
          </Link>
        </div>
      </section>
    </div>
  );
}
