import { useState } from 'react';
import CodeBlock from './CodeBlock';
import Playground from './Playground';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function EndpointCard({ endpoint, resource }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cURL');

  const getMethodColor = (method) => {
    switch(method) {
      case 'GET': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'POST': return 'bg-green-100 text-green-700 border-green-200';
      case 'PUT': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'DELETE': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const cUrlExample = `curl https://fake-api-hub.com/api/v1/hospital${endpoint.path}`;
  const jsExample = `fetch("https://fake-api-hub.com/api/v1/hospital${endpoint.path}")\n  .then(response => response.json())\n  .then(data => console.log(data));`;
  const pyExample = `import requests\n\nresponse = requests.get(\n    "https://fake-api-hub.com/api/v1/hospital${endpoint.path}"\n)\n\nprint(response.json())`;

  return (
    <div className="mb-6 bg-surface border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-surface-muted transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
          <span className={`px-3 py-1 text-xs font-bold rounded-md border ${getMethodColor(endpoint.method)}`}>
            {endpoint.method}
          </span>
          <span className="font-mono text-sm md:text-base text-navy truncate">
            {endpoint.path}
          </span>
          <span className="text-sm text-ink-muted hidden md:block">
            {endpoint.summary}
          </span>
        </div>
        <div className="flex items-center gap-4 ml-2 flex-shrink-0">
          <span className="text-brand text-sm font-medium hidden sm:block">
            {isOpen ? 'Close' : 'View Docs'}
          </span>
          {isOpen ? <ChevronUp className="w-5 h-5 text-ink-subtle" /> : <ChevronDown className="w-5 h-5 text-ink-subtle" />}
        </div>
      </div>

      {isOpen && (
        <div className="p-6 border-t border-border bg-surface-subtle/30">
          <p className="text-ink-muted mb-6">{endpoint.description}</p>
          
          {endpoint.parameters && endpoint.parameters.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-bold text-navy mb-4">Parameters</h4>
              <div className="overflow-x-auto rounded-xl border border-border bg-surface">
                <table className="w-full text-left text-sm">
                  <thead className="bg-surface-muted border-b border-border">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-navy">Parameter</th>
                      <th className="px-4 py-3 font-semibold text-navy">Type</th>
                      <th className="px-4 py-3 font-semibold text-navy">Required</th>
                      <th className="px-4 py-3 font-semibold text-navy">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {endpoint.parameters.map((param, i) => (
                      <tr key={i} className="hover:bg-surface-muted/50 transition-colors">
                        <td className="px-4 py-3 font-mono text-xs font-medium text-navy">{param.name}</td>
                        <td className="px-4 py-3 text-ink-muted">{param.type}</td>
                        <td className="px-4 py-3 text-ink-muted">{param.required ? 'Yes' : 'No'}</td>
                        <td className="px-4 py-3 text-ink">{param.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h4 className="text-lg font-bold text-navy mb-4">Example Request</h4>
            <div className="flex gap-2 mb-2">
              <button 
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${activeTab === 'cURL' ? 'bg-navy text-surface' : 'bg-surface border border-border text-ink-muted hover:bg-surface-muted'}`}
                onClick={() => setActiveTab('cURL')}
              >
                cURL
              </button>
              <button 
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${activeTab === 'JavaScript' ? 'bg-navy text-surface' : 'bg-surface border border-border text-ink-muted hover:bg-surface-muted'}`}
                onClick={() => setActiveTab('JavaScript')}
              >
                JavaScript
              </button>
              <button 
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${activeTab === 'Python' ? 'bg-navy text-surface' : 'bg-surface border border-border text-ink-muted hover:bg-surface-muted'}`}
                onClick={() => setActiveTab('Python')}
              >
                Python
              </button>
            </div>
            {activeTab === 'cURL' && <CodeBlock code={cUrlExample} language="bash" />}
            {activeTab === 'JavaScript' && <CodeBlock code={jsExample} language="javascript" />}
            {activeTab === 'Python' && <CodeBlock code={pyExample} language="python" />}
          </div>

          <Playground endpoint={endpoint} resource={resource} />
        </div>
      )}
    </div>
  );
}
