import { NavLink } from 'react-router-dom';

const resources = [
  'Doctors',
  'Patients',
  'Departments',
  'Appointments',
  'Medicines',
  'Medical Records'
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-r border-border pb-6 md:pb-0 md:pr-6">
      <h3 className="text-sm font-semibold text-ink-subtle uppercase tracking-wider mb-4 px-3">
        Hospital API
      </h3>
      <nav className="space-y-1">
        <NavLink 
          to="/apis/hospital" 
          end
          className={({ isActive }) => 
            `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive 
                ? 'bg-brand-muted text-brand' 
                : 'text-ink-muted hover:bg-surface-muted hover:text-ink'
            }`
          }
        >
          Overview
        </NavLink>
        
        <div className="pt-4 pb-2">
          <h4 className="text-xs font-semibold text-ink-subtle uppercase tracking-wider px-3 mb-2">
            Resources
          </h4>
          {resources.map(res => {
            const path = `/apis/hospital/${res.toLowerCase().replace(' ', '-')}`;
            return (
              <NavLink 
                key={res} 
                to={path}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-brand-muted text-brand' 
                      : 'text-ink-muted hover:bg-surface-muted hover:text-ink'
                  }`
                }
              >
                {res}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
