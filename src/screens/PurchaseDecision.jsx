import React from 'react';
import { ArrowLeft, CheckCircle2, AlertTriangle, TrendingDown, Wallet, Target, Info, ChevronRight, ShoppingBag } from 'lucide-react';
import { Card } from '../components/Card';
import { IconButton } from '../components/IconButton';

const PurchaseDecision = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050A10] text-slate-100 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#050A10]/80 backdrop-blur-md px-6 py-4 flex items-center gap-4">
        <IconButton
          icon={ArrowLeft}
          onClick={onBack}
          className="bg-slate-800/50"
        />
        <h1 className="text-xl font-bold font-display">Decisões de Compra</h1>
      </div>

      <div className="px-6 py-4 space-y-6">
        {/* Active Simulation */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <Card className="relative bg-[#0A121C] border-slate-800/50">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                  <ShoppingBag className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">MacBook Pro M3 Max</h3>
                  <p className="text-slate-400 text-sm">Tecnologia & Trabalho</p>
                  <p className="text-cyan-400 font-bold mt-1">R$ 32.500,00</p>
                </div>
              </div>
              <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
                SIMULADO
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Poder de compra</span>
                <span className="font-bold text-emerald-400">Alto</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[85%]"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* AI Verdict */}
        <div className="bg-gradient-to-br from-cyan-900/20 to-slate-900/40 border border-cyan-500/20 rounded-[2rem] p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-cyan-400 font-bold uppercase tracking-wider text-xs">Veredito CapitalOS</h4>
              <p className="text-lg font-bold text-white">Recomendado com Ajuste</p>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Esta compra representa <span className="text-white font-bold">12% da sua liquidez imediata</span>.
            O impacto no seu objetivo "Liberdade 2030" será de apenas <span className="text-white font-bold">14 dias de atraso</span>,
            compensado pelo ganho de produtividade estimado em 20%.
          </p>

          <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            VER ESTRATÉGIA DE PAGAMENTO
          </button>
        </div>

        {/* Impact Analysis */}
        <h2 className="text-lg font-bold mt-8 mb-4">Análise de Impacto</h2>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-[#0A121C] p-5 rounded-3xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
              <AlertTriangle className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-tight">Fundo de Reserva</p>
              <p className="text-sm font-medium mt-0.5">Redução de 6.2 meses para 5.8 meses de cobertura.</p>
            </div>
          </div>

          <div className="bg-[#0A121C] p-5 rounded-3xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
              <TrendingDown className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-tight">Custo de Oportunidade</p>
              <p className="text-sm font-medium mt-0.5">R$ 32.500 investidos seriam <span className="text-emerald-400 font-bold">R$ 54.120</span> em 5 anos.</p>
            </div>
          </div>

          <div className="bg-[#0A121C] p-5 rounded-3xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20">
              <Target className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-tight">Meta de Aposentadoria</p>
              <p className="text-sm font-medium mt-0.5">Impacto residual de <span className="text-red-400">-0.04%</span> no montante final.</p>
            </div>
          </div>
        </div>

        {/* Alternative Comparison */}
        <h2 className="text-lg font-bold mt-8 mb-4">Cenários Alternativos</h2>

        <div className="space-y-3">
          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Wallet className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-sm font-bold">Comprar à vista</p>
                <p className="text-xs text-emerald-400">5% de desconto (R$ 1.625)</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </div>

          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 flex items-center justify-between opacity-60">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-sm font-bold">Aguardar 6 meses</p>
                <p className="text-xs text-slate-400">Risco cambial de R$ 2.400</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDecision;
