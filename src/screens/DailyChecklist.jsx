import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  TrendingUp,
  Wallet,
  Target,
  Zap,
  Calendar,
  ChevronRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const ChecklistTask = ({ title, completed, onClick, colorClass }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-4 py-5 border-b border-white/5 last:border-0 group"
  >
    <div className={cn(
      "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
      completed ? "bg-emerald-500 border-emerald-400" : "border-slate-700 bg-transparent"
    )}>
       {completed && <CheckCircle2 size={14} className="text-black" />}
    </div>
    <div className="flex-1 text-left">
       <p className={cn("text-sm font-bold transition-all", completed ? "text-slate-500 line-through" : "text-white")}>{title}</p>
    </div>
    <div className={cn("w-1.5 h-1.5 rounded-full", colorClass)}></div>
  </button>
);

export default function DailyChecklist({ onBack }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Conferir extrato bancário (Open Finance)', completed: true, color: 'bg-indigo-400' },
    { id: 2, title: 'Validar aportes diários (Dollar Cost Average)', completed: false, color: 'bg-cyan-400' },
    { id: 3, title: 'Revisar stop loss das operações intraday', completed: false, color: 'bg-red-400' },
    { id: 4, title: 'Lançar despesas manuais do dia', completed: false, color: 'bg-slate-400' }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const progress = Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);

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
        <h1 className="text-3xl font-bold text-white mb-2">Checklist</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Rotina de Independência
        </p>
      </header>

      {/* Daily Progress */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-cyan-900/20 border-cyan-500/30 p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
           <p className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.2em] mb-4">Meta do Dia</p>
           <h2 className="text-5xl font-black text-white tracking-tighter mb-4">{progress}%</h2>
           <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden p-[1px] max-w-[200px] mx-auto">
              <div className="h-full bg-cyan-500 rounded-full transition-all duration-700" style={{ width: `${progress}%` }}></div>
           </div>
        </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Atividades Prioritárias</h3>
        <Card className="px-5">
           {tasks.map(task => (
             <ChecklistTask
               key={task.id}
               title={task.title}
               completed={task.completed}
               onClick={() => toggleTask(task.id)}
               colorClass={task.color}
             />
           ))}
        </Card>
      </section>

      {/* Habit Insight */}
      <Card variant="insight" className="border-l-4 border-gold py-6 mb-10">
        <div className="flex gap-4">
           <Sparkles className="text-gold flex-shrink-0" size={24} />
           <div>
              <h4 className="text-white font-bold">Ganho de Hábito</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Você completou seu checklist em 18 dos últimos 20 dias. Sua <span className="text-emerald-400 font-bold">Disciplina Financeira</span> aumentou seu Health Score em 4 pontos este mês.
              </p>
           </div>
        </div>
      </Card>
    </div>
  );
}
