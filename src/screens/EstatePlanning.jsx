import React from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Scale,
  FileText,
  History,
  AlertTriangle,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const LegacyItem = ({ title, description, status, impact }) => (
  <div className="py-5 border-b border-white/5 last:border-0 group cursor-pointer">
     <div className="flex justify-between items-start mb-2">
        <h4 className="text-white font-bold text-sm leading-tight pr-10">{title}</h4>
        <span className={cn("text-[8px] font-black uppercase px-2 py-1 rounded", status === 'good' ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400")}>
           {status === 'good' ? 'Protegido' : 'Risco'}
        </span>
     </div>
     <p className="text-xs text-slate-500 leading-relaxed mb-3">{description}</p>
     <div className="flex items-center gap-2">
        <span className="text-[9px] text-slate-700 font-black uppercase tracking-widest">Impacto:</span>
        <span className="text-[9px] text-slate-400 font-bold uppercase">{impact}</span>
     </div>
  </div>
);

export default function EstatePlanning({ onBack }) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-4"
        >
          <ArrowLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar</span>
        </button>
        <div className="flex items-center gap-3 mb-2">
           <Scale className="text-cyan-400" size={24} />
           <h1 className="text-3xl font-bold text-white">Sucessão</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Blindagem de Legado
        </p>
      </header>

      {/* Hero Succession Cost */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-indigo-900/20 border-indigo-500/30 p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em] mb-4">Custo de Inventário Estimado</p>
          <h2 className="text-5xl font-black text-white tracking-tighter mb-2">R$ 385k</h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
            Este valor será drenado do seu patrimônio em impostos (ITCMD) e taxas caso não utilize uma <span className="text-white font-bold">Holding Familiar</span>.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4 px-1">Checklist de Blindagem</h3>
        <Card className="px-5">
           <LegacyItem
             title="Estrutura de Holding"
             description="Centralização de ativos imobiliários para evitar inventário judicial longo."
             status="risk"
             impact="Eficiência Tributária"
           />
           <LegacyItem
             title="Seguro de Vida (Liquidez)"
             description="R$ 500k disponíveis para cobrir custos de transição sem travar o caixa."
             status="good"
             impact="Paz Familiar"
           />
           <LegacyItem
             title="Cláusulas de Inalienabilidade"
             description="Proteção contra dilapidação de patrimônio por terceiros."
             status="risk"
             impact="Proteção de Ativos"
           />
        </Card>
      </section>

      {/* AI Recommendation */}
      <Card variant="insight" className="border-l-4 border-cyan-500 py-6 mb-10">
        <div className="flex gap-4">
           <Sparkles className="text-cyan-400 flex-shrink-0" size={24} />
           <div>
              <h4 className="text-white font-bold">Conselho Estratégico</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Sua exposição internacional (<span className="text-white font-bold">32%</span>) requer um <span className="text-white font-bold">Offshore Trust</span> para evitar impostos sucessórios nos EUA que podem chegar a 40%.
              </p>
              <button className="text-[10px] font-black text-cyan-400 uppercase tracking-widest flex items-center gap-2">Falar com Especialista <ArrowRight size={12} /></button>
           </div>
        </div>
      </Card>
    </div>
  );
}
