import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-8xl font-bold text-navy mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-ink mb-6">API Not Found</h2>
      <p className="text-ink-muted mb-8 max-w-md">
        The API or page you're looking for doesn't exist.
      </p>
      <Link to="/apis" className="bg-brand hover:bg-brand-light text-white font-medium py-2 px-6 rounded-full transition-colors">
        Back to API Library
      </Link>
    </div>
  );
}
