import React, { useState } from 'react';
import {
  ArrowLeft,
  Building2,
  ShieldCheck,
  Lock,
  ChevronRight,
  Search,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const BankItem = ({ name, status, colorClass, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between py-4 border-b border-white/5 last:border-0 group"
  >
    <div className="flex items-center gap-4">
      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border", colorClass.replace('bg-', 'bg-opacity-10 border-'))}>
        <Icon className={colorClass} size={24} />
      </div>
      <div className="text-left">
        <h4 className="text-white font-bold text-sm">{name}</h4>
        <p className={cn("text-[10px] font-black uppercase tracking-widest mt-0.5", status === 'Conectado' ? "text-emerald-400" : "text-slate-500")}>
          {status}
        </p>
      </div>
    </div>
    {status === 'Conectado' ? (
      <CheckCircle2 size={18} className="text-emerald-400" />
    ) : (
      <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-colors" />
    )}
  </button>
);

export default function Integrations({ onBack }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Conexões</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Open Finance Intelligence
        </p>
      </header>

      {/* Security Banner */}
      <Card variant="premium" className="bg-gradient-to-br from-emerald-900/20 to-slate-900/40 border-emerald-500/30">
        <div className="flex items-center gap-3 mb-4">
          <Lock className="text-emerald-400" size={20} />
          <h3 className="text-white font-bold text-sm">Segurança de Dados</h3>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Suas credenciais nunca são armazenadas. Usamos tecnologia <span className="text-white font-bold">Open Finance</span> regulamentada pelo Banco Central para ler seus dados.
        </p>
      </Card>

      <div className="relative mb-2">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <input
          type="text"
          placeholder="Buscar instituição..."
          className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition-colors"
        />
      </div>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Minhas Instituições</h3>
        <Card className="px-5">
          <BankItem name="Banco Itaú" status="Conectado" colorClass="text-orange-500" icon={Building2} />
          <BankItem name="Nubank" status="Conectado" colorClass="text-purple-500" icon={Zap} />
          <BankItem name="XP Investimentos" status="Sincronizar" colorClass="text-gold" icon={TrendingUp} />
          <BankItem name="Inter" status="Conectar" colorClass="text-orange-400" icon={ShieldCheck} />
        </Card>
      </section>

      <Card variant="insight" className="border-l-4 border-cyan-500 py-6">
        <div className="flex gap-4 items-center">
          <Sparkles className="text-cyan-400" size={24} />
          <div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Conecte sua conta de <span className="text-white font-bold">Investimentos</span> para que a IA possa analisar sua alocação estratégica em tempo real.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
