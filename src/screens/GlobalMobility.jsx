import React, { useState } from 'react';
import {
  ArrowLeft,
  Globe,
  TrendingUp,
  MapPin,
  ChevronRight,
  ShieldCheck,
  DollarSign,
  ArrowRight,
  Info,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const CountryComparison = ({ country, flag, viability, cost, tax, safety, score, active }) => (
  <Card className={cn("mb-4 border-2 transition-all cursor-pointer", active ? "border-cyan-500 bg-cyan-500/5 shadow-[0_0_30px_rgba(6,182,212,0.1)]" : "border-white/5")}>
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <span className="text-3xl">{flag}</span>
        <div>
          <h3 className="text-white font-bold text-lg">{country}</h3>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{viability}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-black text-white">{score}</p>
        <p className="text-[8px] text-slate-500 uppercase font-bold">Mobility Score</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2 mb-4">
      <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5">
        <p className="text-[8px] text-slate-500 uppercase font-black mb-1">Custo Vida</p>
        <p className="text-xs font-bold text-white">{cost}</p>
      </div>
      <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5">
        <p className="text-[8px] text-slate-500 uppercase font-black mb-1">Impostos</p>
        <p className="text-xs font-bold text-white">{tax}</p>
      </div>
      <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5">
        <p className="text-[8px] text-slate-500 uppercase font-black mb-1">Segurança</p>
        <p className="text-xs font-bold text-white">{safety}</p>
      </div>
    </div>

    {active && (
      <div className="mt-4 pt-4 border-t border-cyan-500/20">
        <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
          Com seu patrimônio atual de <span className="text-white font-bold">R$ 2.48M</span>, você consegue o Visto D7 e mantém um padrão de vida classe A+ nesta região.
        </p>
        <button className="w-full py-3 rounded-xl bg-cyan-500 text-black font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
          Ver Plano de Migração <ArrowRight size={14} />
        </button>
      </div>
    )}
  </Card>
);

export default function GlobalMobility({ onBack, onNavigate }) {
  const [selected, setSelected] = useState('Portugal');

  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-4"
        >
          <ArrowLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar</span>
        </button>
        <h1 className="text-3xl font-bold text-white mb-2">Mobilidade Global</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Simulador de Vida Internacional
        </p>
      </header>

      {/* Profile Suitability */}
      <Card variant="premium" className="bg-gradient-to-br from-indigo-900/20 to-slate-900/40 border-indigo-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <Globe className="text-indigo-400" size={20} />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Viabilidade Patrimonial</p>
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Excelente (High Net Worth)</p>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Seu patrimônio líquido em dólar (<span className="text-white font-bold">US$ 504k</span>) permite residência em mais de 12 países da OCDE sem necessidade de trabalho local.
        </p>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Países Recomendados</h3>

        <div onClick={() => setSelected('Portugal')}>
          <CountryComparison
            country="Portugal"
            flag="🇵🇹"
            viability="Visto D7 / NHR"
            cost="Médio"
            tax="Favorável"
            safety="Alta"
            score={94}
            active={selected === 'Portugal'}
          />
        </div>

        <div onClick={() => setSelected('USA')}>
          <CountryComparison
            country="Estados Unidos (Florida)"
            flag="🇺🇸"
            viability="Visto EB-5 / L1"
            cost="Alto"
            tax="Moderado"
            safety="Média"
            score={82}
            active={selected === 'USA'}
          />
        </div>

        <div onClick={() => setSelected('UAE')}>
          <CountryComparison
            country="Dubai (UAE)"
            flag="🇦🇪"
            viability="Golden Visa"
            cost="Muito Alto"
            tax="Zero Tax"
            safety="Muito Alta"
            score={88}
            active={selected === 'UAE'}
          />
        </div>
      </section>

      {/* Risk Alert */}
      <Card
        onClick={() => onNavigate('geo_opt')}
        className="p-5 border-l-4 border-orange-500/50 bg-orange-500/5 cursor-pointer active:scale-[0.99] transition-all"
      >
        <div className="flex gap-4">
          <Info className="text-orange-400 flex-shrink-0" size={20} />
          <div>
            <h4 className="text-white font-bold text-sm mb-1">Câmbio & Timing</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              O euro está em <span className="text-white font-bold">R$ 5,34</span>. Sugerimos a montagem de posição cambial em Euro nos próximos 12 meses para evitar volatilidade política no Brasil.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
