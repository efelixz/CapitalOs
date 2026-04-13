import React, { useState } from 'react';
import Dashboard from './screens/Dashboard';
import PurchaseDecision from './screens/PurchaseDecision';
import Wallet from './screens/Wallet';
import Insights from './screens/Insights';
import Transactions from './screens/Transactions';
import Markets from './screens/Markets';
import Goals from './screens/Goals';
import FinancialHealth from './screens/FinancialHealth';
import AIChat from './screens/AIChat';
import Profile from './screens/Profile';
import LifeSimulator from './screens/LifeSimulator';
import Analytics from './screens/Analytics';
import DebtManager from './screens/DebtManager';
import GlobalMobility from './screens/GlobalMobility';
import Onboarding from './screens/Onboarding';
import CreditAnalysis from './screens/CreditAnalysis';
import MoneyDistribution from './screens/MoneyDistribution';
import Operations from './screens/Operations';
import Reports from './screens/Reports';
import Notifications from './screens/Notifications';
import Integrations from './screens/Integrations';
import Auth from './screens/Auth';
import RiskProfile from './screens/RiskProfile';
import Settings from './screens/Settings';
import LandingPage from './screens/LandingPage';
import PortfolioDetail from './screens/PortfolioDetail';
import FinancialCalendar from './screens/FinancialCalendar';
import MigrationRoadmap from './screens/MigrationRoadmap';
import OperationsTerminal from './screens/OperationsTerminal';
import { Home, Lightbulb, Briefcase, Target, MessageSquare } from 'lucide-react';

const NavButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
  >
    <Icon className={`w-5 h-5 ${active ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : ''}`} />
    <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
  </button>
);

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage onStart={() => setCurrentScreen('onboarding')} />;
      case 'onboarding':
        return <Onboarding onComplete={() => setCurrentScreen('auth')} />;
      case 'auth':
        return <Auth onAuthSuccess={() => setCurrentScreen('risk_profile')} />;
      case 'risk_profile':
        return <RiskProfile onComplete={() => setCurrentScreen('dashboard')} />;
      case 'settings':
      case 'configuracoes':
        return <Settings onBack={() => setCurrentScreen('profile')} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'goals':
      case 'metas':
        return <Goals onNavigate={setCurrentScreen} />;
      case 'health':
      case 'saude':
        return <FinancialHealth onBack={() => setCurrentScreen('dashboard')} />;
      case 'portfolio_detail':
        return <PortfolioDetail onBack={() => setCurrentScreen('wallet')} />;
      case 'calendar':
      case 'calendario':
        return <FinancialCalendar onBack={() => setCurrentScreen('dashboard')} />;
      case 'migration_roadmap':
        return <MigrationRoadmap onBack={() => setCurrentScreen('mobility')} />;
      case 'operations_terminal':
        return <OperationsTerminal onBack={() => setCurrentScreen('operations')} />;
      case 'credit':
      case 'credito':
        return <CreditAnalysis onBack={() => setCurrentScreen('dashboard')} />;
      case 'distribution':
      case 'distribuicao':
        return <MoneyDistribution onBack={() => setCurrentScreen('dashboard')} />;
      case 'operations':
      case 'operacoes':
        return <Operations onBack={() => setCurrentScreen('dashboard')} onNavigate={setCurrentScreen} />;
      case 'reports':
      case 'relatorios':
        return <Reports onBack={() => setCurrentScreen('dashboard')} />;
      case 'notifications':
      case 'notificacoes':
        return <Notifications onBack={() => setCurrentScreen('dashboard')} />;
      case 'integrations':
      case 'conexoes':
        return <Integrations onBack={() => setCurrentScreen('dashboard')} />;
      case 'life_sim':
        return <LifeSimulator onBack={() => setCurrentScreen('goals')} />;
      case 'analytics':
        return <Analytics />;
      case 'chat':
      case 'concierge':
        return <AIChat />;
      case 'profile':
        return <Profile onBack={() => setCurrentScreen('dashboard')} onNavigate={setCurrentScreen} />;
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
        return <Transactions onBack={() => setCurrentScreen('dashboard')} />;
      case 'markets':
      case 'mercados':
        return <Markets onBack={() => setCurrentScreen('dashboard')} />;
      case 'debts':
      case 'dividas':
        return <DebtManager onBack={() => setCurrentScreen('dashboard')} />;
      case 'mobility':
      case 'mobilidade':
        return <GlobalMobility onBack={() => setCurrentScreen('dashboard')} onNavigate={setCurrentScreen} />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  // Hide nav for specific focus flows
  const showNav = !['landing', 'onboarding', 'auth', 'risk_profile', 'purchase_decision', 'markets', 'mercados', 'health', 'saude', 'life_sim', 'profile', 'mobility', 'debts', 'credit', 'distribution', 'operations', 'reports', 'notifications', 'integrations', 'settings', 'portfolio_detail', 'calendar', 'migration_roadmap', 'operations_terminal'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-[#050A10] text-slate-200 font-sans selection:bg-cyan-500/30">
      <div className="max-w-md mx-auto min-h-screen bg-[#050A10] p-6 pb-32 relative overflow-hidden flex flex-col">
        <main className="flex-1">
          {renderScreen()}
        </main>

        {/* Persistent Bottom Nav - Streamlined to 5 tabs */}
        <nav className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-950/80 backdrop-blur-xl border-t border-white/5 p-4 flex justify-between items-center px-8 pb-8 z-50 rounded-t-[32px] transition-transform duration-300 ${showNav ? 'translate-y-0' : 'translate-y-full'}`}>
          <NavButton
            icon={Home}
            label="Início"
            active={currentScreen === 'dashboard'}
            onClick={() => setCurrentScreen('dashboard')}
          />
          <NavButton
            icon={Briefcase}
            label="Carteira"
            active={currentScreen === 'wallet' || currentScreen === 'carteira'}
            onClick={() => setCurrentScreen('wallet')}
          />
          <NavButton
            icon={MessageSquare}
            label="Chat"
            active={currentScreen === 'chat' || currentScreen === 'concierge'}
            onClick={() => setCurrentScreen('chat')}
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
        </nav>
      </div>
    </div>
  );
}
