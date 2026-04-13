import React from 'react';
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  DollarSign,
  Zap,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const CalendarDay = ({ day, active, hasEvent, type }) => (
  <div className="flex flex-col items-center gap-2 flex-1">
    <span className="text-[9px] text-slate-600 font-black uppercase">SET</span>
    <div className={cn(
      "w-10 h-14 rounded-2xl flex flex-col items-center justify-center border transition-all",
      active ? "bg-cyan-500 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]" : "bg-white/5 border-white/5"
    )}>
      <span className={cn("text-sm font-black", active ? "text-black" : "text-white")}>{day}</span>
      {hasEvent && <div className={cn("w-1 h-1 rounded-full mt-1", active ? "bg-black" : (type === 'income' ? "bg-emerald-400" : "bg-red-400"))}></div>}
    </div>
  </div>
);

const ScheduledEvent = ({ title, amount, type, icon: Icon, colorClass }) => (
  <div className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0">
    <div className={cn("p-3 rounded-2xl bg-opacity-10", colorClass.replace('text-', 'bg-'))}>
      <Icon className={colorClass} size={20} />
    </div>
    <div className="flex-1">
      <h4 className="text-white font-bold text-sm">{title}</h4>
      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{type === 'income' ? 'Entrada' : 'Vencimento'}</p>
    </div>
    <div className="text-right">
       <p className={cn("text-sm font-black", type === 'income' ? "text-emerald-400" : "text-white")}>
         {type === 'income' ? '+' : '-'} R$ {amount.toLocaleString('pt-BR')}
       </p>
    </div>
  </div>
);

export default function FinancialCalendar({ onBack }) {
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
           <h1 className="text-xl font-bold text-white">Calendário</h1>
           <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Setembro 2023</p>
        </div>
        <button className="p-2 bg-white/5 rounded-xl border border-white/10 text-slate-400">
           <CalendarIcon size={20} />
        </button>
      </header>

      {/* Week View */}
      <div className="flex justify-between gap-2 px-1">
        <CalendarDay day={11} />
        <CalendarDay day={12} hasEvent type="expense" />
        <CalendarDay day={13} active />
        <CalendarDay day={14} hasEvent type="income" />
        <CalendarDay day={15} />
        <CalendarDay day={16} />
        <CalendarDay day={17} />
      </div>

      {/* Daily Cash Flow Graph Mini */}
      <Card className="p-6">
         <div className="flex justify-between items-center mb-6">
           <h3 className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Resumo de Fluxo (Mensal)</h3>
           <TrendingUp className="text-cyan-400" size={16} />
         </div>
         <div className="h-20 flex items-end gap-1">
            {[20, 30, 15, 45, 60, 20, 80, 40, 30, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-white/5 rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
         </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Compromissos do Dia</h3>
        <Card className="px-5">
           <ScheduledEvent title="Fatura CapitalBlack" amount={4250.00} type="expense" icon={CreditCard} colorClass="text-red-400" />
           <ScheduledEvent title="Aluguel Office" amount={1850.00} type="expense" icon={Zap} colorClass="text-orange-400" />
           <ScheduledEvent title="Freelance UX Design" amount={12000.00} type="income" icon={DollarSign} colorClass="text-emerald-400" />
        </Card>
      </section>

      {/* Balance Projection */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-indigo-900/20 border-indigo-500/30 p-5">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
             <TrendingUp className="text-indigo-400" size={24} />
           </div>
           <div>
             <p className="text-[10px] text-indigo-400 font-black uppercase mb-0.5">Saldo Projetado 30 Dias</p>
             <p className="text-xl font-black text-white">R$ 18.420,00</p>
           </div>
        </div>
      </Card>
    </div>
  );
}
