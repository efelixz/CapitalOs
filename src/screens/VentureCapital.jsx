import React from 'react';
import {
  Zap,
  ArrowLeft,
  ChevronRight,
  Target,
  BarChart3,
  Globe,
  TrendingUp,
  Activity,
  Layers,
  ShieldAlert
} from 'lucide-react';

const VentureCapital = ({ onBack }) => {
  const startups = [
    { name: 'EcoStream AI', sector: 'GreenTech', stage: 'Série A', invested: 'US$ 150k', valuation: 'US$ 420k', multiple: '2.8x', status: 'Crescimento' },
    { name: 'FinFlow', sector: 'Fintech', stage: 'Seed', invested: 'US$ 50k', valuation: 'US$ 85k', multiple: '1.7x', status: 'Ativo' },
    { name: 'HealthSync', sector: 'HealthTech', stage: 'Pre-Seed', invested: 'US$ 25k', valuation: 'US$ 22k', multiple: '0.8x', status: 'Alerta' },
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
            <h1 className="text-xl font-bold text-white tracking-tight">Venture Capital</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Alto Risco & Retorno</p>
          </div>
        </div>
        <Zap className="w-6 h-6 text-amber-500 fill-amber-500/20" />
      </div>

      <div className="p-6 space-y-8">
        {/* Venture Hero */}
        <div className="p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-slate-900 to-black overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10">
            <TrendingUp className="w-48 h-48 -mr-12 -mt-12 text-amber-400" />
          </div>
          <div className="relative z-10">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Equity Estimado</p>
            <h2 className="text-4xl font-bold text-white mb-2">US$ 527.000</h2>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400">TVPI: 2.34x</span>
            </div>
          </div>
        </div>

        {/* Cap Table & Stages */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3">Estágios</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Seed</span>
                  <span className="text-xs font-bold text-white">65%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full">
                  <div className="h-full bg-amber-500 w-[65%] rounded-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Série A</span>
                  <span className="text-xs font-bold text-white">35%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full">
                  <div className="h-full bg-indigo-500 w-[35%] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase mb-3">Geografia</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs text-slate-300">EUA (70%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs text-slate-300">Brasil (20%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 text-indigo-400" />
                  <span className="text-xs text-slate-300">Israel (10%)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Table */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              Investimentos Diretos
            </h3>
            <button className="text-indigo-400 text-sm font-bold">Ver Deals</button>
          </div>
          <div className="space-y-4">
            {startups.map((startup, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/5 bg-white/5 hover:border-white/20 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-white text-base">{startup.name}</h4>
                    <p className="text-xs text-slate-500">{startup.sector} • {startup.stage}</p>
                  </div>
                  {startup.status === 'Alerta' ? (
                    <div className="p-2 bg-rose-500/10 rounded-lg">
                      <ShieldAlert className="w-4 h-4 text-rose-500" />
                    </div>
                  ) : (
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Target className="w-4 h-4 text-emerald-400" />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Investido</p>
                    <p className="text-sm font-bold text-white">{startup.invested}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Valuation</p>
                    <p className="text-sm font-bold text-white">{startup.valuation}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Múltiplo</p>
                    <p className={`text-sm font-bold ${parseFloat(startup.multiple) > 1 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {startup.multiple}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pipe / Dealflow */}
        <div className="p-6 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 to-black flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Novo Deal em Análise</h4>
              <p className="text-xs text-slate-500">LogisticsTech • Seed • US$ 100k</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default VentureCapital;
