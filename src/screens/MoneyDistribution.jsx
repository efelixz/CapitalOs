import React, { useState } from 'react';
import {
  ArrowLeft,
  PieChart,
  TrendingUp,
  Wallet,
  Zap,
  Layers,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const BucketSlider = ({ label, value, colorClass, onChange }) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <div className={cn("w-2 h-2 rounded-full", colorClass)}></div>
        <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{label}</span>
      </div>
      <span className="text-sm font-black text-white">{value}%</span>
    </div>
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className={cn("w-full h-1.5 rounded-full appearance-none cursor-pointer bg-slate-800", colorClass.replace('bg-', 'accent-'))}
    />
  </div>
);

export default function MoneyDistribution({ onBack }) {
  const [buckets, setBuckets] = useState({
    essential: 45,
    strategic: 25,
    investment: 30
  });

  const income = 15000;

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
        <h1 className="text-3xl font-bold text-white mb-2">Distribuição</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Arquitetura do seu Capital
        </p>
      </header>

      {/* Visualizer Chart */}
      <Card className="py-10 flex flex-col items-center relative overflow-hidden">
        <div className="relative w-56 h-56 flex items-center justify-center">
           <svg className="w-full h-full -rotate-90">
             <circle cx="112" cy="112" r="90" fill="none" stroke="currentColor" strokeWidth="12" className="text-slate-800" />
             {/* Strategic */}
             <circle cx="112" cy="112" r="90" fill="none" stroke="#fbbf24" strokeWidth="12" strokeDasharray="565.5" strokeDashoffset={565.5 * (1 - (buckets.strategic + buckets.investment + buckets.essential) / 100)} className="transition-all duration-500" />
             {/* Investment */}
             <circle cx="112" cy="112" r="90" fill="none" stroke="#00f2ff" strokeWidth="12" strokeDasharray="565.5" strokeDashoffset={565.5 * (1 - (buckets.investment + buckets.essential) / 100)} className="transition-all duration-500" />
             {/* Essential */}
             <circle cx="112" cy="112" r="90" fill="none" stroke="#6366f1" strokeWidth="12" strokeDasharray="565.5" strokeDashoffset={565.5 * (1 - buckets.essential / 100)} className="transition-all duration-500" />
           </svg>
           <div className="absolute text-center">
             <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Total Mensal</p>
             <p className="text-3xl font-black text-white">R$ {income.toLocaleString('pt-BR')}</p>
           </div>
        </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 px-1">Ajuste de Fluxo</h3>
        <Card className="p-6">
          <BucketSlider
            label="Essencial (Gastos Fixos)"
            value={buckets.essential}
            colorClass="bg-indigo-500"
            onChange={(v) => setBuckets({...buckets, essential: v})}
          />
          <BucketSlider
            label="Estratégico (Reserva/Dívida)"
            value={buckets.strategic}
            colorClass="bg-gold"
            onChange={(v) => setBuckets({...buckets, strategic: v})}
          />
          <BucketSlider
            label="Investimento (Futuro)"
            value={buckets.investment}
            colorClass="bg-cyan-500"
            onChange={(v) => setBuckets({...buckets, investment: v})}
          />
        </Card>
      </section>

      {/* AI Recommendation */}
      <Card variant="premium" className="bg-gradient-to-br from-indigo-900/20 to-slate-900/40 border-indigo-500/30">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-indigo-400" size={20} />
          <h4 className="text-white font-bold text-sm">Distribuição Sugerida</h4>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-6">
          Dada sua renda variável como PJ, recomendamos aumentar o bucket <span className="text-gold font-bold">Estratégico</span> para 35% até que sua reserva cubra 8 meses.
        </p>
        <button className="w-full py-4 rounded-2xl bg-indigo-500 text-white font-black text-xs uppercase tracking-widest hover:bg-indigo-400 transition-all">
          Aplicar Sugestão CapitalOS
        </button>
      </Card>
    </div>
  );
}
