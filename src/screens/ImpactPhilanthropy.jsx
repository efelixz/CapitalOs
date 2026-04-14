import React from 'react';
import {
  Heart,
  Globe,
  Leaf,
  TrendingUp,
  ArrowLeft,
  ChevronRight,
  Target,
  Zap,
  Award,
  Users
} from 'lucide-react';

const ImpactPhilanthropy = ({ onBack }) => {
  const causes = [
    { name: 'Educação em Tecnologia', amount: 'R$ 45.000', impact: '120 bolsas', icon: Zap, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { name: 'Reflorestamento Amazônico', amount: 'R$ 32.500', impact: '2.500 árvores', icon: Leaf, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { name: 'Acesso a Água Potável', amount: 'R$ 28.000', impact: '3 poços artesianos', icon: Globe, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  ];

  const metrics = [
    { label: 'Total Doado', value: 'R$ 105.500', sub: 'Em 2023', icon: Heart },
    { label: 'Impact Score AI', value: '94/100', sub: 'Top 5% usuários', icon: Award },
    { label: 'Eficiência Fiscal', value: 'R$ 18.200', sub: 'Em deduções', icon: TrendingUp },
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
            <h1 className="text-xl font-bold text-white tracking-tight">Impacto & Filantropia</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Capital com Propósito</p>
          </div>
        </div>
        <Heart className="w-6 h-6 text-rose-500 fill-rose-500/20" />
      </div>

      <div className="p-6 space-y-8">
        {/* Impact Hero */}
        <div className="p-8 rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-slate-900 to-black text-center">
          <div className="inline-flex p-3 rounded-2xl bg-rose-500/20 mb-4">
            <Globe className="w-8 h-8 text-rose-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Seu Impacto Global</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[250px] mx-auto">
            Suas contribuições estão mudando vidas em 4 países e 12 comunidades.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((m, i) => (
            <div key={i} className="p-3 rounded-2xl border border-white/5 bg-white/5 text-center">
              <m.icon className="w-5 h-5 text-rose-400 mx-auto mb-2" />
              <p className="text-lg font-bold text-white leading-tight">{m.value}</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Current Causes */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-rose-400" />
              Projetos Ativos
            </h3>
            <button className="text-rose-400 text-sm font-bold">Ver Todos</button>
          </div>
          <div className="space-y-4">
            {causes.map((cause, i) => (
              <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${cause.bg}`}>
                    <cause.icon className={`w-6 h-6 ${cause.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{cause.name}</h4>
                    <p className="text-xs text-emerald-400 font-medium">{cause.impact}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{cause.amount}</p>
                  <ChevronRight className="w-4 h-4 text-slate-600 inline-block mt-1" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Recommendation for Impact */}
        <section className="p-6 rounded-3xl border border-indigo-500/30 bg-indigo-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Zap className="w-20 h-20 text-indigo-400" />
          </div>
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              Insight da IA
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              "Baseado no seu perfil, o projeto <span className="text-indigo-400 font-bold">Ocean CleanUP</span> tem 98% de alinhamento com seus valores de sustentabilidade marinha."
            </p>
            <button className="w-full py-3 bg-indigo-500 rounded-xl text-white font-bold text-sm hover:bg-indigo-600 transition-colors">
              Explorar Novo Projeto
            </button>
          </div>
        </section>

        {/* Volunteer & Community */}
        <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5">
          <div className="p-3 bg-cyan-500/10 rounded-xl">
            <Users className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white text-sm">Comunidade Family Office</h4>
            <p className="text-xs text-slate-500">3 membros da sua família doaram juntos este mês.</p>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-600" />
        </div>
      </div>
    </div>
  );
};

export default ImpactPhilanthropy;
