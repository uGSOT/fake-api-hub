import { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

export default function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden bg-navy-elevated border border-border-dark">
      <div className="flex justify-between items-center px-4 py-2 bg-navy border-b border-border-dark">
        <span className="text-xs text-ink-inverse-muted font-mono">{language}</span>
        <button 
          onClick={handleCopy}
          className="text-ink-inverse-muted hover:text-white transition-colors p-1"
          title="Copy code"
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-sm font-mono text-surface">
        <pre className="whitespace-pre-wrap word-break-all">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
