import { Link } from 'react-router-dom';
import { Stethoscope, Activity, Server, FileJson, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HospitalApiMain() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-ink-muted mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <Link to="/apis" className="hover:text-brand transition-colors">APIs</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-ink font-medium">Hospital API</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border mb-12 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-brand-muted rounded-xl text-brand">
                <Stethoscope className="w-8 h-8" />
              </div>
              <span className="text-brand font-semibold tracking-wider uppercase text-sm">Healthcare</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Hospital API</h1>
            <p className="text-xl text-ink-muted max-w-2xl mb-8">
              A realistic mock REST API for building and testing hospital and healthcare applications. 
              Manage doctors, patients, appointments, and medical records.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-surface-muted border border-border rounded-full text-sm font-medium text-ink flex items-center gap-2">
                <Server className="w-4 h-4 text-ink-subtle" /> REST API
              </span>
              <span className="px-4 py-1.5 bg-surface-muted border border-border rounded-full text-sm font-medium text-ink flex items-center gap-2">
                v1.0
              </span>
              <span className="px-4 py-1.5 bg-surface-muted border border-border rounded-full text-sm font-medium text-ink flex items-center gap-2">
                <FileJson className="w-4 h-4 text-ink-subtle" /> JSON
              </span>
              <span className="px-4 py-1.5 bg-green-50 border border-green-200 rounded-full text-sm font-medium text-green-700 flex items-center gap-2">
                <Activity className="w-4 h-4" /> Active
              </span>
            </div>
          </div>
          
          <div className="bg-navy rounded-2xl p-6 text-surface w-full md:w-auto shadow-card min-w-[300px]">
            <h3 className="font-semibold mb-2">Base URL</h3>
            <div className="flex bg-navy-elevated rounded-lg p-3 border border-border-dark mb-4 items-center justify-between group">
              <code className="text-sm text-ink-inverse-muted font-mono truncate mr-4">
                https://fake-api-hub.com/api/v1/hospital
              </code>
              <button 
                className="text-brand hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText('https://fake-api-hub.com/api/v1/hospital')}
                title="Copy URL"
              >
                Copy
              </button>
            </div>
            <Link 
              to="/apis/hospital/doctors" 
              className="w-full flex items-center justify-center bg-brand hover:bg-brand-light text-white font-medium py-3 rounded-xl transition-colors"
            >
              Explore Endpoints
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <h2 className="text-2xl font-bold text-navy mb-6">API Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-brand mb-2">6</span>
          <span className="text-ink-muted font-medium">Resources</span>
        </div>
        <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-navy mb-2">24</span>
          <span className="text-ink-muted font-medium">Endpoints</span>
        </div>
        <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-navy mb-2">JSON</span>
          <span className="text-ink-muted font-medium">Format</span>
        </div>
        <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-bold text-navy mb-2">REST</span>
          <span className="text-ink-muted font-medium">Architecture</span>
        </div>
      </div>

      {/* Available Resources */}
      <h2 className="text-2xl font-bold text-navy mb-6">Available Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['Doctors', 'Patients', 'Departments', 'Appointments', 'Medicines', 'Medical Records'].map((res) => (
          <Link 
            key={res} 
            to={`/apis/hospital/${res.toLowerCase().replace(' ', '-')}`}
            className="flex items-center justify-between bg-surface p-5 rounded-xl border border-border hover:border-brand/50 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand" />
              <span className="font-semibold text-navy group-hover:text-brand transition-colors">{res}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-ink-subtle group-hover:text-brand group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}
