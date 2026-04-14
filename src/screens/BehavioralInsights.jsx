import React from 'react';
import {
  ArrowLeft,
  Brain,
  Zap,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  ShieldCheck,
  History,
  Timer
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const InsightNode = ({ title, type, description, icon: Icon, colorClass }) => (
  <Card className="mb-4 border-l-4 border-white/5 hover:border-l-primary transition-all">
    <div className="flex gap-4">
      <div className={cn("p-3 rounded-2xl bg-opacity-10", colorClass.replace('text-', 'bg-'))}>
        <Icon className={colorClass} size={20} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className={cn("text-[9px] font-black uppercase tracking-widest", colorClass)}>{type}</span>
          <Timer size={12} className="text-slate-600" />
        </div>
        <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
        <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  </Card>
);

export default function BehavioralInsights({ onBack }) {
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
           <Brain className="text-primary" size={24} />
           <h1 className="text-3xl font-bold text-white">Psicologia do Dinheiro</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Vieses & Comportamento
        </p>
      </header>

      {/* Behavioral Score Card */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-primary/10 border-primary/20 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Quociente Emocional (EQ)</p>
            <h3 className="text-3xl font-black text-white">88/100</h3>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary flex items-center justify-center">
            <span className="text-xs font-black text-white">88%</span>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Você demonstrou <span className="text-emerald-400 font-bold">alta disciplina</span> nos últimos 30 dias, evitando vendas reativas durante a queda do mercado.
        </p>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4 px-1">Detecção de Vieses</h3>

        <InsightNode
          title="Aversão à Perda"
          type="Vés Detectado"
          description="Você está mantendo o ativo 'XYZ' com -30% de queda apenas para 'não realizar o prejuízo', apesar da tese original ter mudado."
          icon={ShieldCheck}
          colorClass="text-red-400"
        />

        <InsightNode
          title="Consumo de Status"
          type="Tendência"
          description="Detectamos um padrão de gastos em restaurantes premium após recebimento de dividendos. Cuidado com a 'inflação de estilo de vida'."
          icon={TrendingUp}
          colorClass="text-gold"
        />

        <InsightNode
          title="Viés de Confirmação"
          type="Sinal de Alerta"
          description="Sua última pesquisa no Concierge focou apenas em notícias positivas sobre Cripto. Busque contra-argumentos para equilibrar a decisão."
          icon={AlertTriangle}
          colorClass="text-indigo-400"
        />
      </section>

      {/* Action Plan */}
      <Card className="bg-slate-900/50 border-white/5 p-5">
        <h4 className="text-white font-bold text-sm mb-3">Plano de Ação Psicológico</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span>Implementar 'Stop Loss' automático em XYZ</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <span>Regra de 48h antes de compras acima de R$ 500</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
