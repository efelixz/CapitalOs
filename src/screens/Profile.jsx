import React from 'react';
import {
  ArrowLeft,
  Settings as SettingsIcon,
  Shield,
  CreditCard,
  Bell,
  Brain,
  HelpCircle,
  LogOut,
  ChevronRight,
  Crown,
  Lock,
  Smartphone
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const ProfileMenuItem = ({ icon: Icon, label, value, colorClass, danger, onClick }) => (
  <button onClick={onClick} className="w-full flex items-center justify-between py-4 group">
    <div className="flex items-center gap-4">
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center border",
        danger ? "bg-red-500/10 border-red-500/20" : "bg-white/5 border-white/10"
      )}>
        <Icon className={cn(danger ? "text-red-400" : (colorClass || "text-slate-400"))} size={20} />
      </div>
      <div className="text-left">
        <p className={cn("text-sm font-bold", danger ? "text-red-400" : "text-white")}>{label}</p>
        {value && <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-0.5">{value}</p>}
      </div>
    </div>
    <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-colors" />
  </button>
);

export default function Profile({ onBack, onNavigate }) {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <header className="flex flex-col items-center">
        <div className="w-full flex justify-start mb-6">
           <button
            onClick={onBack}
            className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Voltar</span>
          </button>
        </div>
        <div className="relative inline-block mb-4">
          <div className="w-24 h-24 rounded-[32px] overflow-hidden border-4 border-slate-900 shadow-2xl">
            <img src="https://i.pravatar.cc/150?u=capitalos" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gold text-black p-2 rounded-2xl border-4 border-slate-900">
            <Crown size={16} fill="currentColor" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white">Gabriel Alcantara</h1>
        <p className="text-sm text-slate-500 mt-1 uppercase font-black tracking-widest">Premium Member • CapitalOS Black</p>
      </header>

      {/* Subscription Card */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-indigo-900/40 border-indigo-500/30">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-1">Status da Conta</p>
            <h3 className="text-white font-bold text-lg">AI Concierge Ilimitado</h3>
          </div>
          <Crown size={24} className="text-gold" />
        </div>
        <div className="flex items-center justify-between text-xs mb-4">
          <span className="text-slate-300">Próxima renovação: 12 Out</span>
          <span className="text-white font-black">R$ 49,90/mês</span>
        </div>
        <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 w-full"></div>
        </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Configurações AI</h3>
        <Card className="px-5">
          <ProfileMenuItem
            icon={SettingsIcon}
            label="Preferências do App"
            value="Privacidade & Conta"
            colorClass="text-indigo-400"
            onClick={() => onNavigate('settings')}
          />
          <ProfileMenuItem
            icon={Brain}
            label="Personalidade da IA"
            value="Analista Estratégico"
            colorClass="text-cyan-400"
          />
          <ProfileMenuItem
            icon={Smartphone}
            label="Notificações Preditivas"
            value="Ativadas"
            colorClass="text-emerald-400"
          />
        </Card>
      </section>

      <div className="text-center pb-10">
        <p className="text-[10px] text-slate-700 uppercase font-black tracking-widest">CapitalOS AI v4.2.0 • Build 8421</p>
      </div>
    </div>
  );
}
