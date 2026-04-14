import React from 'react';
import {
  ArrowLeft,
  Sparkles,
  Target,
  Layers,
  TrendingUp,
  ShieldCheck,
  Zap,
  ChevronRight,
  PieChart,
  Brain
} from 'lucide-react';

const PortfolioArchitect = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#050A10] text-slate-200 pb-24">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/5 bg-[#050A10]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-400" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Portfolio Architect</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Modelagem Narrativa</p>
          </div>
        </div>
        <Brain className="w-6 h-6 text-indigo-400" />
      </div>

      <div className="p-6 space-y-8">
        {/* Architect Hero */}
        <div className="p-8 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-slate-900 to-black relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-500/20 rounded-2xl">
              <Sparkles className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">IA Engine Active</p>
              <h2 className="text-2xl font-black text-white">Crie seu Legado.</h2>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Nossa IA projeta cenários ideais baseados na sua narrativa de vida, não apenas em planilhas.
          </p>
        </div>

        {/* Narrative Models */}
        <section>
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Escolha sua Narrativa</h3>
          <div className="space-y-3">
             {[
               { name: 'Freedom Runner', focus: 'Liberdade Geográfica', risk: 'Médio', color: 'text-cyan-400', border: 'border-cyan-500/20' },
               { name: 'Empire Builder', focus: 'Acumulação Máxima', risk: 'Alto', color: 'text-gold', border: 'border-gold/20' },
               { name: 'Legacy Guardian', focus: 'Preservação Familiar', risk: 'Baixo', color: 'text-emerald-400', border: 'border-emerald-500/20' },
             ].map((model, i) => (
               <div key={i} className={`p-5 rounded-3xl border ${model.border} bg-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all`}>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-10 rounded-full bg-slate-800 group-hover:bg-current transition-colors"></div>
                    <div>
                      <h4 className={`font-black text-base ${model.color}`}>{model.name}</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{model.focus}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600" />
               </div>
             ))}
          </div>
        </section>

        {/* Current Allocation Blueprint */}
        <section className="p-6 rounded-3xl border border-white/5 bg-slate-900/40">
           <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-white flex items-center gap-2">
                <PieChart className="w-5 h-5 text-indigo-400" />
                Blueprint Atual
              </h3>
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded">Score 84/100</span>
           </div>

           <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    <Layers className="w-6 h-6 text-slate-400" />
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between mb-1">
                       <span className="text-xs font-bold text-white">Alocação Offshore</span>
                       <span className="text-xs text-slate-500">Alvo: 25%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500 w-[15%]" />
                    </div>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    <TrendingUp className="w-6 h-6 text-slate-400" />
                 </div>
                 <div className="flex-1">
                    <div className="flex justify-between mb-1">
                       <span className="text-xs font-bold text-white">Renda Passiva</span>
                       <span className="text-xs text-slate-500">Alvo: R$ 50k/m</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 w-[65%]" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Action Button */}
        <button className="w-full py-5 rounded-3xl bg-indigo-500 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-3">
          RECONSTRUIR CARTEIRA <Zap className="w-5 h-5 fill-white" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioArchitect;
