import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Clock } from 'lucide-react';

export default function ApiCard({ api }) {
  const isActive = api.status === 'ACTIVE';

  return (
    <div className="bg-surface rounded-2xl border border-border p-6 hover:shadow-card-hover hover:border-brand/30 transition-all group flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-surface-muted rounded-xl text-brand group-hover:bg-brand-muted transition-colors">
          {api.icon || <Activity className="w-6 h-6" />}
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${
          isActive 
            ? 'bg-green-100 text-green-700' 
            : 'bg-surface-subtle text-ink-muted'
        }`}>
          {isActive ? <Activity className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
          {api.status === 'ACTIVE' ? 'ACTIVE' : 'COMING SOON'}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-navy mb-2">{api.name}</h3>
      <p className="text-ink-muted text-sm mb-6 flex-grow">{api.description}</p>
      
      {isActive ? (
        <Link 
          to={`/apis/${api.id}`}
          className="flex items-center text-brand font-medium hover:text-brand-dark transition-colors"
        >
          Explore API
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <span className="flex items-center text-ink-subtle font-medium cursor-not-allowed">
          Explore API
          <ArrowRight className="w-4 h-4 ml-2" />
        </span>
      )}
    </div>
  );
}
