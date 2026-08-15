import React from 'react';
import { Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      marginTop: '4rem',
      padding: '2.5rem 0',
      color: 'var(--text-muted)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.9rem',
          fontWeight: 600
        }}>
          <span>Powered by AI</span>
          <Heart size={16} color="var(--accent-rose)" fill="var(--accent-rose)" />
          <span>Automated Daily Updates</span>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', maxWidth: '600px' }}>
          Physical AI Daily は、日本および世界のロボティクス・空間知能・自動運転ニュースを毎朝自動収集し、
          GitHub Actions と Gemini API を用いて完全自動生成・更新されているポータルサイトです。
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          fontSize: '0.85rem',
          marginTop: '0.5rem'
        }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-main)',
              fontWeight: 600
            }}
          >
            <Code size={16} />
            <span>GitHub Repository</span>
          </a>
          <span>•</span>
          <span>© 2026 Physical AI Daily</span>
        </div>
      </div>
    </footer>
  );
};
