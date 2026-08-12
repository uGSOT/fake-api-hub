import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import EndpointCard from '../components/EndpointCard';

export default function HospitalApiResource() {
  const { resource } = useParams();
  
  // Basic capitalization and formatting
  const resourceName = resource
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const getEndpoints = (res) => {
    const base = `/${res}`;
    return [
      {
        method: 'GET',
        path: base,
        summary: `Get all ${resourceName.toLowerCase()}`,
        description: `Returns a list of ${resourceName.toLowerCase()}.`,
        parameters: [
          { name: 'search', type: 'string', required: false, description: 'Search query' },
          { name: 'page', type: 'integer', required: false, description: 'Page number (default: 1)' },
          { name: 'limit', type: 'integer', required: false, description: 'Items per page (default: 10)' },
          ...(res === 'doctors' ? [{ name: 'specialization', type: 'string', required: false, description: 'Filter by specialization' }] : [])
        ]
      },
      {
        method: 'GET',
        path: `${base}/{id}`,
        summary: `Get ${resourceName.toLowerCase().slice(0, -1)} by ID`,
        description: `Returns a single ${resourceName.toLowerCase().slice(0, -1)} object based on the provided ID.`,
        parameters: []
      },
      // Adding POST/PUT/DELETE for some resources to show variety
      ...(['patients', 'appointments'].includes(res) ? [
        {
          method: 'POST',
          path: base,
          summary: `Create new ${resourceName.toLowerCase().slice(0, -1)}`,
          description: `Creates a new ${resourceName.toLowerCase().slice(0, -1)} record in the system.`,
          parameters: []
        },
        {
          method: 'PUT',
          path: `${base}/{id}`,
          summary: `Update ${resourceName.toLowerCase().slice(0, -1)}`,
          description: `Updates an existing ${resourceName.toLowerCase().slice(0, -1)} record.`,
          parameters: []
        },
        {
          method: 'DELETE',
          path: `${base}/{id}`,
          summary: `Delete ${resourceName.toLowerCase().slice(0, -1)}`,
          description: `Removes a ${resourceName.toLowerCase().slice(0, -1)} record from the system.`,
          parameters: []
        }
      ] : [])
    ];
  };

  const endpoints = getEndpoints(resource);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-ink-muted mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 whitespace-nowrap overflow-x-auto pb-2">
          <li className="inline-flex items-center">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <Link to="/apis" className="hover:text-brand transition-colors">APIs</Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <Link to="/apis/hospital" className="hover:text-brand transition-colors">Hospital API</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-ink font-medium">{resourceName}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex flex-col md:flex-row">
        <Sidebar />
        
        <div className="flex-1 min-w-0">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">{resourceName}</h1>
            <p className="text-lg text-ink-muted">
              Endpoints for managing {resourceName.toLowerCase()} within the hospital system.
            </p>
          </div>
          
          <div className="space-y-6">
            {endpoints.map((ep, idx) => (
              <EndpointCard 
                key={`${ep.method}-${ep.path}-${idx}`} 
                endpoint={ep} 
                resource={resource.replace('-', '')} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
