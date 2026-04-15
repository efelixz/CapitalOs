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
import CashFlow from './screens/CashFlow';
import Rebalancing from './screens/Rebalancing';
import GeographicOptimization from './screens/GeographicOptimization';
import TaxStrategy from './screens/TaxStrategy';
import SecurityAudit from './screens/SecurityAudit';
import DecisionHistory from './screens/DecisionHistory';
import WealthEvolution from './screens/WealthEvolution';
import DividendTracker from './screens/DividendTracker';
import SubscriptionManager from './screens/SubscriptionManager';
import EstatePlanning from './screens/EstatePlanning';
import PortfolioStressTest from './screens/PortfolioStressTest';
import GlobalSearch from './screens/GlobalSearch';
import DailyChecklist from './screens/DailyChecklist';
import FinancialJournal from './screens/FinancialJournal';
import TradeExecution from './screens/TradeExecution';
import SubscriptionFlow from './screens/SubscriptionFlow';
import HelpCenter from './screens/HelpCenter';
import Auth from './screens/Auth';
import RiskProfile from './screens/RiskProfile';
import Settings from './screens/Settings';
import LandingPage from './screens/LandingPage';
import PortfolioDetail from './screens/PortfolioDetail';
import FinancialCalendar from './screens/FinancialCalendar';
import MigrationRoadmap from './screens/MigrationRoadmap';
import OperationsTerminal from './screens/OperationsTerminal';
import AddTransaction from './screens/AddTransaction';
import Budget from './screens/Budget';
import BehavioralInsights from './screens/BehavioralInsights';
import AssetDiscovery from './screens/AssetDiscovery';
import RiskLimits from './screens/RiskLimits';
import FamilyOffice from './screens/FamilyOffice';
import ImpactPhilanthropy from './screens/ImpactPhilanthropy';
import FixedIncomeDetail from './screens/FixedIncomeDetail';
import VentureCapital from './screens/VentureCapital';
import RealEstateHub from './screens/RealEstateHub';
import PortfolioArchitect from './screens/PortfolioArchitect';
import InsuranceHub from './screens/InsuranceHub';
import AlternativeAssets from './screens/AlternativeAssets';
import TaxLossHarvesting from './screens/TaxLossHarvesting';
import { Home, Lightbulb, Briefcase, Target, MessageSquare, Search } from 'lucide-react';

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

  React.useEffect(() => {
    window.setCapitalOSScreen = (screen) => setCurrentScreen(screen);
  }, []);

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
        return <Settings onBack={() => setCurrentScreen('profile')} onNavigate={setCurrentScreen} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'goals':
      case 'metas':
        return <Goals onNavigate={setCurrentScreen} />;
      case 'health':
      case 'saude':
        return <FinancialHealth onBack={() => setCurrentScreen('dashboard')} />;
      case 'estate':
      case 'sucessao':
        return <EstatePlanning onBack={() => setCurrentScreen('dashboard')} />;
      case 'stress_test':
      case 'estresse':
        return <PortfolioStressTest onBack={() => setCurrentScreen('wallet')} />;
      case 'search':
      case 'busca':
        return <GlobalSearch onBack={() => setCurrentScreen('dashboard')} onNavigate={setCurrentScreen} />;
      case 'checklist':
        return <DailyChecklist onBack={() => setCurrentScreen('dashboard')} />;
      case 'rebalancing':
      case 'rebalanceamento':
        return <Rebalancing onBack={() => setCurrentScreen('wallet')} />;
      case 'behavioral':
      case 'comportamental':
        return <BehavioralInsights onBack={() => setCurrentScreen('insights')} />;
      case 'discovery':
      case 'descoberta':
        return <AssetDiscovery onBack={() => setCurrentScreen('insights')} />;
      case 'risk_limits':
      case 'travas':
        return <RiskLimits onBack={() => setCurrentScreen('stress_test')} />;
      case 'family_office':
        return <FamilyOffice onBack={() => setCurrentScreen('dashboard')} />;
      case 'impact':
      case 'filantropia':
        return <ImpactPhilanthropy onBack={() => setCurrentScreen('insights')} />;
      case 'fixed_income':
      case 'renda_fixa':
        return <FixedIncomeDetail onBack={() => setCurrentScreen('wallet')} />;
      case 'venture_capital':
        return <VentureCapital onBack={() => setCurrentScreen('wallet')} />;
      case 'real_estate':
        return <RealEstateHub onBack={() => setCurrentScreen('wallet')} />;
      case 'portfolio_architect':
        return <PortfolioArchitect onBack={() => setCurrentScreen('wallet')} />;
      case 'insurance':
        return <InsuranceHub onBack={() => setCurrentScreen('dashboard')} />;
      case 'alternative_assets':
        return <AlternativeAssets onBack={() => setCurrentScreen('wallet')} />;
      case 'tax_loss':
        return <TaxLossHarvesting onBack={() => setCurrentScreen('insights')} />;
      case 'geo_opt':
        return <GeographicOptimization onBack={() => setCurrentScreen('mobility')} />;
      case 'tax':
      case 'fiscal':
        return <TaxStrategy onBack={() => setCurrentScreen('insights')} />;
      case 'audit':
      case 'auditoria':
        return <SecurityAudit onBack={() => setCurrentScreen('settings')} />;
      case 'decisions_history':
      case 'historico':
        return <DecisionHistory onBack={() => setCurrentScreen('dashboard')} />;
      case 'wealth_evolution':
      case 'evolucao':
        return <WealthEvolution onBack={() => setCurrentScreen('dashboard')} />;
      case 'dividend_tracker':
      case 'dividendos':
        return <DividendTracker onBack={() => setCurrentScreen('wallet')} />;
      case 'subscription_manager':
      case 'assinaturas':
        return <SubscriptionManager onBack={() => setCurrentScreen('settings')} />;
      case 'add_transaction':
        return <AddTransaction onBack={() => setCurrentScreen('transactions')} />;
      case 'budget':
      case 'orcamento':
        return <Budget onBack={() => setCurrentScreen('dashboard')} />;
      case 'portfolio_detail':
        return <PortfolioDetail onBack={() => setCurrentScreen('wallet')} />;
      case 'calendar':
      case 'calendario':
        return <FinancialCalendar onBack={() => setCurrentScreen('dashboard')} />;
      case 'migration_roadmap':
        return <MigrationRoadmap onBack={() => setCurrentScreen('mobility')} />;
      case 'operations_terminal':
        return <OperationsTerminal onBack={() => setCurrentScreen('operations')} onNavigate={setCurrentScreen} />;
      case 'journal':
      case 'diario':
        return <FinancialJournal onBack={() => setCurrentScreen('dashboard')} />;
      case 'trade_execution':
        return <TradeExecution onBack={() => setCurrentScreen('dashboard')} />;
      case 'subscription':
      case 'assinatura':
        return <SubscriptionFlow onBack={() => setCurrentScreen('settings')} />;
      case 'help':
      case 'suporte':
        return <HelpCenter onBack={() => setCurrentScreen('profile')} />;
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
        return <Reports onBack={() => setCurrentScreen('dashboard')} onNavigate={setCurrentScreen} />;
      case 'cashflow':
      case 'financas':
        return <CashFlow onBack={() => setCurrentScreen('dashboard')} />;
      case 'notifications':
      case 'notificacoes':
        return <Notifications onBack={() => setCurrentScreen('dashboard')} />;
      case 'integrations':
      case 'conexoes':
        return <Integrations onBack={() => setCurrentScreen('dashboard')} />;
      case 'life_sim':
        return <LifeSimulator onBack={() => setCurrentScreen('goals')} />;
      case 'analytics':
        return <Analytics onNavigate={setCurrentScreen} />;
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
        return <Insights onNavigate={setCurrentScreen} />;
      case 'transactions':
      case 'transacoes':
        return <Transactions onBack={() => setCurrentScreen('dashboard')} onNavigate={setCurrentScreen} />;
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
  const showNav = !['landing', 'onboarding', 'auth', 'risk_profile', 'purchase_decision', 'markets', 'mercados', 'health', 'saude', 'life_sim', 'profile', 'mobility', 'debts', 'credit', 'distribution', 'operations', 'reports', 'notifications', 'integrations', 'settings', 'portfolio_detail', 'calendar', 'migration_roadmap', 'operations_terminal', 'journal', 'trade_execution', 'subscription', 'help', 'add_transaction', 'budget', 'rebalancing', 'geo_opt', 'tax', 'audit', 'cashflow', 'decisions_history', 'wealth_evolution', 'dividend_tracker', 'subscription_manager', 'estate', 'stress_test', 'checklist', 'behavioral', 'comportamental', 'discovery', 'descoberta', 'risk_limits', 'travas', 'family_office', 'impact', 'filantropia', 'fixed_income', 'renda_fixa', 'venture_capital', 'real_estate', 'portfolio_architect', 'insurance', 'alternative_assets', 'tax_loss'].includes(currentScreen);

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
            icon={Search}
            label="Busca"
            active={currentScreen === 'search'}
            onClick={() => setCurrentScreen('search')}
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
