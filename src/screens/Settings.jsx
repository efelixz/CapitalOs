import React from 'react';
import {
  ArrowLeft,
  Shield,
  Lock,
  EyeOff,
  Database,
  Smartphone,
  Bell,
  ChevronRight,
  Crown,
  Zap,
  CreditCard,
  Target
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const SettingToggle = ({ label, description, active }) => (
  <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
    <div className="flex-1 pr-4">
      <p className="text-sm font-bold text-white mb-0.5">{label}</p>
      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{description}</p>
    </div>
    <div className={cn("w-12 h-6 rounded-full p-1 transition-colors", active ? "bg-cyan-500" : "bg-slate-800")}>
       <div className={cn("w-4 h-4 rounded-full bg-white transition-transform", active ? "translate-x-6" : "translate-x-0")}></div>
    </div>
  </div>
);

export default function Settings({ onBack, onNavigate }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Configurações</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Privacidade & Assinatura
        </p>
      </header>

      {/* Subscription Plans */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Plano Atual</h3>
        <Card variant="premium" className="bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border-indigo-500/30 p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Crown size={16} className="text-gold" />
                <span className="text-white font-black text-sm uppercase tracking-widest">CapitalOS Black</span>
              </div>
              <h3 className="text-2xl font-black text-white">R$ 49,90<span className="text-xs text-slate-500 font-bold">/mês</span></h3>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-black px-2 py-1 rounded-lg border border-emerald-500/20 uppercase">Ativo</span>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-cyan-400" />
              <span className="text-xs text-slate-300">Acesso ilimitado ao Concierge AI</span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={14} className="text-cyan-400" />
              <span className="text-xs text-slate-300">Simulador FIRE Avançado</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('subscription')}
            className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            Gerenciar Assinatura
          </button>
        </Card>
      </section>

      {/* Privacy Controls */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Privacidade & Dados</h3>
        <Card className="px-5">
          <SettingToggle label="Compartilhamento Open Finance" description="Acesso sincronizado aos bancos" active={true} />
          <SettingToggle label="Análise Anônima" description="Melhoria de modelos de IA" active={true} />
          <SettingToggle label="Modo Invisível" description="Ocultar valores na interface" active={false} />
          <SettingToggle label="Biometria (FaceID)" description="Acesso rápido e seguro" active={true} />
        </Card>
      </section>

      {/* Account Settings */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Conta</h3>
        <Card className="px-5">
           <button className="w-full flex items-center justify-between py-4 border-b border-white/5">
             <div className="flex items-center gap-3">
               <Database size={18} className="text-slate-400" />
               <span className="text-sm font-bold text-white">Exportar meus dados (LGPD)</span>
             </div>
             <ChevronRight size={16} className="text-slate-700" />
           </button>
           <button className="w-full flex items-center justify-between py-4">
             <div className="flex items-center gap-3">
               <Lock size={18} className="text-red-400" />
               <span className="text-sm font-bold text-red-400">Excluir Conta Permanente</span>
             </div>
             <ChevronRight size={16} className="text-slate-700" />
           </button>
        </Card>
      </section>

      <div className="text-center pb-10">
        <p className="text-[9px] text-slate-700 uppercase font-black tracking-widest">Segurança Garantida por CapitalOS Global Lab</p>
      </div>
    </div>
  );
}
