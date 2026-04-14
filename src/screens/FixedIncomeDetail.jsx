import React from 'react';
import {
  TrendingUp,
  ArrowLeft,
  Calendar,
  ShieldCheck,
  Info,
  ChevronRight,
  Clock,
  ArrowUpRight,
  PieChart,
  BarChart3
} from 'lucide-react';

const FixedIncomeDetail = ({ onBack }) => {
  const assets = [
    { name: 'Tesouro Selic 2027', type: 'Pós-fixado', rate: 'SELIC + 0,12%', invested: 'R$ 52.000', current: 'R$ 54.430', liquidity: 'D+0', risk: 'Baixíssimo' },
    { name: 'CDB Banco XP', type: 'Pré-fixado', rate: '13,5% a.a.', invested: 'R$ 20.000', current: 'R$ 21.840', liquidity: 'Vencimento', risk: 'Baixo (FGC)' },
    { name: 'LCI Imobiliária', type: 'IPCA+', rate: 'IPCA + 6,2%', invested: 'R$ 35.000', current: 'R$ 38.120', liquidity: '90 dias', risk: 'Baixo' },
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
            <h1 className="text-xl font-bold text-white tracking-tight">Renda Fixa</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Estabilidade & Liquidez</p>
          </div>
        </div>
        <ShieldCheck className="w-6 h-6 text-emerald-500" />
      </div>

      <div className="p-6 space-y-8">
        {/* Portfolio Summary */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-3xl border border-white/10 bg-white/5">
            <p className="text-xs text-slate-500 font-bold uppercase mb-1">Total Alocado</p>
            <p className="text-2xl font-bold text-white tracking-tight">R$ 114.390</p>
            <div className="flex items-center gap-1 text-emerald-400 text-xs mt-2 font-bold">
              <ArrowUpRight className="w-3 h-3" />
              <span>+1.02% (Mês)</span>
            </div>
          </div>
          <div className="p-5 rounded-3xl border border-white/10 bg-white/5">
            <p className="text-xs text-slate-500 font-bold uppercase mb-1">Yield Médio</p>
            <p className="text-2xl font-bold text-white tracking-tight">12.8% <span className="text-sm font-medium text-slate-500">a.a.</span></p>
            <p className="text-xs text-slate-400 mt-2">Acima do CDI (108%)</p>
          </div>
        </div>

        {/* Dynamic Allocation Chart Simulation */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <PieChart className="w-5 h-5 text-cyan-400" />
              Alocação por Indexador
            </h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-slate-400">Pós-fixado (CDI/Selic)</span>
                <span className="text-white">45%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 w-[45%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-slate-400">Inflação (IPCA+)</span>
                <span className="text-white">35%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[35%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-slate-400">Pré-fixado</span>
                <span className="text-white">20%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[20%] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Asset List */}
        <section>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-400" />
            Seus Títulos
          </h3>
          <div className="space-y-4">
            {assets.map((asset, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">{asset.name}</h4>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{asset.type}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white tracking-tight">{asset.current}</p>
                    <p className="text-xs text-emerald-400 font-bold">{asset.rate}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-400">{asset.liquidity}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <Info className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-400">{asset.risk}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maturation Timeline */}
        <section className="p-6 rounded-3xl border border-white/10 bg-slate-900/40">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            Cronograma de Vencimentos
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase">2024</p>
                <p className="text-sm font-bold text-white">DEZ</p>
              </div>
              <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-sm font-bold text-white">CDB Banco XP</p>
                <p className="text-xs text-slate-500">Resgate: R$ 22.400 est.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 text-center opacity-50">
                <p className="text-[10px] font-bold text-slate-500 uppercase">2025</p>
                <p className="text-sm font-bold text-white">MAR</p>
              </div>
              <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5 opacity-50">
                <p className="text-sm font-bold text-white">LCI Imobiliária</p>
                <p className="text-xs text-slate-500">Janela de Liquidez</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FixedIncomeDetail;
