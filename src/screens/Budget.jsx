import React from 'react';
import {
  ArrowLeft,
  Target,
  TrendingUp,
  ChevronRight,
  Plus,
  AlertCircle,
  ShieldCheck,
  Zap,
  LayoutGrid
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const BudgetCategory = ({ label, planned, actual, colorClass }) => {
  const percent = Math.min(Math.round((actual / planned) * 100), 100);
  const isOver = actual > planned;

  return (
    <div className="mb-8 last:mb-0">
      <div className="flex justify-between items-end mb-3">
        <div>
          <h4 className="text-white font-bold text-sm">{label}</h4>
          <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Orçado: R$ {planned.toLocaleString('pt-BR')}</p>
        </div>
        <div className="text-right">
          <p className={cn("text-sm font-black", isOver ? "text-red-400" : "text-white")}>R$ {actual.toLocaleString('pt-BR')}</p>
          <p className="text-[9px] text-slate-500 font-bold uppercase">{percent}%</p>
        </div>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-[1px]">
        <div
          className={cn("h-full rounded-full transition-all duration-1000", isOver ? "bg-red-500" : colorClass)}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function Budget({ onBack }) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1 flex justify-between items-center">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-center">
           <h1 className="text-xl font-bold text-white">Orçamento</h1>
           <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Controle de Gastos</p>
        </div>
        <button className="p-2 bg-white/5 rounded-xl border border-white/10 text-cyan-400">
           <Plus size={20} />
        </button>
      </header>

      {/* Global Progress */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-indigo-900/20 border-indigo-500/30 p-8 relative overflow-hidden">
        <div className="relative z-10 text-center">
           <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em] mb-4">Total Utilizado (Mês)</p>
           <h2 className="text-5xl font-black text-white tracking-tighter mb-4">68%</h2>
           <p className="text-xs text-slate-400 font-medium">Você ainda tem <span className="text-white font-bold">R$ 4.120</span> disponíveis no seu teto de gastos.</p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 px-1">Categorias Críticas</h3>
        <Card className="p-6">
           <BudgetCategory label="Moradia & Contas" planned={5000} actual={4850} colorClass="bg-indigo-500" />
           <BudgetCategory label="Alimentação" planned={2000} actual={1850} colorClass="bg-emerald-500" />
           <BudgetCategory label="Transporte" planned={1200} actual={1420} colorClass="bg-red-500" />
           <BudgetCategory label="Lazer" planned={1500} actual={450} colorClass="bg-gold" />
        </Card>
      </section>

      {/* AI Alert */}
      <Card variant="insight" className="border-l-4 border-red-500 py-6">
        <div className="flex gap-4">
           <AlertCircle className="text-red-400 flex-shrink-0" size={24} />
           <div>
             <h4 className="text-red-400 font-black text-xs uppercase tracking-widest mb-1">Atenção ao Teto</h4>
             <p className="text-sm text-slate-300 leading-relaxed">
               Seu gasto com <span className="text-white font-bold">Transporte</span> excedeu o planejado em 18%. A IA sugere reduzir o bucket de Lazer na próxima semana para manter o aporte de investimento.
             </p>
           </div>
        </div>
      </Card>
    </div>
  );
}
