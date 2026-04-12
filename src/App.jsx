import React, { useState } from 'react';
import Dashboard from './Dashboard';
import PurchaseDecision from './PurchaseDecision';

function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  return (
    <div className="bg-[#050A10] min-h-screen">
      {currentScreen === 'dashboard' && (
        <Dashboard onNavigate={(screen) => setCurrentScreen(screen)} />
      )}
      {currentScreen === 'purchase_decision' && (
        <PurchaseDecision onBack={() => setCurrentScreen('dashboard')} />
      )}
    </div>
  );
}

export default App;
