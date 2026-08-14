import React from 'react';
import { Bot, TrendingUp, Compass, Flag } from 'lucide-react';
import type { DailyNewsData } from '../types/news';

interface SummaryHeroProps {
  data: DailyNewsData;
}

export const SummaryHero: React.FC<SummaryHeroProps> = ({ data }) => {
  return (
    <section className="animate-fade-in" style={{
      marginTop: '2rem',
      marginBottom: '2rem',
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem',
      border: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-md)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 装飾アクセントライン */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #0d9488 0%, #2563eb 50%, #e11d48 100%)'
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* 日付 & メインタイトル */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--accent-teal)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.5rem'
          }}>
            <Bot size={16} />
            <span>DAILY EMBODIED AI SNAPSHOT • {data.date}</span>
          </div>
          
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--text-main)',
            lineHeight: 1.3
          }}>
            {data.title}
          </h2>
        </div>

        {/* AIの分析サマリーカード */}
        <div style={{
          backgroundColor: 'var(--bg-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          borderLeft: '4px solid var(--accent-teal)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Compass size={18} color="var(--accent-teal)" />
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>
              AIによる本日の本質インサイト
            </span>
          </div>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7
          }}>
            {data.aiInsight}
          </p>
        </div>

        {/* トピック統計情報 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          paddingTop: '0.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--accent-teal-light)',
            borderRadius: 'var(--radius-md)'
          }}>
            <Flag size={20} color="var(--accent-teal)" />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-teal)', fontWeight: 'bold' }}>🇯🇵 日本のトピックス</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-teal)' }}>
                {data.highlights.japanCount} ニュース掲載
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--accent-blue-light)',
            borderRadius: 'var(--radius-md)'
          }}>
            <TrendingUp size={20} color="var(--accent-blue)" />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 'bold' }}>🌐 世界の動向</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-blue)' }}>
                {data.highlights.globalCount} ニュース掲載
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
