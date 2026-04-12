import React, { useState } from 'react';
import {
  ArrowLeft,
  TrendingDown,
  AlertTriangle,
  ChevronRight,
  ArrowRight,
  Zap,
  ShieldAlert,
  Calendar,
  DollarSign
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const DebtItem = ({ title, amount, rate, dueDate, colorClass, priority }) => (
  <div className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0 group">
    <div className={cn("p-3 rounded-2xl bg-opacity-10", colorClass.replace('text-', 'bg-'))}>
      <ShieldAlert className={colorClass} size={20} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-white font-bold text-sm">{title}</h4>
        <span className="text-white font-black text-sm">R$ {amount.toLocaleString('pt-BR')}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{rate}% a.m. • Vence {dueDate}</span>
        {priority && (
          <span className="text-[9px] bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded font-black uppercase tracking-tighter">
            Alta Prioridade
          </span>
        )}
      </div>
    </div>
  </div>
);

export default function DebtManager({ onBack }) {
  const [strategy, setStrategy] = useState('avalanche'); // avalanche vs snowball

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
        <h1 className="text-3xl font-bold text-white mb-2">Gestão de Dívidas</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Estratégia de Desalavancagem
        </p>
      </header>

      {/* Summary Card */}
      <Card variant="premium" className="bg-gradient-to-br from-red-900/20 to-slate-900/40 border-red-500/30">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[10px] text-red-400 font-black uppercase tracking-widest mb-1">Total Negativado</p>
            <h3 className="text-3xl font-black text-white">R$ 142.500</h3>
          </div>
          <div className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20">
            <TrendingDown className="text-red-400" size={24} />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Calendar size={14} />
          <span>Previsão de quitação total: <span className="text-white font-bold">Maio 2026</span></span>
        </div>
      </Card>

      {/* Strategy Toggle */}
      <div className="bg-slate-900 p-1 rounded-2xl flex border border-white/5">
        <button
          onClick={() => setStrategy('avalanche')}
          className={cn(
            "flex-1 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
            strategy === 'avalanche' ? "bg-white text-black shadow-lg" : "text-slate-500"
          )}
        >
          Avalanche (Juros)
        </button>
        <button
          onClick={() => setStrategy('snowball')}
          className={cn(
            "flex-1 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
            strategy === 'snowball' ? "bg-white text-black shadow-lg" : "text-slate-500"
          )}
        >
          Bola de Neve (Valor)
        </button>
      </div>

      {/* Debt List */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Passivos em Aberto</h3>
        <Card className="px-5">
          <DebtItem title="Cartão Black Inter" amount={32500} rate={12.5} dueDate="10/SET" colorClass="text-red-400" priority />
          <DebtItem title="Cheque Especial" amount={5000} rate={8.2} dueDate="Diário" colorClass="text-orange-400" priority />
          <DebtItem title="Financiamento BMW" amount={85000} rate={1.8} dueDate="22/SET" colorClass="text-blue-400" />
          <DebtItem title="Empréstimo FGTS" amount={20000} rate={2.1} dueDate="05/OUT" colorClass="text-slate-400" />
        </Card>
      </section>

      {/* AI Payoff Action */}
      <Card variant="insight" className="border-l-4 border-cyan-500 py-6">
        <div className="flex gap-4 items-start mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
            <Zap className="text-cyan-400" size={24} />
          </div>
          <div>
            <h4 className="text-cyan-400 font-black text-xs uppercase tracking-widest mb-1">Recomendação IA</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Priorize a quitação total do <span className="text-white font-bold">Cheque Especial</span>. Apesar de ser um valor menor, o custo de oportunidade e os juros compostos diários estão drenando <span className="text-red-400 font-bold">R$ 410/mês</span> do seu fluxo.
            </p>
          </div>
        </div>
        <button className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          Executar Pagamento Sugerido <ArrowRight size={14} />
        </button>
      </Card>
    </div>
  );
}
