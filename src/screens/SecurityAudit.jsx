import React from 'react';
import {
  ArrowLeft,
  Shield,
  Lock,
  Key,
  Eye,
  Smartphone,
  Monitor,
  MapPin,
  AlertTriangle,
  History,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const AuditLogItem = ({ type, action, meta, time, status }) => {
  const icons = {
    auth: { icon: Key, color: "text-cyan-400", bg: "bg-cyan-500/10" },
    data: { icon: Eye, color: "text-indigo-400", bg: "bg-indigo-500/10" },
    sensitive: { icon: Shield, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    alert: { icon: AlertTriangle, color: "text-red-400", bg: "bg-red-500/10" }
  };

  const config = icons[type] || icons.auth;
  const Icon = config.icon;

  return (
    <div className="flex gap-4 py-5 border-b border-white/5 last:border-0">
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border border-opacity-20 flex-shrink-0", config.bg, config.color.replace('text-', 'border-'))}>
        <Icon className={config.color} size={18} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-white font-bold text-sm leading-tight">{action}</h4>
          <span className="text-[9px] text-slate-600 font-black uppercase">{time}</span>
        </div>
        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">{meta}</p>
        <div className="flex items-center gap-1">
           <CheckCircle2 size={10} className="text-emerald-400" />
           <span className="text-[8px] text-emerald-400 font-black uppercase">Verificado por Biometria</span>
        </div>
      </div>
    </div>
  );
};

export default function SecurityAudit({ onBack }) {
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
        <div className="flex items-center gap-3 mb-2">
           <Shield className="text-cyan-400" size={24} />
           <h1 className="text-3xl font-bold text-white">Segurança</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Trilha de Auditoria & Acessos
        </p>
      </header>

      {/* Security Health Mini */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-emerald-900/20 border-emerald-500/30 p-6 flex items-center justify-between">
         <div>
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-1">Estado de Proteção</p>
            <h3 className="text-xl font-black text-white">Nível Militar (AES-256)</h3>
         </div>
         <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <Lock className="text-emerald-400" size={24} />
         </div>
      </Card>

      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Atividade Recente</h3>
        <Card className="px-5">
           <AuditLogItem
             type="auth"
             action="Login efetuado"
             meta="iPhone 13 • São Paulo, BR"
             time="14:30"
           />
           <AuditLogItem
             type="sensitive"
             action="Alteração de Meta Financeira"
             meta="Reserva de Emergência -> R$ 60k"
             time="11:15"
           />
           <AuditLogItem
             type="data"
             action="Sincronização Open Finance"
             meta="Banco Itaú • API v2.4"
             time="Ontem"
           />
           <AuditLogItem
             type="auth"
             action="Nova Chave Autorizada"
             meta="FaceID Session Token"
             time="Ontem"
           />
        </Card>
      </section>

      {/* Export Action */}
      <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
        Exportar Log Completo <ChevronRight size={14} />
      </button>

      <div className="text-center pb-10">
         <p className="text-[9px] text-slate-700 uppercase font-black tracking-widest">Garantido por CapitalOS Trust Protocol</p>
      </div>
    </div>
  );
}
