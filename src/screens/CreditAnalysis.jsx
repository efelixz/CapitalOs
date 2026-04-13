import React from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  AlertCircle,
  History,
  CreditCard,
  Activity,
  ChevronRight,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const FactorItem = ({ label, impact, status, description, colorClass }) => (
  <div className="py-4 border-b border-white/5 last:border-0">
    <div className="flex justify-between items-start mb-1">
      <h4 className="text-white font-bold text-sm">{label}</h4>
      <span className={cn("text-[10px] font-black uppercase tracking-tighter", colorClass)}>{impact}</span>
    </div>
    <div className="flex items-center gap-2 mb-2">
      <div className={cn("w-2 h-2 rounded-full", status === 'good' ? "bg-emerald-500" : "bg-gold")}></div>
      <span className="text-[10px] text-slate-500 font-bold uppercase">{status === 'good' ? 'Positivo' : 'Atenção'}</span>
    </div>
    <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
  </div>
);

export default function CreditAnalysis({ onBack }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Análise de Crédito</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Seu Poder no Mercado
        </p>
      </header>

      {/* Main Score Card */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-emerald-900/20 border-emerald-500/30 py-8 relative overflow-hidden">
        <div className="flex flex-col items-center text-center relative z-10">
          <p className="text-[10px] text-emerald-400 font-black uppercase tracking-[0.2em] mb-4">Score Consolidado</p>
          <h2 className="text-6xl font-black text-white tracking-tighter mb-2">845</h2>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Nível: Excelente</p>
        </div>

        {/* Evolution Sparkline */}
        <div className="mt-8 px-4 h-12 flex items-end gap-1">
          {[40, 45, 42, 50, 60, 75, 80, 100].map((h, i) => (
            <div
              key={i}
              className={cn(
                "flex-1 rounded-t-sm transition-all duration-1000",
                i === 7 ? "bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]" : "bg-slate-800"
              )}
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
      </Card>

      {/* Bureau Comparison */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-slate-900/30 border-white/5">
          <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Serasa</p>
          <p className="text-xl font-black text-white">845</p>
        </Card>
        <Card className="p-4 bg-slate-900/30 border-white/5">
          <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Boa Vista</p>
          <p className="text-xl font-black text-white">832</p>
        </Card>
      </div>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Fatores de Impacto</h3>
        <Card className="px-5">
          <FactorItem
            label="Histórico de Pagamento"
            impact="Altíssimo"
            status="good"
            description="Você pagou 100% das suas contas no prazo nos últimos 24 meses."
            colorClass="text-emerald-400"
          />
          <FactorItem
            label="Uso de Crédito"
            impact="Alto"
            status="attention"
            description="Seu uso atual está em 32%. Tente manter abaixo de 20% para o score máximo."
            colorClass="text-gold"
          />
          <FactorItem
            label="Mix de Crédito"
            impact="Médio"
            status="good"
            description="Você possui cartões, financiamento e crédito pessoal ativos."
            colorClass="text-emerald-400"
          />
          <FactorItem
            label="Idade do Crédito"
            impact="Baixo"
            status="good"
            description="Sua conta mais antiga tem 12 anos. Excelente maturidade."
            colorClass="text-emerald-400"
          />
        </Card>
      </section>

      {/* AI Recommendation */}
      <Card variant="insight" className="border-l-4 border-cyan-500 py-6">
        <div className="flex gap-4 items-start mb-4">
          <Activity className="text-cyan-400 flex-shrink-0" size={24} />
          <div>
            <h4 className="text-cyan-400 font-black text-xs uppercase tracking-widest mb-1">Otimização de Limite</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Detectamos que você pode solicitar um aumento de limite no cartão <span className="text-white font-bold">CapitalBlack</span> sem nova consulta. Isso reduzirá sua taxa de utilização para <span className="text-emerald-400 font-bold">18%</span>, elevando seu score para ~870.
            </p>
          </div>
        </div>
        <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
          Solicitar Aumento via App
        </button>
      </Card>
    </div>
  );
}
