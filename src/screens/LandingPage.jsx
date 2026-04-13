import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  TrendingUp,
  ChevronRight,
  Brain,
  Zap,
  Lock,
  Crown
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const FeatureItem = ({ icon: Icon, title, description, colorClass }) => (
  <div className="flex gap-4 mb-8">
    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border flex-shrink-0", colorClass.replace('text-', 'bg-opacity-10 border-'))}>
      <Icon className={colorClass} size={24} />
    </div>
    <div>
      <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function LandingPage({ onStart }) {
  return (
    <div className="flex flex-col min-h-screen pt-12 pb-10">
      {/* Hero Section */}
      <header className="px-1 mb-16 relative">
        <div className="flex items-center gap-2 mb-6">
           <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
             <Crown size={18} className="text-black" />
           </div>
           <span className="text-xs font-black text-cyan-500 uppercase tracking-[0.4em]">CapitalOS AI</span>
        </div>
        <h1 className="text-5xl font-black text-white leading-none tracking-tighter mb-6">
          O Futuro da Sua <br />
          <span className="text-cyan-500">Riqueza Ativa.</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xs font-medium">
          O primeiro sistema operacional de inteligência financeira e patrimonial do mundo.
        </p>

        {/* Abstract shape */}
        <div className="absolute top-20 right-0 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full -mr-20"></div>
      </header>

      {/* Trust & Features */}
      <section className="flex-1 px-1">
        <h2 className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] mb-10">Intel Core Capabilities</h2>

        <FeatureItem
          icon={Brain}
          title="Personal CFO"
          description="Decisões guiadas por IA que analisam liquidez, risco e oportunidade em tempo real."
          colorClass="text-cyan-400"
        />
        <FeatureItem
          icon={Globe}
          title="Mobilidade Econômica"
          description="Simulações reais de mudança de país e internacionalização de patrimônio."
          colorClass="text-indigo-400"
        />
        <FeatureItem
          icon={Zap}
          title="Eficiência de Fluxo"
          description="Otimização automática de juros, dívidas e aportes estratégicos."
          colorClass="text-gold"
        />
      </section>

      {/* CTA Section */}
      <div className="mt-10">
        <button
          onClick={onStart}
          className="w-full py-5 rounded-3xl bg-white text-black font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:bg-cyan-50 transition-all active:scale-[0.98]"
        >
          EXPERIMENTAR CAPITALOS <ArrowRight size={20} />
        </button>

        <div className="mt-10 flex flex-col items-center gap-4">
           <div className="flex items-center gap-2">
             <Lock className="text-emerald-400" size={14} />
             <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Nível Bancário de Segurança</span>
           </div>
           <div className="flex -space-x-2">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
               </div>
             ))}
             <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center">
               <span className="text-[8px] font-black text-white">+2k</span>
             </div>
           </div>
           <p className="text-[10px] text-slate-700 font-bold">Trusted by High Net Worth Individuals</p>
        </div>
      </div>
    </div>
  );
}
