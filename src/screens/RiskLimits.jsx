import React, { useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Zap,
  ChevronRight,
  TrendingDown,
  AlertTriangle,
  Scale
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const LimitSlider = ({ label, value, max, unit, colorClass, onChange }) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{label}</span>
      </div>
      <span className={cn("text-sm font-black", colorClass)}>{value}{unit}</span>
    </div>
    <div className="relative group">
       <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className={cn("w-full h-1.5 rounded-full appearance-none cursor-pointer bg-slate-800", colorClass.replace('text-', 'accent-'))}
      />
      <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[8px] text-slate-700 font-black uppercase">
        <span>0{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  </div>
);

export default function RiskLimits({ onBack }) {
  const [limits, setLimits] = useState({
    concentration: 15,
    drawdown: 10,
    leverage: 0
  });

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
        <div className="flex items-center gap-3 mb-2">
           <ShieldCheck className="text-emerald-400" size={24} />
           <h1 className="text-3xl font-bold text-white">Trava de Risco</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Limites de Exposição AI
        </p>
      </header>

      {/* Safety Status */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-emerald-900/20 border-emerald-500/30 p-6">
        <div className="flex items-center gap-4 mb-4">
           <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Lock className="text-emerald-400" size={24} />
           </div>
           <div>
              <p className="text-white font-bold text-sm">Proteção Ativa</p>
              <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Nenhum limite violado</p>
           </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Sua conta está protegida por travas automáticas que impedem ordens que excedam seus parâmetros de segurança.
        </p>
      </Card>

      <section className="mt-4">
        <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] mb-8 px-1">Parâmetros de Controle</h3>
        <Card className="p-6 pt-8">
           <LimitSlider
            label="Concentração Máx por Ativo"
            value={limits.concentration}
            max={50}
            unit="%"
            colorClass="text-cyan-400"
            onChange={(v) => setLimits({...limits, concentration: v})}
           />
           <LimitSlider
            label="Hard Drawdown (Loss) Mensal"
            value={limits.drawdown}
            max={30}
            unit="%"
            colorClass="text-red-400"
            onChange={(v) => setLimits({...limits, drawdown: v})}
           />
           <LimitSlider
            label="Alavancagem Permitida"
            value={limits.leverage}
            max={5}
            unit="x"
            colorClass="text-indigo-400"
            onChange={(v) => setLimits({...limits, leverage: v})}
           />
        </Card>
      </section>

      {/* AI Safeguard Alert */}
      <Card variant="insight" className="border-l-4 border-gold py-6 mb-10">
        <div className="flex gap-4">
           <ShieldAlert className="text-gold flex-shrink-0" size={24} />
           <div>
              <h4 className="text-white font-bold text-sm">Atenção Estratégica</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reduzir o limite de concentração para <span className="text-white font-bold">10%</span> elevaria sua resiliência histórica em 24%, mas limitaria o ganho em ativos explosivos como NVDA.
              </p>
           </div>
        </div>
      </Card>
    </div>
  );
}
