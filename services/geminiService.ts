
import { GoogleGenAI, Type } from "@google/genai";
import { Book, Policy } from "../types";
import { SYSTEM_PROMPT } from "../constants";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const summarizePolicy = async (longText: string): Promise<string> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Compress the following library policy into a single, bulleted short sentence or short phrase that captures the core rules: ${longText}`,
    config: {
      temperature: 0.1,
    }
  });
  return response.text || "Summary unavailable.";
};

export const chatWithBot = async (
  message: string, 
  history: { role: 'user' | 'assistant', content: string }[],
  catalog: Book[],
  policies: Policy[]
) => {
  const ai = getAI();
  
  // Create a context string
  const context = `
    CURRENT CATALOG:
    ${catalog.map(b => `${b.title} by ${b.author} (Category: ${b.category}, Location: ${b.location}, Available: ${b.available})`).join('\n')}
    
    POLICIES:
    ${policies.map(p => `${p.title}: ${p.content} (Summary: ${p.summary})`).join('\n')}
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      { text: `Context: ${context}` },
      ...history.map(h => ({ text: `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.content}` })),
      { text: `User: ${message}` }
    ],
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
    }
  });

  return response.text || "I'm sorry, I couldn't process that request.";
};
