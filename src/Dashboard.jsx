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
  Home,
  Lightbulb,
  Briefcase,
  Search
} from 'lucide-react';
import { Card, cn } from './components/Card';
import { IconButton } from './components/IconButton';

export default function Dashboard({ onNavigate }) {
  return (
    <div className="max-w-md mx-auto min-h-screen pb-40 pt-10 px-6 bg-background text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-inner">
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
        <button className="relative p-2.5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
          <Bell className="text-primary group-hover:scale-110 transition-transform" size={22} />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-background"></span>
        </button>
      </header>

      {/* CapitalOS Score & Net Worth Summary */}
      <div className="grid grid-cols-5 gap-4 mb-10">
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

        <Card className="col-span-2 bg-slate-900/40 border-white/5 flex flex-col items-center justify-center text-center p-4">
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

      {/* Decision Indicators Row */}
      <div className="grid grid-cols-3 gap-3 mb-10">
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
      <div className="flex gap-3 mb-10 overflow-x-auto no-scrollbar py-2">
        <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl px-4 py-2 flex flex-col gap-1 min-w-max">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-muted uppercase tracking-tighter">USD</span>
            <span className="text-sm font-black text-white">R$ 4,92</span>
            <span className="text-[10px] font-bold text-accent">-0.2%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-bold text-muted">COMPRA:</span>
            <span className="text-[8px] font-black text-emerald-400">SCORE 92</span>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl px-4 py-2 flex flex-col gap-1 min-w-max">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-muted uppercase tracking-tighter">EUR</span>
            <span className="text-sm font-black text-white">R$ 5,34</span>
            <span className="text-[10px] font-bold text-accent">-0.1%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-bold text-muted">COMPRA:</span>
            <span className="text-[8px] font-black text-gold">SCORE 75</span>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl px-4 py-2 flex flex-col gap-1 min-w-max">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-muted uppercase tracking-tighter">BTC</span>
            <span className="text-sm font-black text-white">R$ 312k</span>
            <span className="text-[10px] font-bold text-accent">+2.4%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-bold text-muted">HOLD:</span>
            <span className="text-[8px] font-black text-muted">SCORE 40</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-between mb-10 px-1">
        <IconButton icon={TrendingUp} label="Simular" onClick={() => onNavigate('purchase_decision')} />
        <IconButton icon={Building2} label="Investir" />
        <IconButton icon={Brain} label="Analisar" />
      </div>

      {/* Insight Card */}
      <Card variant="insight" className="mb-10 relative overflow-hidden group shadow-insight border-l-4 border-gold py-6">
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
      <div className="grid grid-cols-1 gap-5 mb-10">
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

        <Card className="flex flex-col gap-5 hover:bg-white/5 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
            <Wallet className="text-cyan-400" size={24} />
          </div>
          <div>
            <p className="text-[11px] text-muted uppercase tracking-[0.2em] font-bold mb-2">Renda disponível</p>
            <p className="text-3xl font-black text-white">R$ 12.800,00</p>
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

      {/* Evolution Chart Section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-black tracking-tight text-white">Evolução</h3>
          <div className="flex gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5">
            {['1M', '6M', '1A'].map(period => (
              <button
                key={period}
                className={cn(
                  "px-4 py-1.5 text-[11px] font-black rounded-lg transition-all",
                  period === '6M' ? "bg-white/10 text-accent shadow-inner" : "text-muted hover:text-white"
                )}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <Card className="h-80 flex flex-col pt-10 relative overflow-hidden group">
          <div className="flex-1 flex items-end justify-between gap-3 px-2">
            {[40, 60, 45, 70, 85, 100].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group/bar h-full justify-end">
                <div
                  className={cn(
                    "w-full rounded-t-xl transition-all duration-700 relative",
                    i === 5 ? "bg-accent/80 shadow-[0_0_30px_rgba(16,185,129,0.2)]" : "bg-white/5 group-hover/bar:bg-white/10"
                  )}
                  style={{ height: `${height}%` }}
                >
                  {i === 5 && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-t-xl"></div>
                      <div className="absolute -top-1 left-0 right-0 h-1 bg-white/40 blur-[2px] rounded-full mx-2"></div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between px-2 mt-4">
            {['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'].map(m => (
              <span key={m} className="text-[9px] font-black text-muted tracking-tighter w-full text-center">{m}</span>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none"></div>
        </Card>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-2xl border-t border-white/5 px-8 py-6 flex justify-between items-center z-50 rounded-t-[40px] shadow-2xl">
        <div className="flex flex-col items-center gap-1.5 text-accent cursor-pointer group">
          <div className="p-1 rounded-lg group-hover:bg-accent/10 transition-colors">
            <Home size={26} />
          </div>
          <span className="text-[10px] font-black tracking-widest">INÍCIO</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-muted cursor-pointer group">
          <div className="p-1 rounded-lg group-hover:bg-white/10 transition-colors">
            <Lightbulb size={26} />
          </div>
          <span className="text-[10px] font-black tracking-widest opacity-60">INSIGHTS</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-muted cursor-pointer group">
          <div className="p-1 rounded-lg group-hover:bg-white/10 transition-colors">
            <Briefcase size={26} />
          </div>
          <span className="text-[10px] font-black tracking-widest opacity-60">CARTEIRA</span>
        </div>
        <div
          className="flex flex-col items-center gap-1.5 text-muted cursor-pointer group"
          onClick={() => onNavigate('purchase_decision')}
        >
          <div className="p-1 rounded-lg group-hover:bg-white/10 transition-colors">
            <Search size={26} />
          </div>
          <span className="text-[10px] font-black tracking-widest opacity-60">SIMULAR</span>
        </div>
      </nav>
    </div>
  );
}
