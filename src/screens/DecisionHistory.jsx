import React from 'react';
import {
  ArrowLeft,
  History,
  CheckCircle2,
  XCircle,
  TrendingUp,
  TrendingDown,
  Zap,
  ArrowRight,
  ChevronRight,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const DecisionLog = ({ date, title, status, impact, result, colorClass }) => (
  <div className="flex gap-4 py-5 border-b border-white/5 last:border-0 group">
    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border border-opacity-20 flex-shrink-0 transition-transform group-hover:scale-105", colorClass.replace('text-', 'bg-').concat('/10'), colorClass.replace('text-', 'border-'))}>
       {status === 'success' ? <CheckCircle2 className={colorClass} size={20} /> : <Zap className={colorClass} size={20} />}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
         <h4 className="text-white font-bold text-sm leading-tight">{title}</h4>
         <span className="text-[9px] text-slate-600 font-black uppercase">{date}</span>
      </div>
      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">{impact}</p>
      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
         <p className="text-[11px] text-slate-300 leading-relaxed">
            <span className="text-white font-bold uppercase text-[9px] block mb-1">Outcome:</span>
            {result}
         </p>
      </div>
    </div>
  </div>
);

export default function DecisionHistory({ onBack }) {
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
           <History className="text-cyan-400" size={24} />
           <h1 className="text-3xl font-bold text-white">Histórico IA</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Rastreabilidade de Conselhos
        </p>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-2 gap-4">
         <Card className="p-4 bg-emerald-500/5 border-emerald-500/10">
            <p className="text-[9px] text-slate-500 uppercase font-black mb-1">Taxa de Acerto</p>
            <p className="text-2xl font-black text-white">92%</p>
         </Card>
         <Card className="p-4 bg-cyan-500/5 border-cyan-500/10">
            <p className="text-[9px] text-slate-500 uppercase font-black mb-1">Alpha Gerado</p>
            <p className="text-2xl font-black text-white">+ 4.8%</p>
         </Card>
      </div>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Log de Decisões</h3>
        <Card className="px-5">
           <DecisionLog
             date="15 Ago"
             title="Aporte IVVB11 (Resistência)"
             status="success"
             impact="Crescimento de Longo Prazo"
             result="O ativo valorizou 8.4% desde o conselho, superando o CDI no período em 240%."
             colorClass="text-emerald-400"
           />
           <DecisionLog
             date="02 Ago"
             title="Amortização BMW (Juros)"
             status="active"
             impact="Redução de Passivo"
             result="Economia projetada de R$ 12.400 em juros brutos. 42 parcelas eliminadas."
             colorClass="text-cyan-400"
           />
           <DecisionLog
             date="28 Jul"
             title="Venda PETR4 (Concentração)"
             status="success"
             impact="Controle de Risco"
             result="Evitou-se uma queda de 12% na semana seguinte devido a ruídos políticos."
             colorClass="text-gold"
           />
        </Card>
      </section>

      {/* AI Learning Progress */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-emerald-900/20 border-emerald-500/30 p-5">
         <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Treinamento do Modelo</p>
            <span className="text-xs font-black text-white">84%</span>
         </div>
         <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[84%] shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
         </div>
         <p className="text-[10px] text-slate-400 mt-3">A IA está calibrando suas sugestões baseada em 142 decisões tomadas.</p>
      </Card>
    </div>
  );
}
