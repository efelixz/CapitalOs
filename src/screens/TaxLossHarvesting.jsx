import React from 'react';
import {
  Zap,
  ArrowLeft,
  ChevronRight,
  TrendingDown,
  Scale,
  ShieldCheck,
  AlertCircle,
  BarChart3,
  FileText
} from 'lucide-react';

const TaxLossHarvesting = ({ onBack }) => {
  const losses = [
    { name: 'PETR4 (Concentração)', potentialLoss: 'R$ 8.500', taxSavings: 'R$ 1.275', deadline: '31/12', status: 'Oportunidade' },
    { name: 'VALE3 (Offset)', potentialLoss: 'R$ 4.200', taxSavings: 'R$ 630', deadline: '31/12', status: 'Oportunidade' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#050A10] text-slate-200 pb-24">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/5 bg-[#050A10]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-400" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Tax Loss Harvesting</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Eficiência Tributária AI</p>
          </div>
        </div>
        <Zap className="w-6 h-6 text-gold" />
      </div>

      <div className="p-6 space-y-8">
        {/* Harvest Summary */}
        <div className="p-8 rounded-3xl border border-gold/20 bg-gradient-to-br from-slate-900 via-gold/5 to-black text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Scale className="w-24 h-24 text-gold" />
           </div>
           <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Economia Fiscal Potencial</p>
           <h2 className="text-5xl font-black text-white mb-2">R$ 5.430</h2>
           <p className="text-xs text-gold font-bold uppercase tracking-widest bg-gold/10 w-fit mx-auto px-3 py-1 rounded-full border border-gold/20">Ação Sugerida até 31/12</p>
        </div>

        {/* Detailed Opportunities */}
        <section>
          <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-bold text-white flex items-center gap-2">
               <TrendingDown className="w-5 h-5 text-rose-400" />
               Harvest List
             </h3>
             <button className="text-gold text-sm font-bold flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Relatório IR
             </button>
          </div>
          <div className="space-y-4">
            {losses.map((item, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/5 bg-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-4">
                   <div>
                      <h4 className="font-bold text-white">{item.name}</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Venda para Compensação</p>
                   </div>
                   <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Zap className="w-4 h-4 text-emerald-400" />
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
                   <div>
                      <p className="text-[8px] text-slate-500 font-bold uppercase">Prejuízo</p>
                      <p className="text-sm font-bold text-slate-200">{item.potentialLoss}</p>
                   </div>
                   <div>
                      <p className="text-[8px] text-slate-500 font-bold uppercase">Tax Saving</p>
                      <p className="text-sm font-black text-emerald-400">{item.taxSavings}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[8px] text-slate-500 font-bold uppercase">Prazo</p>
                      <p className="text-sm font-bold text-white">{item.deadline}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Insight */}
        <section className="p-6 rounded-3xl border border-indigo-500/30 bg-indigo-500/5">
           <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-indigo-400" />
              <h3 className="font-bold text-white text-sm">Por que fazer isso?</h3>
           </div>
           <p className="text-xs text-slate-300 leading-relaxed mb-4">
             Ao realizar perdas em ativos de baixo potencial, você compensa o lucro tributável de outras operações, reduzindo o imposto de renda a pagar sem alterar o perfil de risco da carteira.
           </p>
           <button className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-white/5">
             AUTORIZAR REBALANCEAMENTO TRIBUTÁRIO
           </button>
        </section>

        {/* Integration Check */}
        <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5">
           <div className="p-3 bg-cyan-500/10 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
           </div>
           <div className="flex-1">
              <h4 className="font-bold text-white text-sm">Sincronizado com B3</h4>
              <p className="text-xs text-slate-500">Dados processados há 12min</p>
           </div>
           <BarChart3 className="w-5 h-5 text-slate-600" />
        </div>
      </div>
    </div>
  );
};

export default TaxLossHarvesting;
