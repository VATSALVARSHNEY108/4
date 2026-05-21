// components/Header.tsx
import React from 'react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
      <h1 className="text-2xl font-bold text-[var(--text-primary)]">
        AI Foundations – Gradient Descent
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded hover:bg-[var(--bg-tertiary)] transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

export default Header;
