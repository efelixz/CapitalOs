import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  TrendingUp,
  Wallet,
  Target,
  Zap,
  Activity,
  History,
  MessageSquare,
  ChevronRight,
  Globe,
  Sparkles
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const SearchResult = ({ icon: Icon, title, category, onClick, colorClass }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between py-4 border-b border-white/5 last:border-0 group"
  >
    <div className="flex items-center gap-4">
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border border-opacity-10", colorClass.replace('text-', 'bg-').concat('/10'), colorClass.replace('text-', 'border-'))}>
        <Icon className={colorClass} size={18} />
      </div>
      <div className="text-left">
        <h4 className="text-white font-bold text-sm leading-tight">{title}</h4>
        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">{category}</p>
      </div>
    </div>
    <ChevronRight size={16} className="text-slate-700 group-hover:text-white transition-colors" />
  </button>
);

export default function GlobalSearch({ onBack, onNavigate }) {
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 relative">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" size={18} />
           <input
             autoFocus
             type="text"
             value={query}
             onChange={(e) => setQuery(e.target.value)}
             placeholder="Buscar ativos, telas ou conselhos..."
             className="w-full bg-white/5 border border-cyan-500/30 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.1)]"
           />
        </div>
      </header>

      {/* Suggested Topics */}
      {!query && (
        <section className="px-1">
          <h3 className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] mb-6">Tópicos Sugeridos</h3>
          <div className="flex flex-wrap gap-2">
            {['PETR4', 'Visto D7', 'Amortização', 'Health Score', 'PGBL', 'Nasdaq'].map(topic => (
              <button key={topic} onClick={() => setQuery(topic)} className="px-4 py-2 rounded-full bg-slate-900 border border-white/5 text-[10px] text-slate-400 font-bold hover:bg-slate-800 transition-all">
                {topic}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="px-2">
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Resultados</h3>
        <Card className="px-5">
           <SearchResult icon={TrendingUp} title="PETR4 - Petrobras PN" category="Ativos • B3" colorClass="text-emerald-400" />
           <SearchResult icon={Globe} title="Portugal D7" category="Mobilidade • Visto" colorClass="text-indigo-400" />
           <SearchResult icon={Zap} title="Amortização BMW" category="Dívida • Estratégia" colorClass="text-cyan-400" />
           <SearchResult icon={Target} title="Reserva de Emergência" category="Metas • 75%" colorClass="text-emerald-400" />
           <SearchResult icon={MessageSquare} title="Conversas sobre CDI" category="Concierge • Histórico" colorClass="text-slate-400" />
        </Card>
      </section>

      {/* AI Search Assistant */}
      <Card variant="premium" className="bg-slate-900/40 border-white/5 p-6 mb-10 flex gap-4">
         <Sparkles className="text-cyan-400 flex-shrink-0" size={24} />
         <div>
            <h4 className="text-white font-bold text-sm">IA Predictive Search</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
               Nossa IA aprendeu com suas últimas buscas. Você parece interessado em <span className="text-white font-bold">Dividend Yield</span>. Gostaria de ver o mapa de proventos?
            </p>
         </div>
      </Card>
    </div>
  );
}
