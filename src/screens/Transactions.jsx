import React from 'react';
import {
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

export default function Transactions() {
  return (
    <div className="flex flex-col gap-6 pb-24">
      <header className="px-1 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Transações</h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
            Fluxo de Caixa Inteligente
          </p>
        </div>
        <div className="flex gap-2">
          <button className="p-2.5 bg-slate-900 border border-white/5 rounded-xl text-slate-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2.5 bg-slate-900 border border-white/5 rounded-xl text-slate-400 hover:text-white transition-colors">
            <Filter size={20} />
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
          <p className="text-xl font-black text-white">R$ 18.450,00</p>
        </Card>
        <Card className="bg-red-500/5 border-red-500/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-red-500/20 rounded-lg">
              <ArrowUpRight className="w-4 h-4 text-red-400" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Saídas</span>
          </div>
          <p className="text-xl font-black text-white">R$ 5.650,12</p>
        </Card>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Hoje</h3>
          <Card className="p-1 px-4">
            <TransactionItem
              title="Apple Store Online"
              category="Eletrônicos"
              amount={1249.00}
              date="14:20"
              type="expense"
              icon={ShoppingBag}
              colorClass="bg-blue-500"
              aiTag="Investimento Produtivo"
            />
            <TransactionItem
              title="Starbucks Coffee"
              category="Alimentação"
              amount={28.50}
              date="09:15"
              type="expense"
              icon={Coffee}
              colorClass="bg-emerald-600"
              aiTag="Recorrente"
            />
          </Card>
        </section>

        <section>
          <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Ontem</h3>
          <Card className="p-1 px-4">
            <TransactionItem
              title="Transferência Recebida"
              category="Salário"
              amount={15000.00}
              date="15 Set"
              type="income"
              icon={Zap}
              colorClass="bg-cyan-500"
              aiTag="Principal"
            />
            <TransactionItem
              title="Condomínio Ed. Alpha"
              category="Moradia"
              amount={850.00}
              date="15 Set"
              type="expense"
              icon={Home}
              colorClass="bg-indigo-500"
            />
            <TransactionItem
              title="Uber"
              category="Transporte"
              amount={42.90}
              date="15 Set"
              type="expense"
              icon={Car}
              colorClass="bg-slate-500"
            />
          </Card>
        </section>

        <section>
          <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Estatísticas Rápidas</h3>
          <Card className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20">
                <LayoutGrid className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Categorias Otimizadas</p>
                <p className="text-[10px] text-slate-500 uppercase font-black">AI Analysis complete</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-emerald-400 font-black text-lg">94%</p>
              <p className="text-[8px] text-slate-500 uppercase font-black">Precisão</p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
