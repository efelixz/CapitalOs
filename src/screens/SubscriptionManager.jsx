import React from 'react';
import {
  ArrowLeft,
  CreditCard,
  Trash2,
  Zap,
  AlertTriangle,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const RecurringItem = ({ name, price, type, status, icon: Icon, colorClass, aiAlert }) => (
  <div className="flex gap-4 py-5 border-b border-white/5 last:border-0 group">
    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border border-opacity-20 flex-shrink-0 transition-transform group-hover:scale-105", colorClass.replace('text-', 'bg-').concat('/10'), colorClass.replace('text-', 'border-'))}>
       <Icon className={colorClass} size={24} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
         <h4 className="text-white font-bold text-sm leading-tight">{name}</h4>
         <span className="text-sm font-black text-white">R$ {price.toFixed(2)}</span>
      </div>
      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-3">{type} • {status}</p>

      {aiAlert && (
        <div className="bg-red-500/10 rounded-xl p-3 border border-red-500/20 flex gap-3 items-start">
           <AlertTriangle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
           <p className="text-[10px] text-red-400 font-bold leading-relaxed">{aiAlert}</p>
        </div>
      )}
    </div>
  </div>
);

export default function SubscriptionManager({ onBack }) {
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
        <h1 className="text-3xl font-bold text-white mb-2">Assinaturas</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Gestão de Gastos Recorrentes
        </p>
      </header>

      {/* Monthly Total */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-red-900/20 border-red-500/30 p-6 flex justify-between items-center">
         <div>
            <p className="text-[10px] text-red-400 font-black uppercase tracking-widest mb-1">Dreno de Caixa (Mensal)</p>
            <h3 className="text-2xl font-black text-white">R$ 842,40</h3>
         </div>
         <div className="p-2 bg-red-500/10 rounded-xl border border-red-500/20">
            <RefreshCw className="text-red-400" size={20} />
         </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Ativas no Cartão</h3>
        <Card className="px-5">
           <RecurringItem
             name="Netflix Premium"
             price={55.90}
             type="Streaming"
             status="Próximo: 22 Set"
             icon={Zap}
             colorClass="text-red-400"
           />
           <RecurringItem
             name="Adobe Creative Cloud"
             price={124.00}
             type="Trabalho"
             status="Próximo: 15 Set"
             icon={Sparkles}
             colorClass="text-indigo-400"
             aiAlert="Assinatura Fantasma: Sem uso detectado nos últimos 45 dias."
           />
           <RecurringItem
             name="Amazon Prime"
             price={14.90}
             type="Serviços"
             status="Próximo: 10 Out"
             icon={CreditCard}
             colorClass="text-cyan-400"
           />
        </Card>
      </section>

      {/* AI Cleanup Action */}
      <Card variant="insight" className="border-l-4 border-cyan-500 py-6 mb-10">
        <div className="flex gap-4 items-start mb-6">
           <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
              <Trash2 className="text-cyan-400" size={24} />
           </div>
           <div>
              <h4 className="text-white font-bold">Limpeza de Gastos</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Detectamos redundância entre <span className="text-white font-bold">Disney+</span> e <span className="text-white font-bold">Star+</span> no seu plano. Unificar para o 'Combo+' economiza <span className="text-emerald-400 font-bold">R$ 24,90/mês</span>.
              </p>
           </div>
        </div>
        <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest">
           Revisar Todas as Assinaturas
        </button>
      </Card>
    </div>
  );
}
