import React from 'react';
import {
  Bell,
  TrendingUp,
  Building2,
  Brain,
  Sparkles,
  X,
  CreditCard,
  Wallet,
  Zap,
  LayoutGrid,
  Globe,
  ShieldAlert,
  PieChart,
  Target,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { Card, cn } from '../components/Card';
import { IconButton } from '../components/IconButton';

export default function Dashboard({ onNavigate }) {
  return (
    <div className="flex flex-col gap-10 pt-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            onClick={() => onNavigate('profile')}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-inner cursor-pointer hover:border-primary/50 transition-colors"
          >
            <img src="https://i.pravatar.cc/150?u=capitalos" alt="User" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[10px] text-muted uppercase tracking-[0.2em] font-medium opacity-70">Bem-vindo de volta</p>
            <h1 className="text-2xl font-bold tracking-tight">
              Capital<span className="text-primary font-extrabold tracking-tighter">OS</span>
              <span className="ml-1 text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-md align-top font-black">AI</span>
            </h1>
          </div>
        </div>
        <button
          onClick={() => onNavigate('notifications')}
          className="relative p-2.5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
        >
          <Bell className="text-primary group-hover:scale-110 transition-transform" size={22} />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-background"></span>
        </button>
      </header>

      {/* CapitalOS Score & Net Worth Summary */}
      <div className="grid grid-cols-5 gap-4">
        <Card variant="premium" className="col-span-3 relative overflow-hidden shadow-premium p-6 flex flex-col justify-between min-h-[180px]">
          <div className="relative z-10">
            <p className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold mb-2 opacity-80">Patrimônio Líquido</p>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-primary text-lg font-black">R$</span>
              <h2 className="text-3xl font-black tracking-tighter text-white line-clamp-1">2.480.150</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-accent/15 border border-accent/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                <TrendingUp size={10} className="text-accent" />
                <span className="text-accent text-[10px] font-black">+1.2%</span>
              </div>
            </div>
          </div>
          <div className="mt-4 relative z-10">
             <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none" className="opacity-60">
                <path d="M0 25C15 25 20 5 35 15C50 25 60 30 75 10C85 5 95 15 100 8" stroke="#00f2ff" strokeWidth="2" fill="none" />
             </svg>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
        </Card>

        <div onClick={() => onNavigate('health')} className="col-span-2">
          <Card className="w-full h-full bg-slate-900/40 border-white/5 flex flex-col items-center justify-center text-center p-4 cursor-pointer active:scale-95 transition-transform">
            <p className="text-[9px] text-muted uppercase tracking-widest font-bold mb-3">Health Score</p>
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="6" className="text-white/5" />
                <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray={213.6} strokeDashoffset={213.6 * (1 - 0.82)} className="text-primary" strokeLinecap="round" />
              </svg>
              <span className="absolute text-xl font-black tracking-tighter">82</span>
            </div>
            <p className="text-[10px] text-accent font-black mt-2 uppercase">Excelente</p>
          </Card>
        </div>
      </div>

      {/* Decision Indicators Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center">
          <p className="text-[8px] text-muted uppercase font-black mb-1">Risco</p>
          <p className="text-xs font-black text-emerald-400 uppercase">Baixo</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center">
          <p className="text-[8px] text-muted uppercase font-black mb-1">Liquidez</p>
          <p className="text-xs font-black text-emerald-400 uppercase">Alta</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-3 border border-white/5 text-center">
          <p className="text-[8px] text-muted uppercase font-black mb-1">Exposição</p>
          <p className="text-xs font-black text-gold uppercase">15% USD</p>
        </div>
      </div>

      {/* Currency Monitor */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
        {['USD', 'EUR', 'BTC'].map((cur, i) => (
          <div
            key={cur}
            onClick={() => onNavigate('markets')}
            className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl px-4 py-2 flex flex-col gap-1 min-w-max cursor-pointer active:scale-95 transition-transform"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-muted uppercase tracking-tighter">{cur}</span>
              <span className="text-sm font-black text-white">{cur === 'BTC' ? 'R$ 312k' : (cur === 'USD' ? 'R$ 4,92' : 'R$ 5,34')}</span>
              <span className="text-[10px] font-bold text-accent">{cur === 'BTC' ? '+2.4%' : '-0.2%'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-bold text-muted uppercase">{cur === 'BTC' ? 'Hold:' : 'Compra:'}</span>
              <span className={cn("text-[8px] font-black", cur === 'BTC' ? "text-muted" : (cur === 'USD' ? "text-emerald-400" : "text-gold"))}>SCORE {cur === 'BTC' ? '40' : (cur === 'USD' ? '92' : '75')}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions (Primary) */}
      <div className="flex justify-between px-1">
        <IconButton icon={TrendingUp} label="Compra" onClick={() => onNavigate('purchase_decision')} />
        <IconButton icon={ShieldCheck} label="Crédito" onClick={() => onNavigate('credit')} />
        <IconButton icon={ShieldAlert} label="Dívidas" onClick={() => onNavigate('debts')} />
        <IconButton icon={Globe} label="Mobilidade" onClick={() => onNavigate('mobility')} />
      </div>

      {/* Quick Actions (Secondary) */}
      <div className="flex justify-between px-1 -mt-4">
        <IconButton icon={PieChart} label="Distribuir" onClick={() => onNavigate('distribution')} />
        <IconButton icon={Activity} label="Operar" onClick={() => onNavigate('operations')} />
        <IconButton icon={FileText} label="Relatórios" onClick={() => onNavigate('reports')} />
        <IconButton icon={LayoutGrid} label="Conexões" onClick={() => onNavigate('integrations')} />
      </div>

      {/* Insight Card */}
      <Card variant="insight" className="relative overflow-hidden group shadow-insight border-l-4 border-gold py-6">
        <div className="flex gap-5">
          <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
            <Sparkles className="text-gold" size={28} />
          </div>
          <div className="flex-1 pr-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gold font-black text-sm uppercase tracking-widest">Insight do dia</h3>
              <button className="text-muted hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
            <p className="text-[15px] text-slate-300 leading-relaxed font-medium">
              Você pode economizar <span className="text-white font-black underline decoration-gold/50 underline-offset-4">R$ 450</span> este mês otimizando suas assinaturas de serviços recorrentes.
            </p>
          </div>
        </div>
      </Card>

      {/* Financial Status Cards */}
      <div className="grid grid-cols-1 gap-5">
        <Card className="flex flex-col gap-5 hover:bg-white/5 transition-colors group">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
              <CreditCard className="text-indigo-400" size={24} />
            </div>
            <span className="bg-orange-500/10 text-orange-400 text-[11px] font-black px-3 py-1.5 rounded-xl border border-orange-500/20 uppercase tracking-tighter">Vence hoje</span>
          </div>
          <div>
            <p className="text-[11px] text-muted uppercase tracking-[0.2em] font-bold mb-2">Contas a pagar</p>
            <p className="text-3xl font-black text-white">R$ 4.250,00</p>
          </div>
        </Card>

        <Card className="flex flex-col gap-8 hover:bg-white/5 transition-colors">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20">
              <Zap className="text-gold" size={24} />
            </div>
            <span className="text-gold font-black text-lg">85%</span>
          </div>
          <div className="space-y-4">
            <p className="text-[11px] text-muted uppercase tracking-[0.2em] font-bold">Metas: Liberdade</p>
            <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
              <div className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
