import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Activity,
  Zap,
  Info,
  ChevronRight,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { Card, cn } from '../components/Card';

export default function TradeExecution({ onBack, asset = { symbol: 'IVVB11', price: 312.45, type: 'Comprar' } }) {
  const [amount, setAmount] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <div className="w-24 h-24 rounded-[32px] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
           <CheckCircle2 size={48} className="text-emerald-400" />
        </div>
        <h2 className="text-2xl font-black text-white mb-2">Ordem Executada</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-10">
          Sua ordem de {asset.type.toLowerCase()} para <span className="text-white font-bold">{asset.symbol}</span> foi enviada com sucesso para o mercado.
        </p>
        <Card className="w-full p-4 mb-10 bg-white/5 border-white/5">
           <div className="flex justify-between items-center py-2 border-b border-white/5">
             <span className="text-[10px] text-slate-500 uppercase font-black">Ativo</span>
             <span className="text-sm font-bold text-white">{asset.symbol}</span>
           </div>
           <div className="flex justify-between items-center py-2 border-b border-white/5">
             <span className="text-[10px] text-slate-500 uppercase font-black">Preço Execução</span>
             <span className="text-sm font-bold text-white">R$ {asset.price.toLocaleString('pt-BR')}</span>
           </div>
           <div className="flex justify-between items-center py-2">
             <span className="text-[10px] text-slate-500 uppercase font-black">ID Ordem</span>
             <span className="text-[10px] font-bold text-slate-400">#CP-84291-B3</span>
           </div>
        </Card>
        <button
          onClick={onBack}
          className="w-full py-5 rounded-3xl bg-white text-black font-black text-xs uppercase tracking-widest"
        >
          Voltar ao Centro de Controle
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 pt-4">
      <header className="px-1">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-4"
        >
          <ArrowLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Cancelar</span>
        </button>
        <h1 className="text-3xl font-bold text-white mb-2">{asset.type} {asset.symbol}</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">Confirmação de Operação</p>
      </header>

      {/* Asset Quote Card */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-cyan-900/20 border-cyan-500/30 p-6">
        <div className="flex justify-between items-center">
           <div>
              <p className="text-[10px] text-cyan-400 font-black uppercase tracking-widest mb-1">Cotação Real-Time</p>
              <h3 className="text-3xl font-black text-white">R$ {asset.price.toLocaleString('pt-BR')}</h3>
           </div>
           <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
              <Zap size={24} className="text-cyan-400" />
           </div>
        </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Quantidade de Cotas</h3>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-8 text-3xl font-black text-white outline-none focus:border-cyan-500 transition-colors"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 font-black uppercase text-xs">UNIDADES</div>
        </div>
        <div className="flex justify-between mt-4 px-1">
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Financeiro Estimado:</p>
           <p className="text-sm font-black text-white">R$ {( (parseFloat(amount) || 0) * asset.price ).toLocaleString('pt-BR')}</p>
        </div>
      </section>

      {/* Costs & Impact */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Taxas e Spread</h3>
        <Card className="p-0 overflow-hidden">
           <div className="p-4 bg-slate-900/30 border-b border-white/5 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Taxa de Corretagem</span>
              <span className="text-xs font-black text-emerald-400 uppercase">Grátis</span>
           </div>
           <div className="p-4 bg-slate-900/30 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Emolumentos (B3)</span>
              <span className="text-xs font-black text-white">R$ 0,84</span>
           </div>
        </Card>
      </section>

      {/* AI Safeguard */}
      <Card variant="insight" className="border-l-4 border-emerald-500 py-6">
        <div className="flex gap-4 items-start mb-6">
           <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
             <ShieldCheck className="text-emerald-400" size={24} />
           </div>
           <div>
             <h4 className="text-white font-bold">Veredito CapitalOS</h4>
             <p className="text-xs text-slate-300 leading-relaxed">
               Esta operação está <span className="text-white font-bold">alinhada com seu perfil Moderado</span>. O impacto na sua liquidez será de apenas 1.2%, mantendo sua margem de segurança intacta.
             </p>
           </div>
        </div>
        <button
          onClick={() => setConfirmed(true)}
          className="w-full py-5 rounded-3xl bg-cyan-500 text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(6,182,212,0.3)]"
        >
          Confirmar {asset.type}
        </button>
      </Card>
    </div>
  );
}
