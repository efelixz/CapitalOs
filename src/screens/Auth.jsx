import React, { useState } from 'react';
import {
  Lock,
  Mail,
  Smartphone,
  Fingerprint,
  ArrowRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { Card, cn } from '../components/Card';

export default function Auth({ onAuthSuccess }) {
  const [mode, setMode] = useState('login'); // login | signup | mfa
  const [email, setEmail] = useState('');

  const renderLogin = () => (
    <div className="space-y-6">
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-black text-white mb-2">Bem-vindo</h2>
        <p className="text-slate-400 text-sm">Acesse seu Centro de Controle</p>
      </header>

      <div className="space-y-4">
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-500 transition-colors" size={20} />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-500 transition-colors" size={20} />
          <input
            type="password"
            placeholder="Senha"
            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>
      </div>

      <button
        onClick={() => setMode('mfa')}
        className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(6,182,212,0.2)]"
      >
        Entrar
      </button>

      <div className="flex items-center gap-4 py-4">
        <div className="h-[1px] flex-1 bg-white/5"></div>
        <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Ou continue com</span>
        <div className="h-[1px] flex-1 bg-white/5"></div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <button className="flex items-center justify-center gap-3 py-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
          <Globe size={18} className="text-cyan-400" />
          <span className="text-[10px] font-black uppercase text-white tracking-widest">Continuar com Conta Global</span>
        </button>
      </div>

      <p className="text-center text-xs text-slate-500">
        Não tem uma conta? <button onClick={() => setMode('signup')} className="text-cyan-400 font-bold">Cadastre-se</button>
      </p>
    </div>
  );

  const renderMFA = () => (
    <div className="space-y-8 py-10">
      <header className="text-center">
        <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 mx-auto mb-6">
          <Smartphone className="text-cyan-400" size={32} />
        </div>
        <h2 className="text-2xl font-black text-white mb-2">Verificação</h2>
        <p className="text-slate-400 text-sm">Insira o código enviado para seu celular</p>
      </header>

      <div className="flex justify-between gap-3">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <input
            key={i}
            type="text"
            maxLength={1}
            className="w-12 h-14 bg-white/5 border border-white/5 rounded-xl text-center text-xl font-black text-cyan-400 focus:border-cyan-500 outline-none"
          />
        ))}
      </div>

      <div className="space-y-4">
        <button
          onClick={onAuthSuccess}
          className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-black text-xs uppercase tracking-[0.2em]"
        >
          Confirmar Código
        </button>
        <button className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 text-white font-black text-[10px] uppercase tracking-widest border border-white/5">
          <Fingerprint size={20} className="text-cyan-400" />
          Usar Biometria
        </button>
      </div>

      <p className="text-center text-xs text-slate-600">
        Reenviar código em <span className="text-white">00:45</span>
      </p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col justify-center px-2">
      <Card className="p-8 bg-slate-900/20 border-white/5 backdrop-blur-xl">
        {mode === 'login' && renderLogin()}
        {mode === 'mfa' && renderMFA()}
        {mode === 'signup' && (
          <div className="text-center space-y-6">
             <h2 className="text-2xl font-black text-white">Criar Conta</h2>
             <p className="text-slate-400 text-sm">Junte-se ao Ecossistema CapitalOS AI</p>
             <input placeholder="Nome Completo" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-sm" />
             <input placeholder="E-mail" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-sm" />
             <input placeholder="Senha" type="password" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-sm" />
             <button onClick={() => setMode('mfa')} className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-black text-xs uppercase tracking-[0.2em]">Cadastrar</button>
             <button onClick={() => setMode('login')} className="text-slate-500 text-xs uppercase font-black tracking-widest">Já tenho conta</button>
          </div>
        )}
      </Card>

      <div className="mt-10 flex items-center justify-center gap-2">
        <ShieldCheck className="text-emerald-400" size={16} />
        <span className="text-[9px] text-slate-600 uppercase font-black tracking-widest">Criptografia de Nível Bancário</span>
      </div>
    </div>
  );
}
