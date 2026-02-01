
import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView(ViewState.HOME)}>
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">LibraBot</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => setView(ViewState.HOME)}
              className={`text-sm font-medium transition-colors ${currentView === ViewState.HOME ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView(ViewState.CATALOG)}
              className={`text-sm font-medium transition-colors ${currentView === ViewState.CATALOG ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Catalog
            </button>
            <button 
              onClick={() => setView(ViewState.POLICIES)}
              className={`text-sm font-medium transition-colors ${currentView === ViewState.POLICIES ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Policies
            </button>
            <button 
              onClick={() => setView(ViewState.CHAT)}
              className={`text-sm font-medium transition-colors ${currentView === ViewState.CHAT ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Ask AI
            </button>
            <button 
              onClick={() => setView(ViewState.ADMIN)}
              className={`text-sm font-medium transition-colors ${currentView === ViewState.ADMIN ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Admin
            </button>
          </nav>

          <div className="md:hidden">
             {/* Mobile simplified menu could go here */}
             <button onClick={() => setView(ViewState.CHAT)} className="p-2 bg-indigo-100 text-indigo-700 rounded-md">
                Chat
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
