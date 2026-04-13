import React from 'react';
import {
  BarChart3,
  TrendingDown,
  ShoppingBag,
  Home,
  Car,
  Coffee,
  Utensils,
  ChevronRight,
  ArrowRight,
  Target
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const CategoryStat = ({ icon: Icon, label, amount, percent, colorClass }) => (
  <div className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0">
    <div className={cn("p-3 rounded-2xl bg-opacity-10", colorClass.replace('text-', 'bg-'))}>
      <Icon className={colorClass} size={20} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-end mb-1.5">
        <h4 className="text-white font-medium text-sm">{label}</h4>
        <span className="text-white font-black text-sm">R$ {amount.toLocaleString('pt-BR')}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div className={cn("h-full rounded-full", colorClass.replace('text-', 'bg-'))} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
    <div className="text-right pl-2">
      <span className="text-[10px] text-slate-500 font-black">{percent}%</span>
    </div>
  </div>
);

export default function Analytics({ onNavigate }) {
  return (
    <div className="flex flex-col gap-6 pb-24">
      <header className="px-1">
        <h1 className="text-3xl font-bold text-white mb-2">Análise de Gastos</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Eficiência Mensal
        </p>
      </header>

      {/* Monthly Efficiency Score */}
      <Card
        onClick={() => onNavigate('budget')}
        className="p-6 bg-slate-900/30 border-white/5 cursor-pointer active:scale-[0.99] transition-all"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Score de Eficiência</p>
            <h3 className="text-2xl font-black text-white">92%</h3>
          </div>
          <TrendingDown className="text-emerald-400" size={24} />
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Seus gastos fixos representam <span className="text-emerald-400 font-bold">42%</span> da sua renda, abaixo do limite prudencial de 50%.
        </p>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Top Categorias</h3>
        <Card className="px-5">
          <CategoryStat icon={Home} label="Moradia" amount={4250} percent={45} colorClass="text-indigo-400" />
          <CategoryStat icon={Utensils} label="Alimentação" amount={1850} percent={20} colorClass="text-emerald-400" />
          <CategoryStat icon={ShoppingBag} label="Compras" amount={1200} percent={12} colorClass="text-cyan-400" />
          <CategoryStat icon={Car} label="Transporte" amount={850} percent={8} colorClass="text-slate-400" />
          <CategoryStat icon={Coffee} label="Lazer" amount={650} percent={7} colorClass="text-gold" />
        </Card>
      </section>

      {/* AI Anomaly Detection */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Alertas da IA</h3>
        <div className="space-y-3">
          <Card className="p-4 border-l-4 border-red-500/50 bg-red-500/5">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                <TrendingDown className="text-red-400 rotate-180" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-sm mb-1">Aumento em 'Alimentação'</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Seus gastos com Delivery subiram 24% em relação ao mês anterior. Impacto: -R$ 350 na poupança.</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-l-4 border-emerald-500/50 bg-emerald-500/5">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Target className="text-emerald-400" size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-sm mb-1">Otimização Concluída</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">O cancelamento das assinaturas sugeridas economizou R$ 89,90 este mês.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <button className="w-full py-4 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2">
        Exportar Relatório Detalhado <ArrowRight size={14} />
      </button>
    </div>
  );
}
