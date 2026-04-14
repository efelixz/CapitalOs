import React from 'react';
import {
  Diamond,
  ArrowLeft,
  ChevronRight,
  TrendingUp,
  Zap,
  Box,
  Crown,
  Lock,
  Globe,
  PieChart
} from 'lucide-react';

const AlternativeAssets = ({ onBack }) => {
  const assets = [
    { name: 'Vinho: Bordeaux 2005', category: 'Colecionáveis', value: 'R$ 45.000', change: '+12%', icon: Box, color: 'text-rose-400' },
    { name: 'Relógio: Patek Philippe', category: 'Luxo', value: 'R$ 280.000', change: '+18%', icon: Crown, color: 'text-amber-400' },
    { name: 'Startup: CleanTech X', category: 'Equity', value: 'US$ 50.000', change: 'Seed', icon: Zap, color: 'text-emerald-400' },
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
            <h1 className="text-xl font-bold text-white tracking-tight">Ativos Alternativos</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Paixões & Investimentos</p>
          </div>
        </div>
        <Diamond className="w-6 h-6 text-cyan-400" />
      </div>

      <div className="p-6 space-y-8">
        {/* Alternatives Hero */}
        <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Diamond className="w-32 h-32 text-cyan-400" />
           </div>
           <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Total Alternativos</p>
           <h2 className="text-4xl font-black text-white tracking-tighter mb-4">R$ 545.000</h2>
           <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>+14.2% Alpha vs Mercado</span>
           </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 gap-3">
           {[
             { label: 'Relógios', val: '52%', color: 'bg-amber-500' },
             { label: 'Arte', val: '28%', color: 'bg-indigo-500' },
             { label: 'Vinhos', val: '20%', color: 'bg-rose-500' },
           ].map((cat, i) => (
             <div key={i} className="p-3 rounded-2xl border border-white/5 bg-white/5 text-center">
                <p className="text-lg font-black text-white">{cat.val}</p>
                <p className="text-[8px] text-slate-500 font-bold uppercase mt-1 tracking-widest">{cat.label}</p>
                <div className={`h-1 w-8 mx-auto mt-2 rounded-full ${cat.color}`} />
             </div>
           ))}
        </div>

        {/* Collection List */}
        <section>
          <div className="flex items-center justify-between mb-4">
             <h3 className="text-lg font-bold text-white flex items-center gap-2">
               <PieChart className="w-5 h-5 text-cyan-400" />
               Sua Coleção
             </h3>
             <button className="text-cyan-400 text-sm font-bold">Adicionar</button>
          </div>
          <div className="space-y-4">
            {assets.map((asset, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/5 bg-white/5 flex items-center justify-between group">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors">
                       <asset.icon className={`w-6 h-6 ${asset.color}`} />
                    </div>
                    <div>
                       <h4 className="font-bold text-white text-sm">{asset.name}</h4>
                       <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{asset.category}</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-sm font-black text-white">{asset.value}</p>
                    <p className="text-[10px] text-emerald-400 font-bold">{asset.change}</p>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custody & Security */}
        <div className="p-6 rounded-3xl border border-white/10 bg-slate-900/40">
           <div className="flex items-center gap-4 mb-4">
              <Lock className="w-6 h-6 text-slate-400" />
              <div>
                 <h4 className="font-bold text-white text-sm">Custódia & Seguro</h4>
                 <p className="text-xs text-slate-500">2 itens em cofre privado Brinks</p>
              </div>
           </div>
           <button className="w-full py-3 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
              Ver Certificados de Autenticidade
           </button>
        </div>
      </div>
    </div>
  );
};

export default AlternativeAssets;
