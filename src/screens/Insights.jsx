import React from 'react';
import { Card } from '../components/Card';
import {
  Sparkles,
  TrendingDown,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Zap,
  Brain
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

export default function Insights({ onNavigate }) {
  const categories = ['Todos', 'Gastos', 'Dívidas', 'Oportunidades'];
  const [activeTab, setActiveTab] = React.useState('Todos');

  return (
    <div className="flex flex-col gap-6 pt-4">
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
          description="Identificamos que você está pagando 12.5% a.m. no cartão de crédito 'Premium'. Migrar essa dívida reduzirá o custo para 2.1% a.m."
          actionLabel="Ver Proposta"
          icon={TrendingDown}
          colorClass="bg-red-500"
        />

        <div onClick={() => onNavigate('tax')}>
          <InsightCard
            type="Oportunidade"
            impact="Eficiência Fiscal"
            title="Aporte em PGBL"
            description="Um aporte de R$ 12.000 em PGBL até 31/12 pode gerar uma restituição de R$ 3.300 no próximo ano."
            actionLabel="Simular Benefício"
            icon={Zap}
            colorClass="bg-gold"
          />
        </div>

        <div onClick={() => onNavigate('behavioral')}>
          <InsightCard
            type="Psicologia"
            impact="Viés Detectado"
            title="Aversão à Perda"
            description="Você está mantendo ativos no prejuízo por razões emocionais. Nossa IA detectou um padrão de 'hold' irracional."
            actionLabel="Analisar Comportamento"
            icon={Brain}
            colorClass="bg-indigo-500"
          />
        </div>

        <div onClick={() => onNavigate('discovery')}>
          <InsightCard
            type="Radar"
            impact="Alpha +12%"
            title="Novas Oportunidades"
            description="Encontramos 3 ativos que se encaixam no seu perfil e possuem score de recomendação acima de 85."
            actionLabel="Ver Descobertas"
            icon={Sparkles}
            colorClass="bg-cyan-500"
          />
        </div>

        <div onClick={() => onNavigate('impact')}>
          <InsightCard
            type="Social"
            impact="94 Impact Score"
            title="Capital com Propósito"
            description="Seu portfólio de filantropia está gerando impacto em 12 comunidades. Veja seu novo relatório de ESG."
            actionLabel="Ver Impacto"
            icon={Heart}
            colorClass="bg-rose-500"
          />
        </div>

        <div onClick={() => onNavigate('subscription_manager')}>
          <InsightCard
            type="Gastos"
            impact="Economia Direta"
            title="Assinaturas Fantasmas"
            description="Detectamos 3 serviços de streaming com conteúdo duplicado. Cancelar o 'StreamMax' economiza R$ 54,90/mês."
            actionLabel="Revisar"
            icon={CreditCard}
            colorClass="bg-red-500"
          />
        </div>
      </div>
    </div>
  );
}
