import React, { useState } from 'react';
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Globe,
  AlertCircle,
  Info,
  ChevronRight,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/Card';

const MarketTrend = ({ currency, price, change, score, description, icon: Icon, colorClass, data }) => (
  <Card className="mb-6 border-l-4 border-l-cyan-500 overflow-hidden">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-2xl ${colorClass} bg-opacity-20`}>
          <Icon className={`w-6 h-6 ${colorClass.replace('bg-', 'text-')}`} />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{currency}</h3>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Paridade BRL</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-black text-white">{price}</p>
        <p className={`text-xs font-bold ${change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
          {change} (24h)
        </p>
      </div>
    </div>

    {/* Mini Sparkline Visualization */}
    <div className="h-16 flex items-end gap-1 mb-6 px-1">
      {data.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-sm transition-all duration-1000 ${i === data.length - 1 ? 'bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-slate-800'}`}
          style={{ height: `${h}%` }}
        ></div>
      ))}
    </div>

    <div className="bg-slate-900/50 rounded-2xl p-4 border border-white/5 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI Opportunity Score</span>
        <span className="text-cyan-400 font-black text-sm">{score}/100</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-cyan-500 transition-all duration-1000" style={{ width: `${score}%` }}></div>
      </div>
      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
        {description}
      </p>
    </div>

    <button className="w-full py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2">
      Operar {currency.split(' ')[0]} <ArrowRight size={14} />
    </button>
  </Card>
);

export default function Markets({ onBack }) {
  const [activeMarket, setActiveMarket] = useState('Global');

  return (
    <div className="flex flex-col gap-6 pb-24">
      <header className="px-1">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-4"
        >
          <ArrowLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Voltar</span>
        </button>
        <h1 className="text-3xl font-bold text-white mb-2">Monitor Global</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Oportunidades em Tempo Real
        </p>
      </header>

      {/* Market Pulse Summary */}
      <Card variant="premium" className="bg-gradient-to-br from-slate-900 to-cyan-900/20 border-cyan-500/30">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
              <Globe className="text-cyan-400" size={20} />
            </div>
            <div>
              <p className="text-white font-bold">Sentimento do Mercado</p>
              <p className="text-[10px] text-cyan-400 font-black uppercase">Otimista (Geral)</p>
            </div>
          </div>
          <Zap className="text-gold animate-pulse" size={20} />
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          O dólar apresenta volatilidade moderada após dados de inflação nos EUA. Oportunidades detectadas em paridades de tecnologia e ativos digitais.
        </p>
      </Card>

      <div className="space-y-2">
        <MarketTrend
          currency="Dólar Americano (USD)"
          price="R$ 4,92"
          change="-0.2%"
          score={92}
          description="A paridade atual está próxima ao suporte técnico. O CapitalOS AI sugere aporte gradual para proteção de patrimônio."
          icon={TrendingUp}
          colorClass="bg-emerald-500"
          data={[40, 45, 38, 52, 48, 42, 39, 41]}
        />

        <MarketTrend
          currency="Euro (EUR)"
          price="R$ 5,34"
          change="+0.1%"
          score={75}
          description="Estabilidade na zona do euro. Ponto de entrada razoável, mas aguarde confirmação de taxas do BCE para aportes maiores."
          icon={Globe}
          colorClass="bg-blue-500"
          data={[60, 58, 62, 65, 63, 66, 64, 65]}
        />

        <MarketTrend
          currency="Bitcoin (BTC)"
          price="R$ 312.450"
          change="+4.2%"
          score={40}
          description="Alta volatilidade detectada. O score baixo reflete o risco de topo temporário. Recomenda-se cautela ou 'HODL' para posições existentes."
          icon={TrendingDown}
          colorClass="bg-orange-500"
          data={[30, 45, 60, 55, 75, 90, 85, 100]}
        />
      </div>

      {/* Economic Calendar Mini */}
      <section>
        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 px-1">Próximos Eventos</h3>
        <Card className="p-0 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/5 bg-slate-900/30">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black text-white bg-slate-800 px-2 py-1 rounded">18 SET</span>
              <p className="text-xs font-bold text-slate-300">Decisão de Taxa (FED)</p>
            </div>
            <Info size={14} className="text-slate-500" />
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-900/30">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black text-white bg-slate-800 px-2 py-1 rounded">21 SET</span>
              <p className="text-xs font-bold text-slate-300">IPCA Brasil (Mensal)</p>
            </div>
            <Info size={14} className="text-slate-500" />
          </div>
        </Card>
      </section>
    </div>
  );
}
