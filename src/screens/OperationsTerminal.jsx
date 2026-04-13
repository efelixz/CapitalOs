import React from 'react';
import {
  ArrowLeft,
  Activity,
  TrendingUp,
  TrendingDown,
  Target,
  ShieldCheck,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Zap,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const LevelMarker = ({ label, value, type, active }) => (
  <div className={cn("flex justify-between items-center py-3 px-4 rounded-xl border", active ? "bg-slate-900 border-white/10" : "bg-transparent border-transparent opacity-60")}>
    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{label}</span>
    <span className={cn("text-sm font-black", type === 'target' ? "text-emerald-400" : (type === 'stop' ? "text-red-400" : "text-white"))}>
      {value}
    </span>
  </div>
);

export default function OperationsTerminal({ onBack, onNavigate }) {
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
        <div className="flex justify-between items-end">
           <div>
              <h1 className="text-3xl font-bold text-white">IVVB11</h1>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">S&P 500 ETF BRL</p>
           </div>
           <div className="text-right">
              <p className="text-2xl font-black text-white">R$ 312,45</p>
              <p className="text-xs font-bold text-emerald-400">+1.24% <span className="text-slate-600 font-medium">(Hoje)</span></p>
           </div>
        </div>
      </header>

      {/* Dynamic Chart Mini */}
      <Card className="p-0 overflow-hidden relative h-48">
         <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
         <svg className="w-full h-full" viewBox="0 0 400 200">
            <path d="M0 150 Q50 140 100 160 T200 100 T300 80 T400 40" fill="none" stroke="#00f2ff" strokeWidth="3" className="drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
            <path d="M0 150 Q50 140 100 160 T200 100 T300 80 T400 40 V200 H0 Z" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00f2ff', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#00f2ff', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
         </svg>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Níveis Operacionais</h3>
        <Card className="p-2 bg-slate-900/30">
          <LevelMarker label="Alvo (Take)" value="R$ 345,00" type="target" />
          <LevelMarker label="Preço Médio" value="R$ 298,12" type="entry" active />
          <LevelMarker label="Stop Loss" value="R$ 285,00" type="stop" />
        </Card>
      </section>

      {/* AI Signal Detail */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-emerald-900/20 border-emerald-500/30">
        <div className="flex items-center gap-4 mb-6">
           <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
             <ShieldCheck className="text-emerald-400" size={24} />
           </div>
           <div>
             <h4 className="text-white font-bold">Sinal de Qualidade (IA)</h4>
             <p className="text-[10px] text-emerald-400 font-black uppercase">94/100 • Altíssima Confiança</p>
           </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-6">
          Rompimento de resistência histórica com volume institucional. A paridade cambial favorece a permanência no ativo para o Q4.
        </p>
        <div className="grid grid-cols-2 gap-3">
           <button
            onClick={() => onNavigate('trade_execution')}
            className="py-3 rounded-xl bg-emerald-500 text-black font-black text-[10px] uppercase tracking-widest shadow-lg"
           >
            COMPRAR
           </button>
           <button className="py-3 rounded-xl bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest">VENDER</button>
        </div>
      </Card>

      {/* Fundamentals Mini */}
      <div className="grid grid-cols-2 gap-4 pb-10">
        <Card className="p-4 bg-slate-900/30 border-white/5">
           <p className="text-[8px] text-slate-500 font-black uppercase mb-1">Volatilidade</p>
           <p className="text-sm font-bold text-white">Baixa (12%)</p>
        </Card>
        <Card className="p-4 bg-slate-900/30 border-white/5">
           <p className="text-[8px] text-slate-500 font-black uppercase mb-1">Relação R/R</p>
           <p className="text-sm font-bold text-white">1:3.4</p>
        </Card>
      </div>
    </div>
  );
}
