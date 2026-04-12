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
  AlertCircle
} from 'lucide-react';
import { Card, cn } from '../components/Card';

const SuggestionChip = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 rounded-full bg-slate-900 border border-white/5 text-[11px] text-slate-300 font-bold hover:bg-slate-800 hover:border-cyan-500/50 transition-all whitespace-nowrap"
  >
    {text}
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

  const suggestions = [
    "Como reduzir meu IR este ano?",
    "Posso comprar um MacBook Pro?",
    "Explique meu Health Score",
    "Melhor alocação para USD hoje"
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-140px)]">
      <header className="px-1 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
            <Sparkles className="text-cyan-400" size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white leading-tight">Concierge AI</h1>
            <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Online • Inteligência Ativa</p>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-1 pr-2 no-scrollbar mb-4">
        <ChatMessage
          type="bot"
          time="14:30"
          content="Olá! Sou seu Concierge CapitalOS. Analisei seu patrimônio e vi que você tem R$ 12.800 de renda disponível este mês. Como posso ajudar você a otimizar seu futuro hoje?"
        />

        <div className="flex items-center gap-2 mb-8">
          <div className="h-[1px] flex-1 bg-white/5"></div>
          <span className="text-[9px] text-slate-600 font-black uppercase tracking-[0.2em]">Hoje</span>
          <div className="h-[1px] flex-1 bg-white/5"></div>
        </div>

        <ChatMessage
          type="user"
          time="14:32"
          content="Vale a pena amortizar meu financiamento imobiliário ou investir esse excedente em TD IPCA+?"
        />

        <div className="flex gap-4 mb-6">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <Bot size={16} className="text-cyan-400" />
          </div>
          <div className="flex-1">
            <Card className="bg-white/5 border border-white/5 p-4 rounded-tl-none">
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Com base na sua taxa de financiamento de <span className="text-white font-bold">9.5% a.a.</span> e o cenário atual do TD IPCA+ 2029 (pagando ~6.2% + IPCA), a amortização oferece um <span className="text-emerald-400 font-bold">retorno real garantido</span> superior.
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-slate-900/50 rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="text-gold" size={14} />
                    <span className="text-xs text-slate-300">Economia estimada em juros</span>
                  </div>
                  <span className="text-xs font-black text-white">R$ 42.450</span>
                </div>
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
            <SuggestionChip key={i} text={s} onClick={() => setInput(s)} />
          ))}
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-[24px] blur opacity-10 group-focus-within:opacity-30 transition duration-500"></div>
          <div className="relative bg-slate-900 border border-white/10 rounded-[20px] p-2 flex items-center gap-2">
            <button className="p-2.5 text-slate-500 hover:text-white transition-colors">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte qualquer coisa..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-slate-600 px-2"
            />
            <div className="flex items-center gap-1">
              <button className="p-2.5 text-slate-500 hover:text-white transition-colors">
                <Mic size={20} />
              </button>
              <button className="p-2.5 bg-cyan-500 text-black rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
