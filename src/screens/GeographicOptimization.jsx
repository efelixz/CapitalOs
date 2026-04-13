import React from 'react';
import {
  ArrowLeft,
  Globe,
  TrendingUp,
  MapPin,
  ChevronRight,
  ShieldCheck,
  DollarSign,
  ArrowRight,
  Info,
  CheckCircle2,
  Zap,
  Sparkles
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const PurchasingPowerRow = ({ label, brl, target, diff }) => (
  <div className="py-4 border-b border-white/5 last:border-0">
    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-3">{label}</p>
    <div className="flex items-center gap-4">
       <div className="flex-1 space-y-1">
          <div className="flex justify-between text-xs">
             <span className="text-slate-400">Brasil</span>
             <span className="text-white font-bold">{brl}</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full">
             <div className="h-full bg-slate-600 w-[60%]"></div>
          </div>
       </div>
       <div className="flex-1 space-y-1">
          <div className="flex justify-between text-xs">
             <span className="text-cyan-400">Alvo</span>
             <span className="text-white font-bold">{target}</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full">
             <div className="h-full bg-cyan-500 w-[90%]"></div>
          </div>
       </div>
    </div>
    <p className="text-[9px] text-emerald-400 font-black uppercase tracking-tighter mt-2">Ganho de Poder de Compra: +{diff}%</p>
  </div>
);

export default function GeographicOptimization({ onBack }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Geo Otimização</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Arbitragem de Custo de Vida
        </p>
      </header>

      {/* Hero Comparative */}
      <Card variant="premium" className="bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border-indigo-500/30 p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.2em] mb-4">Multiplicador de Patrimônio</p>
          <h2 className="text-5xl font-black text-white tracking-tighter mb-2">1.8x</h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
            Sua renda atual em Portugal (NHR) compra <span className="text-white font-bold">80% mais qualidade de vida</span> do que no Brasil (São Paulo).
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.15),transparent)]"></div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Poder de Compra (BRL vs EUR)</h3>
        <Card className="px-5">
           <PurchasingPowerRow label="Moradia High-End" brl="R$ 15k" target="€ 1.8k" diff={42} />
           <PurchasingPowerRow label="Educação / Saúde" brl="R$ 8k" target="€ 600" diff={95} />
           <PurchasingPowerRow label="Alimentação / Lazer" brl="R$ 5k" target="€ 1.1k" diff={12} />
        </Card>
      </section>

      {/* Arbitrage Insight */}
      <Card variant="insight" className="border-l-4 border-cyan-500 py-6">
        <div className="flex gap-4">
           <Sparkles className="text-cyan-400 flex-shrink-0" size={24} />
           <div>
             <h4 className="text-white font-bold">Estratégia de Arbitragem</h4>
             <p className="text-sm text-slate-300 leading-relaxed mb-4">
               Ao migrar para uma jurisdição de moeda forte com custo de vida estável, você reduz sua <span className="text-white font-bold">Inflação Pessoal</span> de 12% a.a. para ~3% a.a.
             </p>
             <button className="text-[10px] font-black text-cyan-400 uppercase tracking-widest flex items-center gap-2">Ver Simulação Completa <ArrowRight size={12} /></button>
           </div>
        </div>
      </Card>

      {/* Tax Efficiency Mini */}
      <Card className="p-5 flex items-center justify-between border-dashed border-white/10 bg-transparent">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
               <ShieldCheck className="text-slate-500" size={20} />
            </div>
            <div>
               <p className="text-white font-bold text-sm">Eficiência Fiscal (NHR)</p>
               <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Imposto fixo 20% p/ Software Engineers</p>
            </div>
         </div>
      </Card>
    </div>
  );
}
