import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category }) {
  const isActive = category.status === 'ACTIVE';

  return (
    <div className="bg-surface rounded-2xl border border-border p-6 hover:shadow-card-hover transition-all group flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-brand-muted rounded-xl text-brand">
          {category.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy">{category.name}</h3>
          <p className="text-xs text-ink-muted">{category.apiCount} APIs</p>
        </div>
      </div>
      
      <p className="text-ink-muted text-sm mb-6 flex-grow">{category.description}</p>
      
      <div className="mt-auto flex items-center justify-between">
        {isActive ? (
          <Link 
            to={category.link}
            className="text-brand font-medium hover:text-brand-dark transition-colors flex items-center text-sm"
          >
            Explore Category
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <span className="text-ink-subtle text-sm font-medium">Coming Soon</span>
        )}
      </div>
    </div>
  );
}
