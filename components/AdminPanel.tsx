
import React, { useState } from 'react';
import { Book, Policy } from '../types';
import { summarizePolicy } from '../services/geminiService';

interface AdminPanelProps {
  onAddBook: (book: Book) => void;
  onAddPolicy: (policy: Policy) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onAddBook, onAddPolicy }) => {
  const [activeTab, setActiveTab] = useState<'book' | 'policy'>('book');
  const [isSummarizing, setIsSummarizing] = useState(false);

  // Book form state
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookIsbn, setBookIsbn] = useState('');
  const [bookLocation, setBookLocation] = useState('');

  // Policy form state
  const [policyTitle, setPolicyTitle] = useState('');
  const [policyContent, setPolicyContent] = useState('');

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookTitle || !bookAuthor) return;
    
    const newBook: Book = {
      id: Date.now().toString(),
      title: bookTitle,
      author: bookAuthor,
      isbn: bookIsbn,
      category: 'General',
      summary: `${bookTitle} by ${bookAuthor}`,
      available: true,
      location: bookLocation || 'General Stacks'
    };
    
    onAddBook(newBook);
    setBookTitle('');
    setBookAuthor('');
    setBookIsbn('');
    setBookLocation('');
    alert('Book added successfully!');
  };

  const handleAddPolicy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!policyTitle || !policyContent) return;

    setIsSummarizing(true);
    try {
      const summary = await summarizePolicy(policyContent);
      const newPolicy: Policy = {
        id: Date.now().toString(),
        title: policyTitle,
        content: policyContent,
        summary: summary
      };
      onAddPolicy(newPolicy);
      setPolicyTitle('');
      setPolicyContent('');
      alert('Policy added and AI-compressed successfully!');
    } catch (error) {
      alert('Error compressing policy.');
    } finally {
      setIsSummarizing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('book')}
          className={`flex-1 py-4 font-medium text-sm transition-colors ${activeTab === 'book' ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Add New Book
        </button>
        <button
          onClick={() => setActiveTab('policy')}
          className={`flex-1 py-4 font-medium text-sm transition-colors ${activeTab === 'policy' ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Add New Policy
        </button>
      </div>

      <div className="p-6">
        {activeTab === 'book' ? (
          <form onSubmit={handleAddBook} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="The Hobbit"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
                <input
                  type="text"
                  required
                  value={bookAuthor}
                  onChange={(e) => setBookAuthor(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="J.R.R. Tolkien"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">ISBN</label>
                <input
                  type="text"
                  value={bookIsbn}
                  onChange={(e) => setBookIsbn(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="1234567890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Shelf Location</label>
                <input
                  type="text"
                  value={bookLocation}
                  onChange={(e) => setBookLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="Fiction Section D1"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Add to Catalog
            </button>
          </form>
        ) : (
          <form onSubmit={handleAddPolicy} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Policy Title</label>
              <input
                type="text"
                required
                value={policyTitle}
                onChange={(e) => setPolicyTitle(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Late Return Penalties"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Content (will be auto-summarized)</label>
              <textarea
                required
                rows={5}
                value={policyContent}
                onChange={(e) => setPolicyContent(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Paste the full legal or technical language of the policy here..."
              />
            </div>
            <button
              type="submit"
              disabled={isSummarizing}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-slate-400 transition-colors flex items-center justify-center"
            >
              {isSummarizing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Summarizing & Adding...
                </>
              ) : 'Compress & Add Policy'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
