import React from 'react';
import {
  ArrowLeft,
  Activity,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Clock,
  Zap,
  ChevronRight,
  Target,
  BookOpen
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const OperationItem = ({ symbol, type, price, change, quality, icon: Icon, onClick }) => (
  <div onClick={onClick} className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0 cursor-pointer group">
    <div className={cn("p-3 rounded-2xl bg-opacity-10", type === 'long' ? "bg-emerald-500" : "bg-red-500")}>
      <Icon className={type === 'long' ? "text-emerald-400" : "text-red-400"} size={20} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-0.5">
        <h4 className="text-white font-black text-sm">{symbol}</h4>
        <span className="text-white font-bold text-sm">{price}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={cn("text-[10px] font-black uppercase tracking-tighter", change.startsWith('+') ? "text-emerald-400" : "text-red-400")}>{change}</span>
        <span className="text-[10px] text-slate-500">• Qualidade: <span className="text-slate-300">{quality}%</span></span>
      </div>
    </div>
  </div>
);

export default function Operations({ onBack, onNavigate }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Operações</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Monitoramento Intraday
        </p>
      </header>

      {/* Market Pulse Card */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-cyan-900/20 border-cyan-500/30">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
               <Activity className="text-cyan-400" size={20} />
             </div>
             <div>
               <p className="text-white font-bold">Volatilidade de Mercado</p>
               <p className="text-[10px] text-cyan-400 font-black uppercase tracking-widest">Estado: Operacional</p>
             </div>
          </div>
          <Zap className="text-gold animate-pulse" size={20} />
        </div>
        <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-cyan-500 w-[72%] transition-all duration-1000"></div>
        </div>
        <div className="flex justify-between text-[9px] text-slate-500 font-black uppercase">
          <span>Risco Baixo</span>
          <span>72% Liquidez</span>
        </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Watchlist IA</h3>
        <Card className="px-5">
          <OperationItem symbol="IVVB11" type="long" price="R$ 312,45" change="+1.2%" quality={94} icon={TrendingUp} onClick={() => onNavigate('operations_terminal')} />
          <OperationItem symbol="BOVA11" type="short" price="R$ 118,20" change="-0.8%" quality={82} icon={TrendingDown} />
          <OperationItem symbol="PETR4" type="long" price="R$ 38,15" change="+4.2%" quality={45} icon={TrendingUp} />
          <OperationItem symbol="VALE3" type="long" price="R$ 62,30" change="+0.1%" quality={76} icon={TrendingUp} />
        </Card>
      </section>

      {/* Trade Diary Mini */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Diário de Trades</h3>
        <Card className="p-0 overflow-hidden">
          <div className="p-4 bg-slate-900/30 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen size={18} className="text-indigo-400" />
              <span className="text-xs font-bold text-white">Taxa de Acerto (Mensal)</span>
            </div>
            <span className="text-sm font-black text-emerald-400">68%</span>
          </div>
          <div className="p-4 bg-slate-900/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Target size={18} className="text-indigo-400" />
              <span className="text-xs font-bold text-white">Fator de Lucro</span>
            </div>
            <span className="text-sm font-black text-white">2.4</span>
          </div>
        </Card>
      </section>

      <button className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_15px_30px_rgba(6,182,212,0.2)]">
        Abrir Terminal Pro
      </button>
    </div>
  );
}
