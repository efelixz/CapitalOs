import React from 'react';
import {
  ArrowLeft,
  Bell,
  Zap,
  AlertTriangle,
  TrendingUp,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  Info
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const NotificationItem = ({ title, body, time, type, read }) => {
  const icons = {
    alert: { icon: AlertTriangle, color: "text-red-400", bg: "bg-red-500/10" },
    insight: { icon: Zap, color: "text-gold", bg: "bg-gold/10" },
    market: { icon: TrendingUp, color: "text-cyan-400", bg: "bg-cyan-500/10" },
    payment: { icon: CreditCard, color: "text-indigo-400", bg: "bg-indigo-500/10" },
    success: { icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-500/10" }
  };

  const config = icons[type] || icons.insight;
  const Icon = config.icon;

  return (
    <div className={cn("flex gap-4 py-5 border-b border-white/5 last:border-0 group cursor-pointer", !read && "bg-white/[0.02] -mx-5 px-5")}>
      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center border flex-shrink-0 transition-transform group-hover:scale-105", config.bg, config.color.replace('text-', 'border-').concat('/20'))}>
        <Icon className={config.color} size={24} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-white font-bold text-sm leading-tight pr-4">{title}</h4>
          <span className="text-[9px] text-slate-600 font-black uppercase whitespace-nowrap">{time}</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed mb-2">{body}</p>
        {!read && <span className="w-2 h-2 bg-cyan-500 rounded-full block"></span>}
      </div>
    </div>
  );
};

export default function Notifications({ onBack }) {
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
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-white">Notificações</h1>
          <button className="text-[10px] text-cyan-400 font-black uppercase tracking-widest">Limpar Tudo</button>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Centro de Inteligência
        </p>
      </header>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Hoje</h3>
        <Card className="px-5">
          <NotificationItem
            type="alert"
            title="Vencimento Próximo"
            body="Sua fatura do cartão CapitalBlack vence amanhã. O valor de R$ 4.250 já está reservado no seu saldo."
            time="10:30"
            read={false}
          />
          <NotificationItem
            type="market"
            title="Oportunidade em USD"
            body="O dólar caiu 1.2% nas últimas 2 horas. Seu Score de Compra subiu para 94. Sugerimos aporte de proteção."
            time="08:15"
            read={false}
          />
        </Card>
      </section>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Ontem</h3>
        <Card className="px-5">
          <NotificationItem
            type="insight"
            title="Dica de Economia"
            body="Detectamos que você pode economizar R$ 450 este mês otimizando suas assinaturas de serviços recorrentes."
            time="Ontem"
            read={true}
          />
          <NotificationItem
            type="success"
            title="Aporte Concluído"
            body="Seu investimento de R$ 10.000 em Tesouro IPCA+ foi processado com sucesso. Sua meta 'Liberdade' avançou 0.4%."
            time="Ontem"
            read={true}
          />
        </Card>
      </section>

      <Card className="p-5 flex items-center justify-between border-dashed border-white/10 bg-transparent">
        <div className="flex items-center gap-4">
          <Info className="text-slate-600" size={20} />
          <p className="text-xs text-slate-600 font-medium">Você recebeu 14 notificações nos últimos 7 dias.</p>
        </div>
      </Card>
    </div>
  );
}
