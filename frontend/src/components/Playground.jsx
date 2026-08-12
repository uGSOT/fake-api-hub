import { useState } from 'react';
import CodeBlock from './CodeBlock';
import { apiService } from '../services/apiService';
import { Play } from 'lucide-react';

export default function Playground({ endpoint, resource }) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [activeTab, setActiveTab] = useState('Response');

  const handleSend = async () => {
    setLoading(true);
    setResponse(null);
    try {
      let res;
      if (endpoint.path.includes('{id}')) {
        res = await apiService.getHospitalResourceById(resource, 1);
      } else {
        res = await apiService.getHospitalResource(resource);
      }
      setResponse(res);
    } catch (err) {
      setResponse({ status: 404, error: err.message });
    }
    setLoading(false);
  };

  return (
    <div className="mt-6 border border-border rounded-xl bg-surface overflow-hidden shadow-sm">
      <div className="bg-surface-muted px-4 py-3 border-b border-border flex items-center justify-between">
        <h4 className="font-semibold text-navy flex items-center gap-2">
          <Play className="w-4 h-4 text-brand" /> Try API
        </h4>
        <div className="text-sm font-mono bg-navy text-surface px-3 py-1 rounded-md">
          {endpoint.method} {endpoint.path}
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        {endpoint.parameters && endpoint.parameters.length > 0 && (
          <div className="mb-6">
            <h5 className="text-sm font-semibold text-ink-muted mb-3 uppercase tracking-wider">Query Parameters</h5>
            <div className="space-y-3">
              {endpoint.parameters.map((param, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-sm font-medium text-navy w-32">{param.name}</label>
                  <input 
                    type="text" 
                    placeholder={param.type}
                    className="flex-grow px-3 py-2 text-sm border border-border rounded-lg bg-surface-muted focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        <button 
          onClick={handleSend}
          disabled={loading}
          className="w-full sm:w-auto bg-brand hover:bg-brand-light text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Request'}
        </button>
      </div>
      
      {(response || loading) && (
        <div className="border-t border-border bg-navy-elevated rounded-b-xl overflow-hidden">
          <div className="flex border-b border-border-dark px-2 pt-2">
            <button 
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'Response' ? 'border-brand text-white' : 'border-transparent text-ink-inverse-muted hover:text-white'}`}
              onClick={() => setActiveTab('Response')}
            >
              Response
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'Headers' ? 'border-brand text-white' : 'border-transparent text-ink-inverse-muted hover:text-white'}`}
              onClick={() => setActiveTab('Headers')}
            >
              Headers
            </button>
          </div>
          <div className="p-4">
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-border-dark rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-border-dark rounded"></div>
                    <div className="h-4 bg-border-dark rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            ) : activeTab === 'Response' ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 text-xs font-bold rounded ${response?.status === 200 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    Status: {response?.status} {response?.status === 200 ? 'OK' : 'Not Found'}
                  </span>
                </div>
                <CodeBlock code={JSON.stringify(response?.data, null, 2)} language="json" />
              </div>
            ) : (
              <CodeBlock code={'{\n  "content-type": "application/json",\n  "cache-control": "no-cache"\n}'} language="json" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
