import React, { useState } from 'react';
import {
  ArrowLeft,
  Crown,
  Check,
  Sparkles,
  Zap,
  Target,
  ShieldCheck,
  Globe,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const FeatureRow = ({ text, included }) => (
  <div className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", included ? "bg-cyan-500/10" : "bg-white/5")}>
      {included ? <Check size={12} className="text-cyan-400" /> : <div className="w-1 h-1 rounded-full bg-slate-700"></div>}
    </div>
    <span className={cn("text-xs font-medium", included ? "text-slate-200" : "text-slate-600")}>{text}</span>
  </div>
);

export default function SubscriptionFlow({ onBack }) {
  const [billing, setBilling] = useState('monthly'); // monthly | yearly

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
        <h1 className="text-3xl font-bold text-white mb-2">Upgrade</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">Eleve seu Patrimônio</p>
      </header>

      {/* Toggle */}
      <div className="bg-slate-900 p-1 rounded-2xl flex border border-white/5 mx-1">
        <button
          onClick={() => setBilling('monthly')}
          className={cn(
            "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
            billing === 'monthly' ? "bg-white text-black shadow-lg" : "text-slate-500"
          )}
        >
          Mensal
        </button>
        <button
          onClick={() => setBilling('yearly')}
          className={cn(
            "flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
            billing === 'yearly' ? "bg-white text-black shadow-lg" : "text-slate-500"
          )}
        >
          Anual (-20%)
        </button>
      </div>

      <div className="space-y-6">
        {/* Black Tier */}
        <Card variant="premium" className="bg-gradient-to-br from-indigo-900/40 to-slate-950 border-cyan-500/40 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6">
             <Crown size={32} className="text-gold opacity-40" />
          </div>

          <div className="mb-8">
            <span className="bg-cyan-500 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Recomendado</span>
            <h3 className="text-2xl font-black text-white">CapitalOS Black</h3>
            <p className="text-slate-400 text-xs mt-1">Sua vida financeira no piloto automático.</p>
          </div>

          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-slate-400 text-sm font-bold">R$</span>
            <span className="text-4xl font-black text-white">{billing === 'monthly' ? '49,90' : '39,90'}</span>
            <span className="text-slate-500 text-xs font-bold uppercase">/ mês</span>
          </div>

          <div className="space-y-1 mb-10">
             <FeatureRow text="Concierge AI Ilimitado (24/7)" included />
             <FeatureRow text="Simulador FIRE & Life Projections" included />
             <FeatureRow text="Monitor Global de Mobilidade" included />
             <FeatureRow text="Alertas de Oportunidade Intraday" included />
             <FeatureRow text="Exportação de Relatórios Premium" included />
          </div>

          <button className="w-full py-5 rounded-3xl bg-cyan-500 text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(6,182,212,0.3)] hover:bg-cyan-400 transition-all flex items-center justify-center gap-3">
            ASSINAR AGORA <ArrowRight size={18} />
          </button>
        </Card>

        {/* Free Tier */}
        <Card className="p-8 bg-white/5 border-white/10 opacity-70">
           <h3 className="text-xl font-bold text-white mb-4">Plano Standard</h3>
           <p className="text-4xl font-black text-white mb-8">R$ 0</p>
           <div className="space-y-1 mb-10">
             <FeatureRow text="Dashboard de Patrimônio" included />
             <FeatureRow text="Lançamento de Despesas" included />
             <FeatureRow text="Insights Básicos" included />
             <FeatureRow text="Concierge AI (Limitado)" included={false} />
          </div>
          <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest">
            Permanecer no Grátis
          </button>
        </Card>
      </div>

      <div className="text-center pb-10">
         <p className="text-[9px] text-slate-700 uppercase font-black tracking-widest">Cancele a qualquer momento • Pagamento Seguro</p>
      </div>
    </div>
  );
}
