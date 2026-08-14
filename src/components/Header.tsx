import React from 'react';
import { Cpu, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentDate: string;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentDate, onNavigateHome }) => {
  return (
    <header style={{
      backgroundColor: 'var(--bg-card)',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(8px)',
      background: 'rgba(15, 20, 25, 0.95)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        {/* ロゴエリア */}
        <div 
          onClick={onNavigateHome}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, #0d9488 0%, #2563eb 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 2px 8px rgba(13, 148, 136, 0.25)'
          }}>
            <Cpu size={22} />
          </div>
          <div>
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-main)',
              lineHeight: 1.2
            }}>
              Physical AI Daily
            </h1>
            <p style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontWeight: 500
            }}>
              日刊フィジカルAI & ロボティクス動向
            </p>
          </div>
        </div>

        {/* 右側：日付バッジ & AI自律自動バッジ */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            backgroundColor: 'var(--accent-teal-light)',
            color: 'var(--accent-teal)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 700
          }}>
            <Sparkles size={14} />
            <span>AI Autonomous Generated</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            backgroundColor: 'var(--bg-subtle)',
            color: 'var(--text-main)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.85rem',
            fontWeight: 600,
            border: '1px solid var(--border-color)'
          }}>
            <Calendar size={15} color="var(--text-muted)" />
            <span>{currentDate}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
