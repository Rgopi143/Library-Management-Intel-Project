
import React, { useState } from 'react';
import { ViewState, Book, Policy } from './types';
import { INITIAL_BOOKS, INITIAL_POLICIES } from './constants';
import Header from './components/Header';
import ChatBot from './components/ChatBot';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);
  const [policies, setPolicies] = useState<Policy[]>(INITIAL_POLICIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(books.map(b => b.category)))];

  const filteredBooks = books.filter(b => {
    const matchesSearch = 
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.isbn.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'All' || b.category === categoryFilter;
    
    const matchesStatus = statusFilter === 'All' || 
      (statusFilter === 'Available' && b.available) || 
      (statusFilter === 'On Loan' && !b.available);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('All');
    setStatusFilter('All');
  };

  const handleToggleAvailability = () => {
    setStatusFilter(prev => prev === 'Available' ? 'All' : 'Available');
  };

  const renderContent = () => {
    switch (view) {
      case ViewState.HOME:
        return (
          <div className="space-y-12">
            <section className="text-center space-y-4 py-12">
              <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
                Your Library, <span className="text-indigo-600">Reimagined.</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Discover resources faster with our AI-powered catalog and intelligent policy assistant.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <button 
                  onClick={() => setView(ViewState.CHAT)}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
                >
                  Start Chatting
                </button>
                <button 
                   onClick={() => setView(ViewState.CATALOG)}
                   className="bg-white text-slate-800 border border-slate-200 px-8 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all"
                >
                  Browse Catalog
                </button>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-3">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold">Semantic Search</h3>
                <p className="text-sm text-slate-500">Find books not just by keywords, but by meaning and context.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-3">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-lg font-bold">Compressed Policies</h3>
                <p className="text-sm text-slate-500">Complex borrowing rules summarized into simple, human terms.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-3">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold">Cost Optimized</h3>
                <p className="text-sm text-slate-500">Leverages Flash-based AI models for lightning fast, low-cost interactions.</p>
              </div>
            </div>
          </div>
        );
      case ViewState.CATALOG:
        return (
          <div className="space-y-8">
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-slate-900">Book Catalog</h2>
                {(searchTerm || categoryFilter !== 'All' || statusFilter !== 'All') && (
                  <button 
                    onClick={resetFilters}
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    Clear Filters
                  </button>
                )}
              </div>
              
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative w-full">
                  <input 
                    type="text" 
                    placeholder="Search title, author or ISBN..."
                    className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-lg transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>

                {/* Chips Filters Container */}
                <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  {/* Category Chips */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(c => (
                        <button
                          key={c}
                          onClick={() => setCategoryFilter(c)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            categoryFilter === c 
                              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
                              : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status Chips & Availability Toggle */}
                  <div className="flex flex-col md:flex-row md:items-center gap-8 pt-4 border-t border-slate-50">
                    <div className="space-y-3 flex-1">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Status</h4>
                      <div className="flex gap-2">
                        {['All', 'Available', 'On Loan'].map(s => (
                          <button
                            key={s}
                            onClick={() => setStatusFilter(s)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                              statusFilter === s 
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-800">Quick Availability</span>
                        <span className="text-xs text-slate-500">Show only items ready for pickup</span>
                      </div>
                      <button 
                        onClick={handleToggleAvailability}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${statusFilter === 'Available' ? 'bg-emerald-500' : 'bg-slate-300'}`}
                      >
                        <span
                          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-sm ${statusFilter === 'Available' ? 'translate-x-7' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book, index) => (
                <div 
                  key={book.id} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden relative animate-fadeInUp hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setView(ViewState.CHAT)}
                >
                  {!book.available && <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 text-red-100 opacity-10 -mr-12 -mt-12 rounded-full animate-pulse"></div>}
                  
                  <div className="flex justify-between items-start mb-4 transform transition-transform duration-300 group-hover:scale-105">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-full uppercase tracking-wider transition-all duration-300 group-hover:bg-indigo-100 group-hover:shadow-md">
                      {book.category}
                    </span>
                    <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wide border transition-all duration-300 group-hover:scale-110 ${book.available ? 'bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100'}`}>
                      {book.available ? '● Available' : '○ On Loan'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-all duration-300 leading-snug transform group-hover:translate-x-1">{book.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 font-medium italic transition-colors duration-300 group-hover:text-slate-600">by {book.author}</p>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium transition-colors duration-300 group-hover:text-slate-500">
                      <div className="p-1.5 bg-slate-50 rounded-lg transition-all duration-300 group-hover:bg-indigo-50 group-hover:scale-110">
                        <svg className="w-4 h-4 text-slate-400 transition-colors duration-300 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      {book.location}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setView(ViewState.CHAT);
                      }}
                      className="inline-flex items-center gap-1 text-sm text-indigo-600 font-bold hover:gap-2 transition-all duration-300 hover:text-indigo-700 transform hover:scale-105"
                    >
                      Details
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredBooks.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Shelf is Empty</h3>
                <p className="text-slate-500 max-w-sm mx-auto">We couldn't find any books that match your current filters. Try broadening your search.</p>
                <button 
                  onClick={resetFilters}
                  className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                  Show All Books
                </button>
              </div>
            )}
          </div>
        );
      case ViewState.POLICIES:
        return (
          <div className="space-y-6">
             <h2 className="text-3xl font-bold text-slate-900">Borrowing Policies</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {policies.map(policy => (
                 <div key={policy.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                   <h3 className="text-xl font-bold text-indigo-600 mb-4">{policy.title}</h3>
                   <div className="mb-6">
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Compressed (AI Summary)</p>
                     <div className="p-4 bg-indigo-50 rounded-xl text-indigo-800 border border-indigo-100 font-medium">
                        {policy.summary}
                     </div>
                   </div>
                   <div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Policy Text</p>
                     <p className="text-sm text-slate-600 leading-relaxed italic">"{policy.content}"</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        );
      case ViewState.CHAT:
        return <ChatBot catalog={books} policies={policies} />;
      case ViewState.ADMIN:
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-slate-900">Admin Dashboard</h2>
              <div className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">Librarian Access</div>
            </div>
            <AdminPanel 
              onAddBook={(b) => setBooks([...books, b])}
              onAddPolicy={(p) => setPolicies([...policies, p])}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Header currentView={view} setView={setView} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
