import React from 'react';
import {
  ArrowLeft,
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  BookOpen,
  ChevronRight,
  ArrowRight,
  Search,
  Mail,
  Smartphone
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const HelpAction = ({ icon: Icon, title, description, colorClass }) => (
  <button className="w-full p-5 rounded-3xl bg-white/5 border border-white/5 flex items-center gap-4 group hover:bg-white/10 transition-colors mb-4">
    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border", colorClass.replace('text-', 'bg-opacity-10 border-'))}>
       <Icon className={colorClass} size={24} />
    </div>
    <div className="flex-1 text-left">
       <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
       <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{description}</p>
    </div>
    <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-colors" />
  </button>
);

const FAQItem = ({ question }) => (
  <div className="py-4 border-b border-white/5 last:border-0 flex items-center justify-between group cursor-pointer">
    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{question}</span>
    <ChevronRight size={14} className="text-slate-700" />
  </div>
);

export default function HelpCenter({ onBack }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Suporte</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">Sempre ao seu lado</p>
      </header>

      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <input
          type="text"
          placeholder="Como podemos ajudar?"
          className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition-colors"
        />
      </div>

      <section>
        <HelpAction icon={MessageSquare} title="Chat com Concierge" description="IA treinada em finanças" colorClass="text-cyan-400" />
        <HelpAction icon={ShieldCheck} title="Segurança & Fraude" description="Emergência 24h" colorClass="text-red-400" />
        <HelpAction icon={BookOpen} title="Base de Conhecimento" description="Tutoriais e Estratégias" colorClass="text-indigo-400" />
      </section>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Perguntas Frequentes</h3>
        <Card className="px-5">
           <FAQItem question="Como funciona o Health Score?" />
           <FAQItem question="Como conectar bancos via Open Finance?" />
           <FAQItem question="Posso cancelar o plano Black?" />
           <FAQItem question="Segurança dos meus dados patrimoniais" />
        </Card>
      </section>

      {/* Direct Contact */}
      <div className="grid grid-cols-2 gap-4 pb-10">
         <button className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-slate-900 border border-white/5">
            <Mail size={20} className="text-slate-500" />
            <span className="text-[9px] font-black text-white uppercase tracking-widest">E-mail</span>
         </button>
         <button className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-slate-900 border border-white/5">
            <Smartphone size={20} className="text-slate-500" />
            <span className="text-[9px] font-black text-white uppercase tracking-widest">WhatsApp</span>
         </button>
      </div>
    </div>
  );
}
