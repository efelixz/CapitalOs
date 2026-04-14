import React from 'react';
import {
  Users,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  ChevronRight,
  ArrowLeft,
  Crown,
  Lock,
  FileText,
  UserPlus
} from 'lucide-react';

const FamilyOffice = ({ onBack }) => {
  const members = [
    { name: 'Ricardo Santos', role: 'Titular', allocation: '65%', balance: 'R$ 8.420.000', color: 'bg-emerald-500' },
    { name: 'Helena Santos', role: 'Cônjuge', allocation: '25%', balance: 'R$ 3.240.000', color: 'bg-cyan-500' },
    { name: 'Lucas Santos', role: 'Dependente', allocation: '5%', balance: 'R$ 648.000', color: 'bg-blue-500' },
    { name: 'Sofia Santos', role: 'Dependente', allocation: '5%', balance: 'R$ 648.000', color: 'bg-indigo-500' },
  ];

  const trusts = [
    { name: 'Trust Familiar Alpha', status: 'Ativo', jurisdiction: 'Bahamas', value: 'US$ 1.2M' },
    { name: 'Holding Patrimonial Júpiter', status: 'Ativo', jurisdiction: 'Brasil', value: 'R$ 12.5M' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#050A10] text-slate-200 pb-24">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/5 bg-[#050A10]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors">
            <ArrowLeft className="w-6 h-6 text-slate-400" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Family Office</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Gestão Multigeracional</p>
          </div>
        </div>
        <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
          <Crown className="w-5 h-5 text-amber-500" />
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Total Consolidation */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-black p-8 shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheck className="w-24 h-24 text-emerald-400" />
          </div>
          <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Patrimônio Consolidado</p>
          <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">R$ 12.956.000</h2>
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold bg-emerald-500/10 w-fit px-2 py-0.5 rounded">
            <TrendingUp className="w-4 h-4" />
            <span>+12.4% vs ano anterior</span>
          </div>
        </div>

        {/* Family Members */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              Membros da Família
            </h3>
            <button className="text-cyan-400 text-sm font-bold flex items-center gap-1">
              <UserPlus className="w-4 h-4" />
              Convidar
            </button>
          </div>
          <div className="space-y-3">
            {members.map((member, i) => (
              <div key={i} className="group p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {member.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">{member.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">{member.balance}</p>
                    <p className="text-xs text-slate-500">{member.allocation} do total</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Structures & Trusts */}
        <section>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-400" />
            Estruturas Jurídicas
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {trusts.map((trust, i) => (
              <div key={i} className="p-4 rounded-2xl border border-white/5 bg-gradient-to-r from-slate-900/50 to-transparent">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded uppercase tracking-widest">
                    {trust.status}
                  </span>
                  <span className="text-xs text-slate-500 font-medium uppercase">{trust.jurisdiction}</span>
                </div>
                <h4 className="font-bold text-white mb-1">{trust.name}</h4>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Valor Estimado</p>
                  <p className="text-lg font-bold text-white tracking-tight">{trust.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Succession Planning */}
        <section className="p-6 rounded-3xl border border-white/10 bg-slate-900/40">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Lock className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">Planejamento Sucessório</h3>
              <p className="text-xs text-slate-500">Última atualização em Out 2023</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-300">Testamento Vital</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium text-slate-300">Diretrizes de Investimento Familiar</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FamilyOffice;
