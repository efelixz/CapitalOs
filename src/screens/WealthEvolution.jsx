import React from 'react';
import {
  ArrowLeft,
  TrendingUp,
  ChevronRight,
  Activity,
  ShieldCheck,
  Layers,
  Sparkles,
  Info,
  Calendar
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const BenchmarkRow = ({ label, value, colorClass }) => (
  <div className="flex items-center gap-3">
    <div className={cn("w-2 h-2 rounded-full", colorClass)}></div>
    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{label}:</span>
    <span className="text-xs font-black text-white">{value}</span>
  </div>
);

export default function WealthEvolution({ onBack }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Evolução</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Crescimento de Longo Prazo
        </p>
      </header>

      {/* Main Multi-Layer Area Chart Mini */}
      <Card className="p-0 overflow-hidden relative min-h-[300px]">
         <div className="p-6">
            <h3 className="text-white font-bold text-lg mb-2">Patrimônio Líquido</h3>
            <p className="text-4xl font-black text-white tracking-tighter">R$ 2.480.150</p>
            <div className="flex gap-4 mt-4">
               <BenchmarkRow label="CapitalOS" value="+12.4%" colorClass="bg-cyan-400" />
               <BenchmarkRow label="CDI" value="+8.2%" colorClass="bg-slate-600" />
            </div>
         </div>

         <div className="absolute bottom-0 left-0 right-0 h-48">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
               {/* Benchmarks */}
               <path d="M0 80 Q25 75 50 70 T100 60" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 2" />

               {/* Main Curve */}
               <path d="M0 90 C10 85 20 70 35 75 S50 50 70 60 S85 30 100 20" fill="none" stroke="#00f2ff" strokeWidth="3" className="drop-shadow-[0_0_10px_rgba(0,242,255,0.4)]" />
               <path d="M0 90 C10 85 20 70 35 75 S50 50 70 60 S85 30 100 20 V100 H0 Z" fill="url(#gradEvolution)" />
               <defs>
                 <linearGradient id="gradEvolution" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" style={{ stopColor: '#00f2ff', stopOpacity: 0.15 }} />
                   <stop offset="100%" style={{ stopColor: '#00f2ff', stopOpacity: 0 }} />
                 </linearGradient>
               </defs>
            </svg>
         </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Atribuição de Performance</h3>
        <Card className="px-5">
           <div className="py-4 border-b border-white/5 flex justify-between items-center">
              <div>
                 <p className="text-sm font-bold text-white">Renda Fixa</p>
                 <p className="text-[9px] text-slate-500 uppercase font-black">Contribuição de 45%</p>
              </div>
              <span className="text-emerald-400 font-black text-xs">+ 1.05%</span>
           </div>
           <div className="py-4 border-b border-white/5 flex justify-between items-center">
              <div>
                 <p className="text-sm font-bold text-white">Stocks (EUA)</p>
                 <p className="text-[9px] text-slate-500 uppercase font-black">Contribuição de 32%</p>
              </div>
              <span className="text-emerald-400 font-black text-xs">+ 2.40%</span>
           </div>
           <div className="py-4 flex justify-between items-center">
              <div>
                 <p className="text-sm font-bold text-white">Ações Brasil</p>
                 <p className="text-[9px] text-slate-500 uppercase font-black">Contribuição de 12%</p>
              </div>
              <span className="text-red-400 font-black text-xs">- 0.82%</span>
           </div>
        </Card>
      </section>

      {/* AI Forward Projection */}
      <Card variant="premium" className="bg-gradient-to-br from-indigo-900/20 to-slate-900/40 border-indigo-500/30 p-6 mb-10">
         <div className="flex gap-4 items-start">
            <Sparkles className="text-indigo-400 flex-shrink-0" size={24} />
            <div>
               <h4 className="text-white font-bold text-sm mb-1">Previsão 12 Meses</h4>
               <p className="text-xs text-slate-300 leading-relaxed">
                 Com base no beta da sua carteira atual e o fechamento da curva de juros, projetamos que seu patrimônio atinja <span className="text-white font-bold">R$ 2.74M</span> até Setembro de 2024.
               </p>
            </div>
         </div>
      </Card>
    </div>
  );
}
