import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apis, categories } from '../data/apiData';
import ApiCard from '../components/ApiCard';
import { Search } from 'lucide-react';

export default function ApiLibrary() {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) {
      setSearch(q);
    }
  }, [searchParams]);

  const filteredApis = apis.filter(api => {
    const matchesFilter = filter === 'All' || api.categoryId === filter;
    const matchesSearch = api.name.toLowerCase().includes(search.toLowerCase()) || 
                          api.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-navy">API Library</h1>
        <p className="text-ink-muted text-lg">Explore mock APIs for different business domains.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="w-full md:w-1/3 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-ink-subtle" />
          </div>
          <input 
            type="text" 
            placeholder="Search APIs..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-surface shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          />
        </div>
        
        <div className="w-full md:w-2/3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          <div className="flex space-x-2">
            <button 
              onClick={() => setFilter('All')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'All' ? 'bg-navy text-surface' : 'bg-surface-muted text-ink-muted hover:bg-surface-subtle'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat.id ? 'bg-navy text-surface' : 'bg-surface-muted text-ink-muted hover:bg-surface-subtle'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredApis.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApis.map(api => (
            <ApiCard key={api.id} api={api} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-surface-muted rounded-2xl border border-border">
          <h3 className="text-xl font-semibold text-navy mb-2">No APIs Found</h3>
          <p className="text-ink-muted mb-6">Try searching for another API or category.</p>
          <button 
            onClick={() => {setFilter('All'); setSearch('');}}
            className="bg-brand text-white px-6 py-2 rounded-full hover:bg-brand-light transition-colors"
          >
            Browse All APIs
          </button>
        </div>
      )}
    </div>
  );
}
