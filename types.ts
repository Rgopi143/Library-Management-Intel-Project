
export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  summary: string;
  available: boolean;
  location: string;
}

export interface Policy {
  id: string;
  title: string;
  content: string;
  summary: string; // The "compressed" version
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum ViewState {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  POLICIES = 'POLICIES',
  CHAT = 'CHAT',
  ADMIN = 'ADMIN'
}
