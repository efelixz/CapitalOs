import React from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  Zap,
  Layers,
  ChevronRight,
  Sparkles,
  ArrowRight,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const TaxOptimizationItem = ({ title, status, savings, impact, colorClass }) => (
  <div className="py-4 border-b border-white/5 last:border-0">
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-white font-bold text-sm">{title}</h4>
      <span className={cn("text-[9px] font-black uppercase px-2 py-1 rounded", status === 'complete' ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400")}>
        {status === 'complete' ? 'Otimizado' : 'Ação Necessária'}
      </span>
    </div>
    <p className="text-xs text-slate-400 leading-relaxed mb-4">{impact}</p>
    <div className="flex items-center gap-2">
       <span className="text-[10px] text-slate-600 uppercase font-black tracking-widest">Economia Estimada:</span>
       <span className={cn("text-[10px] font-black", colorClass)}>R$ {savings.toLocaleString('pt-BR')} / ano</span>
    </div>
  </div>
);

export default function TaxStrategy({ onBack }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Estratégia Fiscal</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Blindagem e Otimização Tributária
        </p>
      </header>

      {/* Hero Tax Savings */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-emerald-900/20 border-emerald-500/30 p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] text-emerald-400 font-black uppercase tracking-[0.2em] mb-4">Total Retido por Ineficiência</p>
          <h2 className="text-5xl font-black text-white tracking-tighter mb-2">R$ 14.8k</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Você está deixando este valor na mesa por falta de planejamento em <span className="text-white font-bold">PGBL</span> e <span className="text-white font-bold">Deduções</span>.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Checklist de Otimização</h3>
        <Card className="px-5">
           <TaxOptimizationItem
              title="Aporte em PGBL (12%)"
              status="pending"
              savings={8200}
              impact="Utilize até 12% da sua renda bruta para reduzir a base de cálculo do IRPF."
              colorClass="text-emerald-400"
           />
           <TaxOptimizationItem
              title="Despesas Médicas/Educação"
              status="pending"
              savings={4500}
              impact="Digitalize recibos de saúde para garantir a dedução integral na declaração anual."
              colorClass="text-cyan-400"
           />
           <TaxOptimizationItem
              title="Isenção R$ 35k (Vendas B3)"
              status="complete"
              savings={2100}
              impact="Você está utilizando corretamente a faixa de isenção para vendas de ações."
              colorClass="text-emerald-400"
           />
        </Card>
      </section>

      {/* Tax Report Action */}
      <Card className="p-5 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
               <FileText className="text-indigo-400" size={24} />
            </div>
            <div>
               <p className="text-white font-bold text-sm">Relatório p/ Contador</p>
               <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Compilado de Rendimentos 2023</p>
            </div>
         </div>
         <button className="p-2 text-slate-600 hover:text-white transition-colors">
            <ArrowRight size={20} />
         </button>
      </Card>
    </div>
  );
}
