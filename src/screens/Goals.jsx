import React from 'react';
import {
  Target,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Palmtree,
  Home
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const GoalCard = ({ title, current, target, deadline, icon: Icon, colorClass, projection }) => {
  const percent = Math.min(Math.round((current / target) * 100), 100);

  return (
    <Card className="mb-4 overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border", colorClass.replace('bg-', 'bg-opacity-10 border-'))}>
            <Icon className={colorClass.replace('bg-', 'text-')} size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold">{title}</h3>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{deadline}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white font-black">{percent}%</p>
          <p className="text-[10px] text-slate-500 font-bold uppercase">Concluído</p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-xs">
          <span className="text-slate-400 font-medium">R$ {current.toLocaleString('pt-BR')}</span>
          <span className="text-slate-200 font-bold">R$ {target.toLocaleString('pt-BR')}</span>
        </div>
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-[1px]">
          <div
            className={cn("h-full rounded-full transition-all duration-1000", colorClass)}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-slate-900/50 rounded-xl p-3 flex items-center justify-between border border-white/5">
        <div className="flex items-center gap-2">
          <Sparkles className="text-gold" size={14} />
          <span className="text-[10px] text-slate-300 font-medium">{projection}</span>
        </div>
        <ChevronRight size={16} className="text-slate-600 group-hover:text-white transition-colors" />
      </div>
    </Card>
  );
};

export default function Goals({ onNavigate }) {
  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1">
        <h1 className="text-3xl font-bold text-white mb-2">Metas</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Engenharia de Futuro
        </p>
      </header>

      {/* Overview Projection */}
      <button
        onClick={() => onNavigate('life_sim')}
        className="w-full text-left"
      >
        <Card
          variant="premium"
          className="bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border-indigo-500/30 cursor-pointer active:scale-[0.98] transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
              <Target className="text-indigo-400" size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Previsão de Independência</p>
              <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Score de Consistência: 94%</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Mantendo o ritmo atual, você atingirá sua liberdade financeira em <span className="text-white font-bold">9 anos e 4 meses</span>.
          </p>
        </Card>
      </button>

      <div className="space-y-2">
        <GoalCard
          title="Reserva de Emergência"
          current={45000}
          target={60000}
          deadline="Meta: 12 meses de custo"
          icon={ShieldCheck}
          colorClass="bg-emerald-500"
          projection="Atingimento em 4 meses"
        />

        <GoalCard
          title="Liberdade Financeira"
          current={1250000}
          target={5000000}
          deadline="Alvo: Dezembro 2034"
          icon={Palmtree}
          colorClass="bg-cyan-500"
          projection="Renda estimada: R$ 25k/mês"
        />
      </div>
    </div>
  );
}
