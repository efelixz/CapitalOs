import React from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowDownLeft,
  Search,
  Filter,
  Coffee,
  ShoppingBag,
  Home,
  Car,
  Zap,
  LayoutGrid
} from 'lucide-react';
import { Card } from '../components/Card';

const TransactionItem = ({ title, category, amount, date, type, icon: Icon, colorClass, aiTag }) => (
  <div className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0 group cursor-pointer">
    <div className={`p-3 rounded-2xl ${colorClass} bg-opacity-15 group-hover:bg-opacity-25 transition-all`}>
      <Icon className={`w-5 h-5 ${colorClass.replace('bg-', 'text-')}`} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-0.5">
        <h4 className="text-white font-medium text-sm">{title}</h4>
        <span className={`text-sm font-bold ${type === 'income' ? 'text-emerald-400' : 'text-white'}`}>
          {type === 'income' ? '+' : '-'} R$ {amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">{category} • {date}</span>
        {aiTag && (
          <span className="text-[9px] bg-cyan-400/10 text-cyan-400 px-1.5 py-0.5 rounded font-black uppercase tracking-tighter">
            {aiTag}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default function Transactions({ onBack }) {
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
          <h1 className="text-3xl font-bold text-white mb-2">Transações</h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
            Fluxo de Caixa Inteligente
          </p>
        </div>
        <div className="flex gap-2 mb-2">
          <button className="p-2.5 bg-slate-900 border border-white/5 rounded-xl text-slate-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
        </div>
      </header>

      {/* Cash Flow Summary */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-emerald-500/5 border-emerald-500/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
              <ArrowDownLeft className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Entradas</span>
          </div>
          <p className="text-xl font-black text-white">R$ 18.450</p>
        </Card>
        <Card className="bg-red-500/5 border-red-500/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-500/20 rounded-lg">
              <ArrowUpRight className="w-4 h-4 text-red-400" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Saídas</span>
          </div>
          <p className="text-xl font-black text-white">R$ 5.650</p>
        </Card>
      </div>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Atividade Recente</h3>
        <Card className="p-1 px-4">
          <TransactionItem title="Apple Store" category="Eletrônicos" amount={1249} date="14:20" type="expense" icon={ShoppingBag} colorClass="bg-blue-500" aiTag="Investimento" />
          <TransactionItem title="Salário" category="Principal" amount={15000} date="15 Set" type="income" icon={Zap} colorClass="bg-cyan-500" />
        </Card>
      </section>
    </div>
  );
}
