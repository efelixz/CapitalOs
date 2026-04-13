import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Target, ChevronRight } from 'lucide-react';
import { Card } from '../components/Card';

const OnboardingStep = ({ icon: Icon, title, description, colorClass }) => (
  <div className="flex gap-5 mb-10 group">
    <div className={`w-14 h-14 rounded-2xl ${colorClass} bg-opacity-10 flex items-center justify-center border ${colorClass.replace('bg-', 'border-').replace('text-', 'border-')} border-opacity-20 group-hover:scale-110 transition-transform`}>
      <Icon className={colorClass} size={28} />
    </div>
    <div className="flex-1">
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0); // 0: value prop, 1: bank connection

  if (step === 1) {
    return (
      <div className="flex flex-col min-h-[calc(100vh-100px)] pt-10 px-2 pb-10">
        <header className="mb-12 px-2">
           <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-4 block">Passo 1 de 3</span>
           <h1 className="text-3xl font-black text-white leading-tight mb-2">Conecte sua vida financeira.</h1>
           <p className="text-slate-400 text-sm">O CapitalOS AI precisa ler seus dados via Open Finance para gerar o seu Score inicial.</p>
        </header>

        <div className="flex-1 space-y-4">
           <button className="w-full p-5 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-between group hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black italic">I</div>
                 <span className="text-sm font-bold text-white">Banco Itaú</span>
              </div>
              <ChevronRight size={18} className="text-slate-700" />
           </button>
           <button className="w-full p-5 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-between group hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center text-white font-black italic">Nu</div>
                 <span className="text-sm font-bold text-white">Nubank</span>
              </div>
              <ChevronRight size={18} className="text-slate-700" />
           </button>
           <button className="w-full p-5 rounded-3xl border border-dashed border-white/10 flex items-center justify-center py-8">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Buscar outro banco...</span>
           </button>
        </div>

        <button
          onClick={onComplete}
          className="w-full py-5 rounded-3xl border border-white/10 text-white font-black text-sm uppercase tracking-[0.2em] mt-8"
        >
          PULAR CONEXÃO
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)] pt-10 px-2">
      <div className="flex-1">
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
               <Sparkles size={18} className="text-black" />
             </div>
             <span className="text-xs font-black text-cyan-500 uppercase tracking-[0.3em]">CapitalOS AI</span>
          </div>
          <h1 className="text-4xl font-black text-white leading-tight">
            Seu Futuro,<br />
            <span className="text-cyan-500">Sob Controle.</span>
          </h1>
        </header>

        <div className="space-y-4">
          <OnboardingStep
            icon={Zap}
            title="Inteligência Ativa"
            description="Não apenas dados, mas decisões. Nossa IA analisa seu patrimônio e sugere os próximos passos."
            colorClass="text-cyan-400"
          />
          <OnboardingStep
            icon={Globe}
            title="Visão Global"
            description="Oportunidades em dólar, euro e planos de migração baseados na sua realidade financeira."
            colorClass="text-indigo-400"
          />
          <OnboardingStep
            icon={Target}
            title="Engenharia de Metas"
            description="Simulações reais de independência financeira e custo de oportunidade para suas compras."
            colorClass="text-emerald-400"
          />
        </div>
      </div>

      <div className="pb-10">
        <button
          onClick={() => setStep(1)}
          className="w-full py-5 rounded-3xl bg-cyan-500 text-black font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(6,182,212,0.3)] hover:bg-cyan-400 transition-all active:scale-[0.98]"
        >
          COMEÇAR AGORA <ArrowRight size={20} />
        </button>
        <p className="text-center text-[10px] text-slate-600 mt-6 uppercase font-black tracking-widest">
          Privacidade Bancária Garantida • AES-256 Encryption
        </p>
      </div>
    </div>
  );
}
