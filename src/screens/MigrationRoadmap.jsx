import React from 'react';
import {
  ArrowLeft,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Circle,
  Clock,
  ShieldCheck,
  Globe,
  ArrowRight,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const RoadmapStep = ({ status, title, description, time }) => (
  <div className="flex gap-6 relative pb-10 last:pb-0">
    {/* Line */}
    <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-white/5 last:hidden"></div>

    <div className="relative z-10">
      {status === 'complete' ? (
        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)]">
          <CheckCircle2 size={14} className="text-black" />
        </div>
      ) : status === 'active' ? (
        <div className="w-6 h-6 rounded-full bg-cyan-500 border-4 border-slate-900 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
           <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700"></div>
      )}
    </div>

    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className={cn("text-sm font-bold", status === 'complete' ? "text-slate-400" : "text-white")}>{title}</h4>
        <span className="text-[9px] text-slate-600 font-black uppercase">{time}</span>
      </div>
      <p className="text-[11px] text-slate-500 leading-relaxed">{description}</p>

      {status === 'active' && (
        <button className="mt-4 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500/20 transition-all">
          Anexar Comprovantes
        </button>
      )}
    </div>
  </div>
);

export default function MigrationRoadmap({ onBack }) {
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
           <span className="text-2xl">🇵🇹</span>
           <h1 className="text-3xl font-bold text-white">Portugal D7</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Roteiro de Migração Econômica
        </p>
      </header>

      {/* Progress Header */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-indigo-900/20 border-indigo-500/30">
        <div className="flex justify-between items-end mb-4">
           <div>
              <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-1">Status do Processo</p>
              <h3 className="text-2xl font-black text-white">Fase de Custódia</h3>
           </div>
           <span className="text-sm font-black text-white">42%</span>
        </div>
        <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden p-[1px]">
          <div className="h-full bg-indigo-500 w-[42%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
        </div>
      </Card>

      <section className="px-2">
        <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] mb-8">Passos do Objetivo</h3>

        <div className="space-y-2">
          <RoadmapStep
            status="complete"
            title="Saneamento Fiscal (Brasil)"
            description="Regularização de pendências, saída definitiva e planejamento sucessório concluídos."
            time="Mês 1"
          />
          <RoadmapStep
            status="complete"
            title="Abertura de Conta & NIF"
            description="Conta no Banco Atlântico aberta e número de identificação fiscal emitido."
            time="Mês 2"
          />
          <RoadmapStep
            status="active"
            title="Depósito de Custódia"
            description="Transferir US$ 250.000 para conta em Portugal para comprovação de meios de subsistência."
            time="Mês 3"
          />
          <RoadmapStep
            status="pending"
            title="Submissão VFS"
            description="Agendamento e entrega do dossiê físico no consulado de Portugal."
            time="Mês 4"
          />
        </div>
      </section>

      {/* AI Readiness Score */}
      <Card className="p-5 flex items-center justify-between border-emerald-500/20 bg-emerald-500/5">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
             <ShieldCheck className="text-emerald-400" size={20} />
           </div>
           <div>
             <p className="text-white font-bold text-sm">Viabilidade AI</p>
             <p className="text-[10px] text-emerald-400 font-black uppercase">Altíssima Probabilidade</p>
           </div>
        </div>
        <ChevronRight size={18} className="text-slate-700" />
      </Card>
    </div>
  );
}
