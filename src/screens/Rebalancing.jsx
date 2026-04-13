import React from 'react';
import {
  ArrowLeft,
  RefreshCcw,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  ArrowRight,
  Zap,
  Sparkles,
  Layers
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const AllocationRow = ({ label, current, target, colorClass }) => {
  const diff = current - target;
  const isOver = diff > 0;

  return (
    <div className="py-4 border-b border-white/5 last:border-0">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className={cn("w-2 h-2 rounded-full", colorClass)}></div>
          <span className="text-sm font-bold text-white">{label}</span>
        </div>
        <div className="text-right">
          <span className="text-xs font-black text-white">{current}%</span>
          <span className="text-[10px] text-slate-500 mx-2 uppercase">Meta: {target}%</span>
        </div>
      </div>
      <div className="relative h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div
          className={cn("absolute h-full rounded-full transition-all duration-1000", colorClass)}
          style={{ width: `${current}%` }}
        ></div>
        <div
          className="absolute h-full w-0.5 bg-white shadow-[0_0_8px_white] z-10"
          style={{ left: `${target}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <p className={cn("text-[9px] font-black uppercase tracking-widest", isOver ? "text-red-400" : "text-emerald-400")}>
          {isOver ? `Excesso: +${diff.toFixed(1)}%` : `Déficit: ${diff.toFixed(1)}%`}
        </p>
        <p className="text-[9px] text-slate-500 font-bold uppercase">Ajuste: R$ {(Math.abs(diff) * 24800).toLocaleString('pt-BR')}</p>
      </div>
    </div>
  );
};

export default function Rebalancing({ onBack }) {
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
          <RefreshCcw className="text-cyan-400" size={24} />
          <h1 className="text-3xl font-bold text-white">Rebalanceamento</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Otimização de Portfólio
        </p>
      </header>

      {/* Rebalancing Score */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-cyan-900/20 border-cyan-500/30 p-6 relative overflow-hidden text-center">
        <div className="relative z-10">
          <p className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.2em] mb-4">Índice de Alinhamento</p>
          <h2 className="text-5xl font-black text-white tracking-tighter mb-2">88%</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sua carteira está próxima do alvo, mas a recente alta das <span className="text-white font-bold">Stocks (EUA)</span> gerou uma concentração excessiva.
          </p>
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/10 blur-[60px] rounded-full"></div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Distribuição Atual vs Meta</h3>
        <Card className="px-5">
          <AllocationRow label="Renda Fixa" current={42} target={45} colorClass="bg-indigo-500" />
          <AllocationRow label="Ações Brasil" current={22} target={25} colorClass="bg-emerald-500" />
          <AllocationRow label="Stocks (EUA)" current={21} target={15} colorClass="bg-cyan-500" />
          <AllocationRow label="FIIs" current={10} target={10} colorClass="bg-purple-500" />
          <AllocationRow label="Criptoativos" current={5} target={5} colorClass="bg-gold" />
        </Card>
      </section>

      {/* Smart Adjustment Card */}
      <Card variant="insight" className="border-l-4 border-emerald-500 py-6">
        <div className="flex gap-4 items-start mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <Zap className="text-emerald-400" size={24} />
          </div>
          <div>
            <h4 className="text-white font-bold">Ajuste Sugerido (IA)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Não venda seus ativos. Utilize o aporte de <span className="text-white font-bold">R$ 12.800</span> deste mês para comprar Renda Fixa e Ações Brasil, equilibrando a carteira sem gerar custos tributários.
            </p>
          </div>
        </div>
        <button className="w-full py-4 rounded-2xl bg-emerald-500 text-black font-black text-xs uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-2">
          Executar Aporte Inteligente <ArrowRight size={14} />
        </button>
      </Card>
    </div>
  );
}
