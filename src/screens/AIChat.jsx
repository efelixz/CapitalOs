import React, { useState } from 'react';
import {
  Send,
  Sparkles,
  Bot,
  User,
  ChevronRight,
  Mic,
  Paperclip,
  Zap,
  TrendingUp,
  ShieldAlert,
  Target,
  Brain
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const AgentChip = ({ icon: Icon, label, active, onClick, colorClass }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all whitespace-nowrap",
      active ? cn("bg-opacity-10 border-opacity-100", colorClass.replace('text-', 'bg-').replace('text-', 'border-')) : "bg-white/5 border-white/5 opacity-50"
    )}
  >
    <Icon className={cn("w-4 h-4", active ? colorClass : "text-slate-500")} />
    <span className={cn("text-[10px] font-black uppercase tracking-widest", active ? "text-white" : "text-slate-500")}>{label}</span>
  </button>
);

const ChatMessage = ({ type, content, time }) => (
  <div className={cn("flex gap-4 mb-6", type === 'user' ? "flex-row-reverse" : "flex-row")}>
    <div className={cn(
      "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border",
      type === 'user' ? "bg-slate-800 border-white/10" : "bg-cyan-500/10 border-cyan-500/20"
    )}>
      {type === 'user' ? <User size={16} className="text-slate-400" /> : <Bot size={16} className="text-cyan-400" />}
    </div>
    <div className={cn(
      "max-w-[80%] p-4 rounded-2xl",
      type === 'user' ? "bg-slate-800 text-slate-200 rounded-tr-none" : "bg-white/5 border border-white/5 text-slate-300 rounded-tl-none"
    )}>
      <p className="text-sm leading-relaxed">{content}</p>
      <span className="text-[9px] text-slate-600 mt-2 block uppercase font-black">{time}</span>
    </div>
  </div>
);

export default function AIChat() {
  const [input, setInput] = useState('');
  const [agent, setAgent] = useState('strategist');

  const suggestions = [
    "Analisar meu risco Brasil",
    "Melhor FII para dividendos",
    "Simular quitação bmw",
    "Impacto dolar p/ portugal"
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-160px)]">
      <header className="px-1 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
            <Sparkles className="text-cyan-400" size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white leading-tight">Concierge AI</h1>
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Multi-Agent System Online</p>
          </div>
        </div>

        {/* Agent Selector */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <AgentChip icon={Brain} label="Estrategista" active={agent === 'strategist'} onClick={() => setAgent('strategist')} colorClass="text-cyan-400" />
          <AgentChip icon={ShieldAlert} label="Risco" active={agent === 'risk'} onClick={() => setAgent('risk')} colorClass="text-red-400" />
          <AgentChip icon={Target} label="Metas" active={agent === 'goals'} onClick={() => setAgent('goals')} colorClass="text-emerald-400" />
          <AgentChip icon={TrendingUp} label="Trader" active={agent === 'trader'} onClick={() => setAgent('trader')} colorClass="text-indigo-400" />
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-1 pr-2 no-scrollbar mb-4">
        <ChatMessage
          type="bot"
          time="14:30"
          content={`Olá! Sou seu Agente ${agent === 'strategist' ? 'Estrategista' : (agent === 'risk' ? 'de Risco' : 'de Metas')}. Como posso otimizar seu patrimônio hoje?`}
        />

        <div className="flex items-center gap-2 mb-8">
          <div className="h-[1px] flex-1 bg-white/5"></div>
          <span className="text-[9px] text-slate-600 font-black uppercase tracking-[0.2em]">Sessão Ativa</span>
          <div className="h-[1px] flex-1 bg-white/5"></div>
        </div>

        <ChatMessage
          type="user"
          time="14:32"
          content="Qual o risco real de manter 70% do meu capital no Brasil hoje?"
        />

        <div className="flex gap-4 mb-6">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <Bot size={16} className="text-cyan-400" />
          </div>
          <div className="flex-1">
            <Card className="bg-white/5 border border-white/5 p-4 rounded-tl-none">
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                O <span className="text-white font-bold">Risco Brasil</span> sistêmico (fiscal + político) sugere uma exposição máxima de 50% para perfis moderados. Seus 70% atuais criam um custo de oportunidade cambial e vulnerabilidade a crises locais.
              </p>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="text-red-400" size={14} />
                  <span className="text-xs text-slate-300">Vulnerabilidade Cambial</span>
                </div>
                <span className="text-xs font-black text-red-400">ALTA</span>
              </div>
              <span className="text-[9px] text-slate-600 mt-4 block uppercase font-black">14:33</span>
            </Card>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="space-y-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {suggestions.map((s, i) => (
            <button key={i} onClick={() => setInput(s)} className="px-4 py-2 rounded-full bg-slate-900 border border-white/5 text-[11px] text-slate-300 font-bold hover:bg-slate-800 transition-all whitespace-nowrap">{s}</button>
          ))}
        </div>

        <div className="relative group">
          <div className="relative bg-slate-900 border border-white/10 rounded-[20px] p-2 flex items-center gap-2 focus-within:border-cyan-500/50 transition-all">
            <button className="p-2.5 text-slate-500 hover:text-white transition-colors"><Paperclip size={20} /></button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Fale com a IA..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-slate-600 px-2"
            />
            <button className="p-2.5 bg-cyan-500 text-black rounded-2xl shadow-lg"><Send size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
