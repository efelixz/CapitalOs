import React from 'react';
import {
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  Heart,
  Activity,
  Umbrella,
  Zap,
  AlertTriangle,
  FileCheck,
  UserCheck
} from 'lucide-react';

const InsuranceHub = ({ onBack }) => {
  const policies = [
    { name: 'Vida & Invalidez', provider: 'Prudential', coverage: 'R$ 2.5M', premium: 'R$ 450/m', status: 'Ativo', color: 'text-indigo-400' },
    { name: 'Saúde Internacional', provider: 'Allianz', coverage: 'US$ 1M', premium: 'R$ 1.2k/m', status: 'Ativo', color: 'text-cyan-400' },
    { name: 'Residencial High-End', provider: 'Porto Seguro', coverage: 'R$ 5M', premium: 'R$ 3k/ano', status: 'Ativo', color: 'text-emerald-400' },
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
            <h1 className="text-xl font-bold text-white tracking-tight">Proteção & Seguros</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Blindagem Patrimonial</p>
          </div>
        </div>
        <ShieldCheck className="w-6 h-6 text-emerald-500" />
      </div>

      <div className="p-6 space-y-8">
        {/* Protection Score */}
        <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-black text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 p-4 opacity-5">
              <Umbrella className="w-24 h-24 text-cyan-400" />
           </div>
           <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Score de Proteção</p>
           <h2 className="text-5xl font-black text-white mb-2">92<span className="text-sm text-slate-500 ml-1">/100</span></h2>
           <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 w-fit mx-auto px-3 py-1 rounded-full border border-emerald-500/20">Patrimônio Blindado</p>
        </div>

        {/* Active Policies */}
        <section>
          <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-bold text-white flex items-center gap-2">
               <FileCheck className="w-5 h-5 text-cyan-400" />
               Suas Apólices
             </h3>
             <button className="text-cyan-400 text-sm font-bold">Gerenciar</button>
          </div>
          <div className="space-y-4">
            {policies.map((policy, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/5 bg-white/5 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                      <ShieldCheck className={`w-6 h-6 ${policy.color}`} />
                   </div>
                   <div>
                      <h4 className="font-bold text-white text-sm">{policy.name}</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{policy.provider}</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-sm font-black text-white">{policy.coverage}</p>
                   <p className="text-[10px] text-slate-500 font-bold">{policy.premium}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Protection Gaps */}
        <section className="p-6 rounded-3xl border border-amber-500/30 bg-amber-500/5">
           <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <h3 className="font-bold text-white text-sm">Gaps de Proteção Detectados</h3>
           </div>
           <p className="text-xs text-slate-300 leading-relaxed mb-4">
             Seu patrimônio em <span className="text-white font-bold">Stocks (EUA)</span> não possui cobertura para sucessão internacional. Imposto de herança estimado: <span className="text-amber-500 font-bold">US$ 45.000</span>.
           </p>
           <button className="w-full py-3 bg-amber-500 rounded-xl text-black font-black text-[10px] uppercase tracking-widest">
             Contratar Offshore Trust Insurance
           </button>
        </section>

        {/* Emergency Contacts */}
        <div className="p-4 rounded-2xl border border-white/5 bg-white/5 flex items-center gap-4">
           <div className="p-3 bg-rose-500/10 rounded-xl">
              <UserCheck className="w-6 h-6 text-rose-400" />
           </div>
           <div className="flex-1">
              <h4 className="font-bold text-white text-sm">Broker Exclusivo</h4>
              <p className="text-xs text-slate-500">Ricardo Mendonça • Private Lines</p>
           </div>
           <ChevronRight className="w-5 h-5 text-slate-600" />
        </div>
      </div>
    </div>
  );
};

export default InsuranceHub;
