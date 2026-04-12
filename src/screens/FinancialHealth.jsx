import React from 'react';
import {
  ArrowLeft,
  Activity,
  ShieldCheck,
  TrendingUp,
  Wallet,
  AlertCircle,
  ChevronRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Card, cn } from '../components/Card';
import { IconButton } from '../components/IconButton';

const MetricRow = ({ label, value, score, colorClass, description }) => (
  <div className="py-4 border-b border-white/5 last:border-0">
    <div className="flex justify-between items-end mb-2">
      <div>
        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{label}</p>
        <p className="text-lg font-bold text-white">{value}</p>
      </div>
      <div className="text-right">
        <span className={cn("text-sm font-black", colorClass)}>{score}/100</span>
      </div>
    </div>
    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
      <div className={cn("h-full rounded-full", colorClass.replace('text-', 'bg-'))} style={{ width: `${score}%` }}></div>
    </div>
    <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
  </div>
);

export default function FinancialHealth({ onBack }) {
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
        <div className="flex items-center gap-3 mb-2">
          <Activity className="text-cyan-400" size={24} />
          <h1 className="text-3xl font-bold text-white">Saúde Financeira</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Diagnóstico em Tempo Real
        </p>
      </header>

      {/* Main Score Gauge */}
      <Card className="flex flex-col items-center py-10 relative overflow-hidden">
        <div className="relative w-48 h-48 flex items-center justify-center mb-6">
          <svg className="w-full h-full -rotate-90">
            <circle cx="96" cy="96" r="80" fill="none" stroke="currentColor" strokeWidth="12" className="text-white/5" />
            <circle
              cx="96"
              cy="96"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeDasharray={502.6}
              strokeDashoffset={502.6 * (1 - 0.82)}
              className="text-cyan-500"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-6xl font-black text-white">82</span>
            <span className="text-xs text-emerald-400 font-black uppercase tracking-widest">Excelente</span>
          </div>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 mx-6 flex gap-3">
          <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={20} />
          <p className="text-xs text-slate-300 leading-relaxed">
            Seu perfil está no <span className="text-white font-bold">top 5%</span> dos usuários CapitalOS com renda similar. Consistência exemplar.
          </p>
        </div>

        {/* Background glow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full"></div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Pilares de Análise</h3>
        <Card className="px-5">
          <MetricRow
            label="Taxa de Poupança"
            value="35% da Renda"
            score={95}
            colorClass="text-emerald-400"
            description="Você poupa significativamente mais que a média recomendada (20%)."
          />
          <MetricRow
            label="Diversificação"
            value="4 Classes Ativas"
            score={78}
            colorClass="text-cyan-400"
            description="Boa alocação, mas sua exposição em Real ainda é alta (70%)."
          />
          <MetricRow
            label="Dívida vs Renda"
            value="12% Comprometido"
            score={88}
            colorClass="text-emerald-400"
            description="Nível de endividamento saudável e controlado."
          />
          <MetricRow
            label="Resiliência (Reserva)"
            value="5.8 Meses"
            score={65}
            colorClass="text-gold"
            description="Próximo da meta de 6 meses. Falta pouco para a segurança total."
          />
        </Card>
      </section>

      {/* AI Recommendation */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-emerald-900/20 border-emerald-500/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <Zap className="text-emerald-400" size={20} />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Próximo Nível</p>
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Rumo ao Score 90+</p>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Para atingir o score de Elite, sugerimos aumentar sua diversificação internacional para 25% e finalizar os últimos R$ 15k da sua reserva.
        </p>
        <button className="w-full py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] transition-all">
          Ver Plano de Ação
        </button>
      </Card>
    </div>
  );
}
