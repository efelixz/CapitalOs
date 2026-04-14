import React from 'react';
import {
  Home,
  ArrowLeft,
  TrendingUp,
  MapPin,
  Key,
  ShieldCheck,
  ChevronRight,
  FileText,
  Hammer,
  DollarSign
} from 'lucide-react';

const RealEstateHub = ({ onBack }) => {
  const properties = [
    { name: 'Apartamento Jardins', location: 'São Paulo, SP', value: 'R$ 2.450.000', yield: '0.45%', status: 'Alugado', type: 'Residencial' },
    { name: 'Casa de Praia', location: 'Ilhabela, SP', value: 'R$ 1.800.000', yield: 'N/A', status: 'Uso Próprio', type: 'Lazer' },
    { name: 'Sala Comercial', location: 'Curitiba, PR', value: 'R$ 650.000', yield: '0.62%', status: 'Disponível', type: 'Comercial' },
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
            <h1 className="text-xl font-bold text-white tracking-tight">Real Estate</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Patrimônio Físico</p>
          </div>
        </div>
        <Home className="w-6 h-6 text-cyan-500" />
      </div>

      <div className="p-6 space-y-8">
        {/* Real Estate Portfolio Summary */}
        <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Home className="w-32 h-32 text-cyan-400" />
          </div>
          <div className="relative z-10">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Avaliação Estimada</p>
            <h2 className="text-4xl font-black text-white tracking-tighter mb-4">R$ 4.900.000</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                <TrendingUp className="w-3 h-3" />
                <span>+8.2% (12m)</span>
              </div>
              <div className="flex items-center gap-1 text-cyan-400 text-xs font-bold font-mono">
                <DollarSign className="w-3 h-3" />
                <span>R$ 18.500/mês (Aluguel)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Property List */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-cyan-400" />
              Suas Propriedades
            </h3>
            <button className="text-cyan-400 text-sm font-bold">Adicionar</button>
          </div>
          <div className="space-y-4">
            {properties.map((prop, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/5 bg-white/5 hover:border-white/10 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-500/10 rounded-2xl">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{prop.name}</h4>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{prop.location}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${prop.status === 'Alugado' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-500/10 text-slate-400'}`}>
                    {prop.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Valor</p>
                    <p className="text-sm font-bold text-white">{prop.value}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Rental Yield</p>
                    <p className="text-sm font-bold text-cyan-400">{prop.yield}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maintenance & Documents */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl border border-white/5 bg-white/5 flex flex-col items-center text-center gap-3">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400">
              <Hammer className="w-6 h-6" />
            </div>
            <p className="text-xs font-bold text-white uppercase tracking-tighter">Manutenção</p>
            <p className="text-[10px] text-slate-500 leading-tight">2 reparos pendentes</p>
          </div>
          <div className="p-6 rounded-3xl border border-white/5 bg-white/5 flex flex-col items-center text-center gap-3">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
              <FileText className="w-6 h-6" />
            </div>
            <p className="text-xs font-bold text-white uppercase tracking-tighter">Documentos</p>
            <p className="text-[10px] text-slate-500 leading-tight">Escrituras & IPTU ok</p>
          </div>
        </div>

        {/* AI Insight */}
        <section className="p-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/5">
          <h3 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Otimização de Portfólio
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            A venda da "Sala Comercial" em Curitiba pode liberar capital para um aporte em FIIs de logística com 1.2% de yield superior.
          </p>
          <button className="w-full py-3 bg-emerald-500 rounded-xl text-black font-black text-[10px] uppercase tracking-widest">
            Simular Troca de Ativo
          </button>
        </section>
      </div>
    </div>
  );
};

export default RealEstateHub;
