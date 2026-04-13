import React, { useState } from 'react';
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownLeft,
  Calendar,
  Filter,
  BarChart3,
  ChevronRight,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const FlowBar = ({ label, value, type }) => (
  <div className="flex-1">
    <div className="flex items-center gap-1.5 mb-2">
       <div className={cn("w-1.5 h-1.5 rounded-full", type === 'in' ? "bg-emerald-400" : "bg-red-400")}></div>
       <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{label}</span>
    </div>
    <p className="text-sm font-black text-white">R$ {value.toLocaleString('pt-BR')}</p>
  </div>
);

export default function CashFlow({ onBack }) {
  const [period, setPeriod] = useState('Mensal');

  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1 flex justify-between items-end">
        <div>
          <button
            onClick={onBack}
            className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-4"
          >
            <ArrowLeft size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Voltar</span>
          </button>
          <h1 className="text-3xl font-bold text-white mb-2">Fluxo de Caixa</h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
            Dinâmica Financeira
          </p>
        </div>
        <div className="flex gap-2 mb-2">
           <button className="p-2.5 bg-slate-900 border border-white/5 rounded-xl text-slate-400">
             <Filter size={20} />
           </button>
        </div>
      </header>

      {/* Hero Balance Chart */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-indigo-900/20 border-indigo-500/30 p-6">
        <div className="flex justify-between items-start mb-8">
           <div>
              <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-1">Saldo Projetado (30d)</p>
              <h3 className="text-3xl font-black text-white">R$ 18.420</h3>
           </div>
           <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <TrendingUp className="text-emerald-400" size={20} />
           </div>
        </div>

        <div className="h-32 flex items-end gap-1 mb-6">
           {[30, 45, 38, 52, 60, 48, 70, 85, 80, 95, 100, 90].map((h, i) => (
             <div
               key={i}
               className={cn(
                 "flex-1 rounded-t-sm transition-all duration-700",
                 i >= 8 ? "bg-cyan-500/40 border-t border-cyan-400" : "bg-white/5"
               )}
               style={{ height: `${h}%` }}
             ></div>
           ))}
        </div>
        <div className="flex justify-between text-[8px] text-slate-600 font-black uppercase tracking-widest">
           <span>01 Set</span>
           <span className="text-cyan-400">Projeção 30 Set</span>
        </div>
      </Card>

      {/* In vs Out Summary */}
      <div className="flex gap-4 px-1">
         <Card className="flex-1 bg-emerald-500/5 border-emerald-500/10 p-4">
            <FlowBar label="Faturamento" value={18450} type="in" />
         </Card>
         <Card className="flex-1 bg-red-500/5 border-red-500/10 p-4">
            <FlowBar label="Despesas" value={5650} type="out" />
         </Card>
      </div>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Faturamento PJ vs CLT</h3>
        <Card className="p-6">
           <div className="space-y-6">
              <div>
                 <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400">Serviços / Faturas (PJ)</span>
                    <span className="text-white font-bold">R$ 15.000</span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-[80%]"></div>
                 </div>
              </div>
              <div>
                 <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400">Dividendos / Ativos</span>
                    <span className="text-white font-bold">R$ 3.450</span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[20%]"></div>
                 </div>
              </div>
           </div>
        </Card>
      </section>

      {/* Future Commitments */}
      <section className="pb-10">
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Próximas Saídas</h3>
        <div className="space-y-3">
           {[
             { title: 'IRRF (DARF)', date: '20 SET', amount: 1450, color: 'bg-orange-500' },
             { title: 'Contador', date: '05 OUT', amount: 450, color: 'bg-slate-500' }
           ].map((item, i) => (
             <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                   <div className={cn("w-1 h-8 rounded-full", item.color)}></div>
                   <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-[10px] text-slate-500 font-black uppercase">{item.date}</p>
                   </div>
                </div>
                <p className="text-sm font-black text-white">R$ {item.amount.toLocaleString('pt-BR')}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
