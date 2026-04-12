import React from 'react';
import { Card } from '../components/Card';
import {
  Sparkles,
  TrendingDown,
  AlertTriangle,
  Target,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Zap
} from 'lucide-react';

const InsightCard = ({ type, title, description, impact, actionLabel, icon: Icon, colorClass }) => {
  return (
    <Card className="mb-4">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-2xl ${colorClass} bg-opacity-20`}>
          <Icon className={`w-6 h-6 ${colorClass.replace('bg-', 'text-')}`} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{type}</span>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
              {impact}
            </span>
          </div>
          <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <button className="w-full py-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group">
        <span className="text-white font-medium text-sm">{actionLabel}</span>
        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
      </button>
    </Card>
  );
};

export default function Insights() {
  const categories = ['Todos', 'Gastos', 'Dívidas', 'Oportunidades'];
  const [activeTab, setActiveTab] = React.useState('Todos');

  return (
    <div className="flex flex-col gap-6 pb-24">
      <header className="px-1">
        <h1 className="text-3xl font-bold text-white mb-2">Insights AI</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Recomendações Inteligentes
        </p>
      </header>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
              activeTab === cat
                ? 'bg-cyan-500 border-cyan-400 text-slate-900 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <InsightCard
          type="Dívidas"
          impact="+ R$ 4.2k/ano"
          title="Consolidação de Juros"
          description="Identificamos que você está pagando 12.5% a.m. no cartão de crédito 'Premium'. Migrar essa dívida para um crédito consignado reduzirá o custo para 2.1% a.m."
          actionLabel="Ver Proposta de Troca"
          icon={TrendingDown}
          colorClass="bg-red-500"
        />

        <InsightCard
          type="Oportunidade"
          impact="Eficiência Fiscal"
          title="Aporte em PGBL"
          description="Você atingiu a base de cálculo máxima do IR. Um aporte de R$ 12.000 em PGBL até 31/12 pode gerar uma restituição de R$ 3.300 no próximo ano."
          actionLabel="Simular Benefício"
          icon={Zap}
          colorClass="bg-gold-500"
        />

        <InsightCard
          type="Gastos"
          impact="Economia Direta"
          title="Assinaturas Fantasmas"
          description="Detectamos 3 serviços de streaming com conteúdo duplicado nos últimos 60 dias. Cancelar o 'StreamMax' economiza R$ 54,90/mês sem perda de catálogo."
          actionLabel="Revisar Assinaturas"
          icon={CreditCard}
          colorClass="bg-cyan-500"
        />

        <InsightCard
          type="Segurança"
          impact="Proteção"
          title="Reserva de Emergência"
          description="Com o aumento da sua inflação pessoal (gastos fixos), sua reserva atual cobre apenas 4 meses. O ideal para seu perfil é atingir 6 meses (+R$ 15.000)."
          actionLabel="Ajustar Meta"
          icon={ShieldCheck}
          colorClass="bg-emerald-500"
        />
      </div>
    </div>
  );
}
