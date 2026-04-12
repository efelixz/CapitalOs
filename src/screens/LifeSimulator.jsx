import React, { useState } from 'react';
import {
  ArrowLeft,
  TrendingUp,
  Calendar,
  Zap,
  Coins,
  BarChart3,
  Sparkles,
  Info,
  Clock
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const SimulationSlider = ({ label, value, min, max, step, unit, onChange }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-3">
      <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{label}</span>
      <span className="text-sm font-black text-white">{value}{unit}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-500"
    />
  </div>
);

export default function LifeSimulator({ onBack }) {
  const [savingsRate, setSavingsRate] = useState(25);
  const [roi, setRoi] = useState(8);
  const [inflation, setInflation] = useState(4.5);

  // Simple FIRE math for the prototype: Years = log((Exp * 25 * (r-i)) / (Savings + (Exp * 25 * (r-i)))) / log(1 + (r-i))
  // We'll use a simplified linear projection for UI feedback
  const realReturn = (roi - inflation) / 100;
  const yearsToFreedom = Math.max(5, Math.round(30 - (savingsRate * 0.4) - (realReturn * 100 * 0.5)));

  return (
    <div className="flex flex-col gap-6 pb-24">
      <header className="px-1">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-4"
        >
          <ArrowLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar</span>
        </button>
        <h1 className="text-3xl font-bold text-white mb-2">Simulador de Vida</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Engenharia de Liberdade
        </p>
      </header>

      {/* Hero Result */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-cyan-900/40 border-cyan-500/30 py-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.2em] mb-4">Independência Estimada</p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="text-cyan-400" size={24} />
            <h2 className="text-5xl font-black text-white tracking-tighter">{yearsToFreedom} <span className="text-2xl text-slate-500">anos</span></h2>
          </div>
          <p className="text-xs text-slate-400">Até atingir sua meta de R$ 5.0M</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.15),transparent)]"></div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 px-1">Variáveis Críticas</h3>
        <Card className="p-6">
          <SimulationSlider
            label="Taxa de Poupança Mensal"
            value={savingsRate}
            min={5}
            max={70}
            step={1}
            unit="%"
            onChange={setSavingsRate}
          />
          <SimulationSlider
            label="Retorno Estimado (Anual)"
            value={roi}
            min={2}
            max={15}
            step={0.5}
            unit="%"
            onChange={setRoi}
          />
          <SimulationSlider
            label="Inflação Média"
            value={inflation}
            min={2}
            max={10}
            step={0.1}
            unit="%"
            onChange={setInflation}
          />
        </Card>
      </section>

      {/* Projection Chart Mini */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-white font-bold text-sm">Projeção Patrimonial</h4>
          <TrendingUp className="text-emerald-400" size={18} />
        </div>
        <div className="h-32 flex items-end gap-1 px-1 mb-4">
          {[20, 25, 32, 40, 52, 68, 85, 100].map((h, i) => (
            <div
              key={i}
              className={cn(
                "flex-1 rounded-t-sm transition-all duration-500",
                i === 7 ? "bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" : "bg-slate-800"
              )}
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-slate-600 font-black uppercase tracking-widest">
          <span>Hoje</span>
          <span>{yearsToFreedom} Anos</span>
        </div>
      </Card>

      <Card variant="insight" className="border-l-4 border-gold py-4">
        <div className="flex gap-4">
          <Sparkles className="text-gold flex-shrink-0" size={20} />
          <p className="text-xs text-slate-300 leading-relaxed">
            <span className="text-white font-bold">Insight AI:</span> Aumentar sua poupança em apenas <span className="text-emerald-400 font-bold">3%</span> antecipa sua liberdade em <span className="text-white font-bold">18 meses</span> devido ao efeito dos juros compostos.
          </p>
        </div>
      </Card>
    </div>
  );
}
