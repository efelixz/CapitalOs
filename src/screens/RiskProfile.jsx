import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  AlertCircle,
  Zap,
  Target,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const ProfileOption = ({ icon: Icon, title, description, selected, onClick, colorClass }) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full p-5 rounded-3xl border-2 text-left transition-all mb-4",
      selected ? cn("bg-opacity-10 border-opacity-100", colorClass.replace('text-', 'bg-').replace('text-', 'border-')) : "bg-white/5 border-white/5 grayscale opacity-60"
    )}
  >
    <div className="flex gap-4">
      <div className={cn("p-3 rounded-2xl bg-opacity-20", colorClass.replace('text-', 'bg-'))}>
        <Icon className={colorClass} size={24} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
        <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
      {selected && <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", colorClass.replace('text-', 'bg-'))}>
        <ArrowRight size={14} className="text-black" />
      </div>}
    </div>
  </button>
);

export default function RiskProfile({ onComplete }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col min-h-screen pt-10 px-2 pb-10">
      <header className="mb-10 px-2">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em]">Passo 2 de 3</span>
        </div>
        <h1 className="text-3xl font-black text-white leading-tight mb-2">Qual seu perfil de investidor?</h1>
        <p className="text-slate-400 text-sm">Isso ajuda o CapitalOS AI a calibrar as recomendações e o seu Health Score.</p>
      </header>

      <div className="flex-1">
        <ProfileOption
          icon={ShieldCheck}
          title="Conservador"
          description="Prioriza segurança e liquidez absoluta. Aceita retornos baixos para evitar qualquer oscilação."
          selected={selected === 'cons'}
          onClick={() => setSelected('cons')}
          colorClass="text-emerald-400"
        />
        <ProfileOption
          icon={TrendingUp}
          title="Moderado"
          description="Busca equilíbrio entre segurança e rentabilidade. Aceita pequenas variações no curto prazo."
          selected={selected === 'mod'}
          onClick={() => setSelected('mod')}
          colorClass="text-cyan-400"
        />
        <ProfileOption
          icon={Zap}
          title="Arrojado / Agressivo"
          description="Foco em maximização de patrimônio. Tolera alta volatilidade por retornos acima da média."
          selected={selected === 'agg'}
          onClick={() => setSelected('agg')}
          colorClass="text-gold"
        />
      </div>

      <Card variant="insight" className="mb-8 border-l-4 border-indigo-500 py-4">
        <div className="flex gap-4">
          <Sparkles className="text-indigo-400 flex-shrink-0" size={20} />
          <p className="text-xs text-slate-300">
            Você pode mudar seu perfil a qualquer momento nas configurações. A IA levará cerca de 24h para recalibrar seu radar.
          </p>
        </div>
      </Card>

      <button
        disabled={!selected}
        onClick={onComplete}
        className={cn(
          "w-full py-5 rounded-3xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all",
          selected ? "bg-cyan-500 text-black shadow-lg" : "bg-white/5 text-slate-600 grayscale"
        )}
      >
        Continuar <ArrowRight size={20} />
      </button>
    </div>
  );
}
