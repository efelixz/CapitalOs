import React from 'react';
import {
  Compass,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  ChevronRight,
  ArrowRight,
  Target,
  Globe,
  ArrowUpRight
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const DiscoveryCard = ({ title, category, score, potential, reason, icon: Icon, colorClass }) => (
  <Card className="mb-4 hover:border-primary/30 transition-all cursor-pointer group">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-4">
        <div className={cn("p-3 rounded-2xl bg-opacity-10", colorClass.replace('text-', 'bg-'))}>
          <Icon className={colorClass} size={24} />
        </div>
        <div>
          <h3 className="text-white font-bold">{title}</h3>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xl font-black text-white">{score}/100</p>
        <p className="text-[8px] text-slate-500 uppercase font-bold">AI Score</p>
      </div>
    </div>

    <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5 mb-4">
       <div className="flex justify-between items-center mb-2">
         <span className="text-[10px] text-slate-400 uppercase font-black">Potencial Estimado</span>
         <span className="text-sm font-black text-emerald-400">{potential}</span>
       </div>
       <p className="text-xs text-slate-300 leading-relaxed italic">
         "{reason}"
       </p>
    </div>

    <button className="w-full py-3 rounded-xl bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-black transition-all flex items-center justify-center gap-2">
       Ver Análise Completa <ArrowRight size={14} />
    </button>
  </Card>
);

export default function AssetDiscovery({ onBack }) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-4"
        >
          <Compass size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Descoberta</span>
        </button>
        <h1 className="text-3xl font-bold text-white mb-2">Oportunidades</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Radar AI de Ativos
        </p>
      </header>

      <section>
        <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4 px-1">Ganhos de Capital</h3>
        <DiscoveryCard
          title="NVIDIA (NVDA)"
          category="Stocks / Tech"
          score={94}
          potential="+18.5% (12m)"
          reason="Dominância em infraestrutura de IA e demanda reprimida por H100/B200."
          icon={TrendingUp}
          colorClass="text-emerald-400"
        />
        <DiscoveryCard
          title="Ethereum (ETH)"
          category="Crypto"
          score={82}
          potential="+22.0% (Q4)"
          reason="Adoção institucional via ETFs e redução de oferta circulante (burn)."
          icon={Zap}
          colorClass="text-indigo-400"
        />
      </section>

      <section>
        <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4 px-1">Geração de Renda</h3>
        <DiscoveryCard
          title="HGLG11"
          category="FII / Logística"
          score={88}
          potential="9.2% DY / ano"
          reason="Vacância zero em ativos premium e contratos atípicos de longo prazo."
          icon={Target}
          colorClass="text-cyan-400"
        />
      </section>
    </div>
  );
}
