import React from 'react';
import {
  ArrowLeft,
  TrendingUp,
  Calendar,
  ChevronRight,
  Info,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  Sparkles
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const DividendBar = ({ month, value, max }) => {
  const height = (value / max) * 100;
  return (
    <div className="flex-1 flex flex-col items-center gap-3">
      <div className="flex-1 w-full bg-white/5 rounded-t-lg relative overflow-hidden flex flex-col justify-end">
        <div
          className="w-full bg-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded-t-lg transition-all duration-1000"
          style={{ height: `${height}%` }}
        ></div>
      </div>
      <span className="text-[8px] text-slate-600 font-black uppercase">{month}</span>
    </div>
  );
};

export default function DividendTracker({ onBack }) {
  const data = [
    { m: 'MAR', v: 1200 }, { m: 'ABR', v: 1800 }, { m: 'MAI', v: 1450 },
    { m: 'JUN', v: 2100 }, { m: 'JUL', v: 2840 }, { m: 'AGO', v: 3450 }
  ];

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
        <h1 className="text-3xl font-bold text-white mb-2">Dividendos</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Renda Passiva Mensal
        </p>
      </header>

      {/* Hero Passive Income */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-emerald-900/20 border-emerald-500/30 p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] text-emerald-400 font-black uppercase tracking-[0.2em] mb-4">Total Recebido (Mês)</p>
          <h2 className="text-5xl font-black text-white tracking-tighter mb-2">R$ 3.450</h2>
          <div className="flex items-center justify-center gap-2">
             <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Yield on Cost (YOC):</span>
             <span className="text-xs font-black text-emerald-400">8.4% a.a.</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)]"></div>
      </Card>

      {/* Bar Chart */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 px-1">Evolução de Proventos</h3>
        <Card className="h-48 p-6 flex gap-3 items-end">
           {data.map((d, i) => (
             <DividendBar key={i} month={d.m} value={d.v} max={3500} />
           ))}
        </Card>
      </section>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Top Pagadores (Setembro)</h3>
        <Card className="px-5">
           {[
             { name: 'CPTS11', amount: 840, type: 'FII', color: 'bg-emerald-500' },
             { name: 'PETR4', amount: 1250, type: 'Ações', color: 'bg-indigo-500' },
             { name: 'KNIP11', amount: 620, type: 'FII', color: 'bg-emerald-500' }
           ].map((item, i) => (
             <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-3">
                   <div className={cn("w-1.5 h-8 rounded-full", item.color)}></div>
                   <div>
                      <p className="text-sm font-bold text-white">{item.name}</p>
                      <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{item.type}</p>
                   </div>
                </div>
                <p className="text-sm font-black text-white">R$ {item.amount.toLocaleString('pt-BR')}</p>
             </div>
           ))}
        </Card>
      </section>

      {/* AI Reinvestment Strategy */}
      <Card variant="insight" className="border-l-4 border-cyan-500 py-6 mb-10">
        <div className="flex gap-4">
           <Sparkles className="text-cyan-400 flex-shrink-0" size={24} />
           <div>
             <h4 className="text-white font-bold">Estratégia de Reinvestimento</h4>
             <p className="text-xs text-slate-300 leading-relaxed">
               Seu yield este mês ultrapassou seu <span className="text-white font-bold">Custo de Vida Essencial</span>. Recomendamos reinvestir 100% no Tesouro IPCA+ p/ acelerar o Juro Composto.
             </p>
           </div>
        </div>
      </Card>
    </div>
  );
}
