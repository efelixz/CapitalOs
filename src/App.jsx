import React, { useState } from 'react';
import Dashboard from './screens/Dashboard';
import PurchaseDecision from './screens/PurchaseDecision';
import Wallet from './screens/Wallet';
import Insights from './screens/Insights';
import Transactions from './screens/Transactions';
import Markets from './screens/Markets';
import Goals from './screens/Goals';
import FinancialHealth from './screens/FinancialHealth';
import { Home, Lightbulb, Briefcase, Search, ListTodo, Target } from 'lucide-react';

const NavButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
  >
    <Icon className={`w-6 h-6 ${active ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : ''}`} />
    <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
  </button>
);

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'goals':
      case 'metas':
        return <Goals />;
      case 'health':
      case 'saude':
        return <FinancialHealth onBack={() => setCurrentScreen('dashboard')} />;
      case 'simular':
      case 'purchase_decision':
        return <PurchaseDecision onBack={() => setCurrentScreen('dashboard')} />;
      case 'wallet':
      case 'carteira':
        return <Wallet onNavigate={setCurrentScreen} />;
      case 'insights':
        return <Insights />;
      case 'transactions':
      case 'transacoes':
        return <Transactions />;
      case 'markets':
      case 'mercados':
        return <Markets onBack={() => setCurrentScreen('dashboard')} />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  // Hide nav for detail-heavy simulator or specific full-screen flows if needed
  const showNav = !['simular', 'purchase_decision', 'markets', 'mercados', 'health', 'saude'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-[#050A10] text-slate-200 font-sans selection:bg-cyan-500/30">
      <div className="max-w-md mx-auto min-h-screen bg-[#050A10] p-6 pb-32 relative overflow-hidden">
        <main>
          {renderScreen()}
        </main>

        {/* Persistent Bottom Nav */}
        <nav className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-950/80 backdrop-blur-xl border-t border-white/5 p-4 flex justify-between items-center px-6 pb-8 z-50 rounded-t-[32px] transition-transform duration-300 ${showNav ? 'translate-y-0' : 'translate-y-full'}`}>
          <NavButton
            icon={Home}
            label="Início"
            active={currentScreen === 'dashboard'}
            onClick={() => setCurrentScreen('dashboard')}
          />
          <NavButton
            icon={Briefcase}
            label="Carteira"
            active={currentScreen === 'carteira' || currentScreen === 'wallet'}
            onClick={() => setCurrentScreen('wallet')}
          />
          <NavButton
            icon={ListTodo}
            label="Extrato"
            active={currentScreen === 'transactions' || currentScreen === 'transacoes'}
            onClick={() => setCurrentScreen('transactions')}
          />
          <NavButton
            icon={Target}
            label="Metas"
            active={currentScreen === 'goals' || currentScreen === 'metas'}
            onClick={() => setCurrentScreen('goals')}
          />
          <NavButton
            icon={Lightbulb}
            label="Insights"
            active={currentScreen === 'insights'}
            onClick={() => setCurrentScreen('insights')}
          />
          <NavButton
            icon={Search}
            label="Simular"
            active={currentScreen === 'simular' || currentScreen === 'purchase_decision'}
            onClick={() => setCurrentScreen('simular')}
          />
        </nav>
      </div>
    </div>
  );
}
