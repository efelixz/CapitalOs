import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Smile,
  Meh,
  Frown,
  TrendingUp,
  TrendingDown,
  Sparkles,
  ChevronRight,
  Calendar,
  PenLine
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const MoodButton = ({ icon: Icon, label, selected, onClick, colorClass }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center gap-2 flex-1 p-4 rounded-2xl border-2 transition-all",
      selected ? cn("bg-opacity-10 border-opacity-100", colorClass.replace('text-', 'bg-').replace('text-', 'border-')) : "bg-white/5 border-transparent opacity-40"
    )}
  >
    <Icon className={cn("w-6 h-6", selected ? colorClass : "text-slate-400")} />
    <span className={cn("text-[9px] font-black uppercase tracking-widest", selected ? "text-white" : "text-slate-500")}>{label}</span>
  </button>
);

export default function FinancialJournal({ onBack }) {
  const [mood, setMood] = useState('neutral');
  const [note, setNote] = useState('');

  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1 flex justify-between items-center">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-center">
           <h1 className="text-xl font-bold text-white">Diário de Bordo</h1>
           <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Sábado, 13 Setembro</p>
        </div>
        <div className="w-10"></div>
      </header>

      {/* Psychology Tracking */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Estado Psicológico</h3>
        <div className="flex gap-3">
          <MoodButton
            icon={Smile}
            label="Confiante"
            selected={mood === 'good'}
            onClick={() => setMood('good')}
            colorClass="text-emerald-400"
          />
          <MoodButton
            icon={Meh}
            label="Neutro"
            selected={mood === 'neutral'}
            onClick={() => setMood('neutral')}
            colorClass="text-cyan-400"
          />
          <MoodButton
            icon={Frown}
            label="Ansioso"
            selected={mood === 'bad'}
            onClick={() => setMood('bad')}
            colorClass="text-red-400"
          />
        </div>
      </section>

      {/* AI Automated Summary */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-cyan-900/20 border-cyan-500/30 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-cyan-400" size={20} />
          <h4 className="text-white font-bold text-sm">Resumo da IA (Hoje)</h4>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Seu dia foi marcado por <span className="text-white font-bold">estabilidade</span>. O aporte em Dólar realizado às 10h foi executado com precisão cirúrgica. Sua disciplina manteve o Health Score em 82, apesar da volatilidade do BTC.
        </p>
      </Card>

      {/* Manual Reflection */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Reflexão do Operador</h3>
        <Card className="p-4 bg-slate-900/30 border-white/5">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Como você se sentiu com os movimentos de hoje?"
            className="w-full h-32 bg-transparent border-none outline-none text-sm text-white placeholder:text-slate-600 resize-none"
          />
          <div className="flex justify-between items-center mt-2 pt-4 border-t border-white/5">
             <div className="flex gap-2">
                <div className="p-1.5 bg-white/5 rounded-lg"><PenLine size={14} className="text-slate-500" /></div>
             </div>
             <button className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Salvar Nota</button>
          </div>
        </Card>
      </section>

      {/* Historical Data */}
      <section className="pb-10">
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Histórico Recente</h3>
        <div className="space-y-3">
          {[12, 11].map(d => (
            <Card key={d} className="p-4 flex items-center justify-between opacity-60">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Calendar size={18} className="text-slate-500" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{d} Setembro</p>
                  <p className="text-[9px] text-emerald-400 font-black uppercase">Meta Batida</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-700" />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
