import React from 'react';
import { TrendingUp, Globe2, MapPin, Target, Sparkles } from 'lucide-react';
import type { DailySummary as DailySummaryType } from '../types/news';

interface DailySummaryProps {
  summary: DailySummaryType;
}

export const DailySummary: React.FC<DailySummaryProps> = ({ summary }) => {
  if (!summary) return null;

  return (
    <section style={{ marginBottom: '2rem' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1rem',
        fontSize: '1.2rem',
        fontWeight: 800,
        color: 'var(--text-color)'
      }}>
        <span>📊 本日の動向サマリー</span>
      </div>

      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}>
        {/* 全体総括 */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
            <Sparkles size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-color)' }}>
              全体総括
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {summary.overview}
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* 日本市場の分析 */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <MapPin size={18} color="var(--accent-teal)" />
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-color)' }}>日本市場の分析</h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              {summary.japanAnalysis}
            </p>
          </div>

          {/* 世界市場の分析 */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Globe2 size={18} color="var(--accent-blue)" />
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-color)' }}>世界市場の分析</h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              {summary.globalAnalysis}
            </p>
          </div>
        </div>

        {/* トレンドキーワード & 今後の展望 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <TrendingUp size={18} color="var(--accent-purple)" />
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-color)' }}>トレンドキーワード</h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {summary.trendKeywords.map((keyword, index) => (
                <span key={index} style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-color)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-color)'
                }}>
                  #{keyword}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Target size={18} color="var(--accent-primary)" />
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-color)' }}>今後の展望</h4>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {summary.outlook}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
