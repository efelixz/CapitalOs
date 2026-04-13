import React, { useState } from 'react';
import {
  ArrowLeft,
  Plus,
  Minus,
  Calendar,
  Tag,
  Wallet,
  ChevronRight,
  Sparkles,
  Camera,
  Mic,
  CheckCircle2
} from 'lucide-react';
import { Card, cn } from '../components/Card';

export default function AddTransaction({ onBack }) {
  const [type, setType] = useState('expense'); // income | expense
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Geral');

  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1 flex justify-between items-center">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-white">Novo Lançamento</h1>
        <div className="w-10"></div>
      </header>

      {/* Type Selector */}
      <div className="bg-slate-900 p-1 rounded-2xl flex border border-white/5 mx-1">
        <button
          onClick={() => setType('expense')}
          className={cn(
            "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2",
            type === 'expense' ? "bg-white text-black shadow-lg" : "text-slate-500"
          )}
        >
          <Minus size={14} /> Saída
        </button>
        <button
          onClick={() => setType('income')}
          className={cn(
            "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2",
            type === 'income' ? "bg-white text-black shadow-lg" : "text-slate-500"
          )}
        >
          <Plus size={14} /> Entrada
        </button>
      </div>

      {/* Amount Input */}
      <section className="text-center py-10">
         <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-4">Valor da Transação</p>
         <div className="flex items-center justify-center gap-3">
            <span className={cn("text-2xl font-black", type === 'expense' ? "text-white" : "text-emerald-400")}>R$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0,00"
              className="bg-transparent border-none outline-none text-6xl font-black text-white w-2/3 placeholder:text-slate-800"
            />
         </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Detalhes</h3>
        <Card className="px-5">
           <div className="flex items-center justify-between py-5 border-b border-white/5">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><Tag size={18} className="text-slate-400" /></div>
                 <span className="text-sm font-bold text-white">Categoria</span>
              </div>
              <span className="text-sm text-slate-400 font-bold">{category}</span>
           </div>
           <div className="flex items-center justify-between py-5 border-b border-white/5">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><Calendar size={18} className="text-slate-400" /></div>
                 <span className="text-sm font-bold text-white">Data</span>
              </div>
              <span className="text-sm text-slate-400 font-bold">Hoje, 13 Set</span>
           </div>
           <div className="flex items-center justify-between py-5">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><Wallet size={18} className="text-slate-400" /></div>
                 <span className="text-sm font-bold text-white">Conta</span>
              </div>
              <span className="text-sm text-slate-400 font-bold">CapitalBlack</span>
           </div>
        </Card>
      </section>

      {/* Smart Tools */}
      <div className="grid grid-cols-2 gap-4">
         <button className="flex items-center justify-center gap-3 p-5 rounded-3xl bg-slate-900 border border-white/5 text-slate-400">
            <Camera size={20} />
            <span className="text-[9px] font-black uppercase">Escanear</span>
         </button>
         <button className="flex items-center justify-center gap-3 p-5 rounded-3xl bg-slate-900 border border-white/5 text-slate-400">
            <Mic size={20} />
            <span className="text-[9px] font-black uppercase">Voz (AI)</span>
         </button>
      </div>

      <div className="pb-10">
         <button
          onClick={onBack}
          className="w-full py-5 rounded-3xl bg-cyan-500 text-black font-black text-sm uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all"
         >
           Confirmar Lançamento
         </button>
      </div>
    </div>
  );
}
