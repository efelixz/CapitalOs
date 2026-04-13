import React from 'react';
import {
  ArrowLeft,
  FileText,
  Download,
  Share2,
  TrendingUp,
  Calendar,
  ChevronRight,
  PieChart,
  Target
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const ReportItem = ({ title, period, size, type }) => (
  <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
        <FileText size={20} className="text-slate-400" />
      </div>
      <div>
        <h4 className="text-white font-bold text-sm">{title}</h4>
        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{period} • {size}</p>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="p-2 text-slate-500 hover:text-white transition-colors">
        <Download size={18} />
      </button>
    </div>
  </div>
);

export default function Reports({ onBack }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Relatórios</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Performance & Auditoria
        </p>
      </header>

      {/* Summary Analytics Card */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-indigo-900/20 border-indigo-500/30 p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
               <PieChart className="text-indigo-400" size={20} />
             </div>
             <div>
               <p className="text-white font-bold">Consolidado Mensal</p>
               <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Agosto 2023</p>
             </div>
          </div>
          <button className="p-2 bg-white/5 rounded-xl border border-white/10">
            <Share2 size={16} className="text-slate-400" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-black">Patrimônio</p>
            <p className="text-lg font-black text-white">+ R$ 12.450</p>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] text-slate-500 uppercase font-black">Rentabilidade</p>
            <p className="text-lg font-black text-emerald-400">+ 1.84%</p>
          </div>
        </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Documentos Disponíveis</h3>
        <Card className="px-5">
          <ReportItem title="Fechamento Mensal" period="Agosto 2023" size="2.4 MB" />
          <ReportItem title="Extrato de Dividendos" period="Agosto 2023" size="1.1 MB" />
          <ReportItem title="Informe de Rendimentos" period="Anual 2022" size="4.8 MB" />
          <ReportItem title="Análise de Performance" period="Q2 2023" size="8.2 MB" />
        </Card>
      </section>

      {/* Auto-Report Settings */}
      <Card className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
            <Calendar className="text-cyan-400" size={24} />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Relatório Automático</p>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Todo dia 01 • Ativado</p>
          </div>
        </div>
        <ChevronRight size={18} className="text-slate-700" />
      </Card>
    </div>
  );
}
