import React from 'react';
import {
  ArrowLeft,
  Activity,
  TrendingDown,
  AlertTriangle,
  ChevronRight,
  ShieldAlert,
  Zap,
  History,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const ScenarioCard = ({ title, impact, description, recoveryTime, status }) => (
  <Card className="mb-4 border-l-4 border-red-500/50 bg-red-500/5 py-6">
    <div className="flex justify-between items-start mb-4">
      <div className="flex-1 pr-6">
        <h4 className="text-white font-bold text-sm leading-tight mb-1">{title}</h4>
        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{status}</p>
      </div>
      <div className="text-right">
        <p className="text-xl font-black text-red-400">-{impact}%</p>
        <p className="text-[8px] text-slate-600 uppercase font-bold">Drawdown</p>
      </div>
    </div>
    <p className="text-xs text-slate-400 leading-relaxed mb-4">{description}</p>
    <div className="flex items-center gap-2">
       <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Tempo de Recuperação:</span>
       <span className="text-[9px] text-white font-bold uppercase">{recoveryTime}</span>
    </div>
  </Card>
);

export default function PortfolioStressTest({ onBack }) {
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
           <ShieldAlert className="text-red-400" size={24} />
           <h1 className="text-3xl font-bold text-white">Teste de Estresse</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Simulação de Cisnes Negros
        </p>
      </header>

      {/* Resilience Score */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-red-900/20 border-red-500/30 p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] text-red-400 font-black uppercase tracking-[0.2em] mb-4">Índice de Resiliência</p>
          <h2 className="text-5xl font-black text-white tracking-tighter mb-2">64%</h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
            Sua alta concentração em <span className="text-white font-bold">Stocks de Tecnologia</span> reduz sua resiliência em cenários de alta de juros (Yields 10Y).
          </p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4 px-1">Cenários de Crise</h3>
        <ScenarioCard
          title="Crash Tech (DotCom Style)"
          impact={42}
          status="Crise Setorial"
          description="Simula uma queda de 50% no Nasdaq 100 afetando sua carteira internacional."
          recoveryTime="24 Meses"
        />
        <ScenarioCard
          title="Crise Fiscal BR (Default)"
          impact={28}
          status="Risco Soberano"
          description="Simula um aumento abrupto do risco-país com desvalorização cambial extrema."
          recoveryTime="14 Meses"
        />
        <ScenarioCard
          title="Pandemia / Lockdown 2.0"
          impact={15}
          status="Choque Global"
          description="Cenário de deflação temporária seguida de inflação de oferta."
          recoveryTime="8 Meses"
        />
      </section>

      {/* Hedge Recommendation */}
      <Card variant="insight" className="border-l-4 border-cyan-500 py-6 mb-10">
        <div className="flex gap-4">
           <Zap className="text-cyan-400 flex-shrink-0" size={24} />
           <div>
              <h4 className="text-white font-bold">Blindagem Sugerida</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adicionar <span className="text-white font-bold">2% em Ouro (OZ1D)</span> e <span className="text-white font-bold">Puts de S&P500</span> elevaria seu Índice de Resiliência para <span className="text-emerald-400 font-bold">82%</span>.
              </p>
           </div>
        </div>
      </Card>
    </div>
  );
}
