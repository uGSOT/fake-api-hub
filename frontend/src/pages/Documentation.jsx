export default function Documentation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h3 className="text-sm font-semibold text-ink-subtle uppercase tracking-wider mb-4 px-3">
            Documentation
          </h3>
          <nav className="space-y-1">
            <a href="#getting-started" className="block px-3 py-2 rounded-lg text-sm font-medium text-brand bg-brand-muted transition-colors">
              Getting Started
            </a>
            <a href="#what-is-fake-api-hub" className="block px-3 py-2 rounded-lg text-sm font-medium text-ink-muted hover:bg-surface-muted transition-colors">
              What is Fake API Hub?
            </a>
            <a href="#quick-start" className="block px-3 py-2 rounded-lg text-sm font-medium text-ink-muted hover:bg-surface-muted transition-colors">
              Quick Start
            </a>
            <a href="#api-structure" className="block px-3 py-2 rounded-lg text-sm font-medium text-ink-muted hover:bg-surface-muted transition-colors">
              API Structure
            </a>
            <a href="#authentication" className="block px-3 py-2 rounded-lg text-sm font-medium text-ink-muted hover:bg-surface-muted transition-colors">
              Authentication
            </a>
            <a href="#http-methods" className="block px-3 py-2 rounded-lg text-sm font-medium text-ink-muted hover:bg-surface-muted transition-colors">
              HTTP Methods
            </a>
            <a href="#status-codes" className="block px-3 py-2 rounded-lg text-sm font-medium text-ink-muted hover:bg-surface-muted transition-colors">
              Status Codes
            </a>
            <a href="#pagination" className="block px-3 py-2 rounded-lg text-sm font-medium text-ink-muted hover:bg-surface-muted transition-colors">
              Pagination
            </a>
            <a href="#filtering" className="block px-3 py-2 rounded-lg text-sm font-medium text-ink-muted hover:bg-surface-muted transition-colors">
              Filtering
            </a>
            <a href="#error-responses" className="block px-3 py-2 rounded-lg text-sm font-medium text-ink-muted hover:bg-surface-muted transition-colors">
              Error Responses
            </a>
          </nav>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 max-w-4xl prose prose-navy">
        <h1 className="text-4xl font-bold mb-8 text-navy" id="getting-started">Getting Started</h1>
        
        <section id="what-is-fake-api-hub" className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">What is Fake API Hub?</h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            Fake API Hub is a free, open-source platform that provides realistic mock REST APIs for different business domains. 
            It is designed to help frontend developers, mobile app developers, and students build and test their applications 
            without needing to wait for a backend team or create their own mock servers.
          </p>
        </section>

        <section id="quick-start" className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">Quick Start</h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            You don't need to install any packages or sign up for an account. Simply copy the endpoint URLs and start making requests using `fetch`, `axios`, or your preferred HTTP client.
          </p>
          <div className="bg-navy-elevated p-4 rounded-xl mb-4 text-surface font-mono text-sm overflow-x-auto">
            fetch('https://fake-api-hub.com/api/v1/hospital/doctors')<br/>
            &nbsp;&nbsp;.then(res =&gt; res.json())<br/>
            &nbsp;&nbsp;.then(console.log);
          </div>
        </section>

        <section id="api-structure" className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">API Structure</h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            All our APIs follow standard REST conventions. The base URL structure is:
          </p>
          <div className="bg-surface-muted border border-border p-4 rounded-xl mb-4 font-mono text-sm text-navy">
            https://fake-api-hub.com/api/v1/&#123;domain&#125;/&#123;resource&#125;
          </div>
        </section>

        <section id="authentication" className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">Authentication</h2>
          <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-xl mb-4">
            <strong>Authentication is not required</strong> for the current public mock APIs. You can access all endpoints freely without an API key or Bearer token.
          </div>
        </section>

        <section id="http-methods" className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">HTTP Methods</h2>
          <ul className="space-y-2 text-ink-muted">
            <li><strong className="text-navy">GET</strong> - Retrieve a resource or list of resources</li>
            <li><strong className="text-navy">POST</strong> - Create a new resource</li>
            <li><strong className="text-navy">PUT</strong> - Update an existing resource</li>
            <li><strong className="text-navy">DELETE</strong> - Remove a resource</li>
          </ul>
        </section>

        <section id="pagination" className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">Pagination</h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            List endpoints support pagination using `page` and `limit` query parameters.
          </p>
          <div className="bg-surface-muted border border-border p-4 rounded-xl mb-4 font-mono text-sm text-navy">
            GET /api/v1/hospital/doctors?page=2&amp;limit=10
          </div>
        </section>
      </div>
    </div>
  );
}
