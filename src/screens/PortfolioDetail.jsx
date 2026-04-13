import React from 'react';
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  PieChart,
  Layers,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const AssetPosition = ({ symbol, name, quantity, price, change, allocation, colorClass }) => (
  <div className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0 group cursor-pointer">
    <div className={cn("w-1.5 h-10 rounded-full", colorClass)}></div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-0.5">
        <h4 className="text-white font-black text-sm">{symbol}</h4>
        <span className="text-white font-bold text-sm">R$ {(quantity * price).toLocaleString('pt-BR')}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-slate-500 uppercase font-black">{name}</span>
        <span className="text-[10px] text-slate-600">• {quantity} un</span>
      </div>
    </div>
    <div className="text-right">
       <div className={cn("flex items-center justify-end gap-1 font-black text-[10px]", change >= 0 ? "text-emerald-400" : "text-red-400")}>
         {change >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
         {Math.abs(change)}%
       </div>
       <p className="text-[10px] text-slate-600 font-bold uppercase">{allocation}% Aloc.</p>
    </div>
  </div>
);

export default function PortfolioDetail({ onBack }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Detalhamento</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Ações Brasil (B3)
        </p>
      </header>

      {/* Class Overview */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-emerald-900/20 border-emerald-500/30">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-1">Total na Classe</p>
            <h3 className="text-3xl font-black text-white">R$ 620.000</h3>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
            <TrendingUp className="text-emerald-400" size={24} />
          </div>
        </div>
        <div className="flex items-center gap-2">
           <div className="h-1.5 flex-1 bg-slate-950 rounded-full overflow-hidden">
             <div className="h-full bg-emerald-500 w-[25%] shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
           </div>
           <span className="text-[10px] text-slate-400 font-black">25% DA CARTEIRA</span>
        </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Posições Individuais</h3>
        <Card className="px-5">
          <AssetPosition symbol="PETR4" name="Petrobras" quantity={1200} price={38.45} change={+1.8} allocation={12} colorClass="bg-emerald-500" />
          <AssetPosition symbol="VALE3" name="Vale" quantity={850} price={62.10} change={-0.4} allocation={8} colorClass="bg-slate-400" />
          <AssetPosition symbol="ITUB4" name="Itaú Unibanco" quantity={1500} price={32.15} change={+2.4} allocation={5} colorClass="bg-orange-500" />
        </Card>
      </section>

      {/* AI Concentration Alert */}
      <Card variant="insight" className="border-l-4 border-gold py-6">
        <div className="flex gap-4">
           <Sparkles className="text-gold flex-shrink-0" size={24} />
           <div>
             <h4 className="text-gold font-black text-xs uppercase tracking-widest mb-1">Alerta de Concentração</h4>
             <p className="text-sm text-slate-300 leading-relaxed">
               <span className="text-white font-bold">PETR4</span> representa <span className="text-gold font-bold">48%</span> desta classe. Recomendamos realizar lucro parcial e diversificar em ativos de consumo cíclico para equilibrar o beta.
             </p>
           </div>
        </div>
      </Card>

      <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-2">
        Negociar Ativos <ChevronRight size={14} />
      </button>
    </div>
  );
}
