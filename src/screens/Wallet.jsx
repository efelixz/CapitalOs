import React from 'react';
import {
  TrendingUp,
  PieChart,
  ShieldCheck,
  ArrowUpRight,
  Globe,
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const Wallet = ({ onNavigate }) => {
  const assets = [
    { name: 'Renda Fixa (CDB)', value: 'R$ 1.120.000', change: '+0.8%', color: 'bg-cyan-500', percent: 45 },
    { name: 'Ações (Brasil)', value: 'R$ 620.000', change: '-1.2%', color: 'bg-emerald-500', percent: 25 },
    { name: 'Stocks (EUA)', value: 'R$ 372.000', change: '+2.4%', color: 'bg-indigo-500', percent: 15 },
    { name: 'FIIs', value: 'R$ 248.000', change: '+0.4%', color: 'bg-purple-500', percent: 10 },
    { name: 'Criptoativos', value: 'R$ 124.000', change: '+8.7%', color: 'bg-gold', percent: 5 },
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen pb-40 pt-10 px-6 bg-[#050A10] text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Minha Carteira</h1>
          <p className="text-xs text-muted uppercase tracking-widest font-bold mt-1">Patrimônio Estratégico</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
          <PieChart className="text-primary" size={24} />
        </div>
      </div>

      {/* Allocation Chart (Donut simplified) */}
      <Card className="mb-8 relative overflow-hidden flex flex-col items-center py-8">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Simple stacked bar represented as concentric or split rings would be complex in SVG here,
                let's use a cleaner visual representation for the "Premium" feel */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/5" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#00f2ff" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.45)} strokeLinecap="round" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#10b981" strokeWidth="6" strokeDasharray="188.4" strokeDashoffset={188.4 * (1 - 0.25)} strokeLinecap="round" />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-black">R$ 2.48M</span>
            <span className="text-[10px] text-accent font-black uppercase tracking-tighter">+4.2% ESTE MÊS</span>
          </div>
        </div>
      </Card>

      {/* Asset List */}
      <h2 className="text-sm font-black uppercase tracking-widest text-muted mb-4">Alocação por Classe</h2>
      <div className="space-y-3 mb-10">
        {assets.map((asset) => (
          <div key={asset.name} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between group hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4">
              <div className={cn("w-1.5 h-10 rounded-full", asset.color)}></div>
              <div>
                <p className="text-sm font-bold text-white">{asset.name}</p>
                <p className="text-xs text-muted font-medium">{asset.percent}% da carteira</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-black text-white">{asset.value}</p>
              <p className={cn("text-[10px] font-bold", asset.change.startsWith('+') ? "text-emerald-400" : "text-red-400")}>
                {asset.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      <Card variant="premium" className="mb-10 relative overflow-hidden group">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Sparkles className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-[10px] text-primary font-black uppercase tracking-widest">Rebalanceamento AI</p>
              <h3 className="text-lg font-black text-white">Oportunidade Detectada</h3>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Sua exposição em <span className="text-white font-bold">Stocks (EUA)</span> está 2% abaixo do alvo.
            O dólar atual em <span className="text-emerald-400 font-bold">R$ 4,92</span> é um ponto de entrada "Excelente".
          </p>
          <button className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors">
            EXECUTAR AJUSTE <ArrowUpRight size={18} />
          </button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-primary/30 transition-all"></div>
      </Card>

      {/* Risk Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-[#0A121C] border border-slate-800 p-5 rounded-3xl">
          <ShieldCheck className="text-emerald-400 mb-3" size={24} />
          <p className="text-[10px] text-muted uppercase font-black">Risco Total</p>
          <p className="text-lg font-black text-white">Conservador +</p>
        </div>
        <div className="bg-[#0A121C] border border-slate-800 p-5 rounded-3xl">
          <Globe className="text-indigo-400 mb-3" size={24} />
          <p className="text-[10px] text-muted uppercase font-black">Globalização</p>
          <p className="text-lg font-black text-white">15% Offshore</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
