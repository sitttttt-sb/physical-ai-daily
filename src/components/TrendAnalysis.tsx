import React from 'react';
import type { TrendAnalysis } from '../types/news';
import { TrendingUp, Activity, Info, Zap, AlertCircle } from 'lucide-react';

interface TrendAnalysisSectionProps {
  analysis: TrendAnalysis;
}

export const TrendAnalysisSection: React.FC<TrendAnalysisSectionProps> = ({ analysis }) => {
  return (
    <div 
      className="animate-fade-in"
      style={{
        backgroundColor: 'var(--bg-card, #1a2030)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--border-color, #2d3748)',
        color: 'var(--text-main, #e2e8f0)',
        position: 'relative'
      }}
    >
      {/* アクセントグラデーションライン */}
      <div 
        style={{
          height: '4px',
          background: 'linear-gradient(90deg, #14b8a6, #3b82f6)'
        }}
      />
      
      <div style={{ padding: '24px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            margin: '0 0 8px 0'
          }}>
            <TrendingUp size={24} style={{ color: '#14b8a6' }} />
            📈 蓄積型トレンド分析
          </h2>
          <p style={{ 
            color: 'var(--text-muted, #94a3b8)', 
            fontSize: '0.875rem',
            margin: 0
          }}>
            {analysis.dataRange}（{analysis.accumulatedDays}日分のデータに基づく）
          </p>
        </header>

        {/* 主要トレンド */}
        <section style={{ marginBottom: '32px' }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: '600', 
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid var(--border-color, #2d3748)',
            paddingBottom: '8px'
          }}>
            <Activity size={20} />
            主要トレンド
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {analysis.majorTrends.map((trend, index) => {
              // significanceに応じて色分け（high=ティール, medium=ブルー, low=グレー）
              let color = '#94a3b8'; // low
              let bg = 'rgba(148, 163, 184, 0.1)';
              if (trend.significance === 'high') {
                color = '#14b8a6'; // teal
                bg = 'rgba(20, 184, 166, 0.1)';
              } else if (trend.significance === 'medium') {
                color = '#3b82f6'; // blue
                bg = 'rgba(59, 130, 246, 0.1)';
              }

              return (
                <div 
                  key={index} 
                  style={{
                    backgroundColor: 'var(--bg-subtle, rgba(255,255,255,0.03))',
                    borderRadius: '8px',
                    padding: '16px',
                    borderLeft: `4px solid ${color}`
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>{trend.topic}</h4>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '2px 8px', 
                      borderRadius: '9999px',
                      backgroundColor: bg,
                      color: color,
                      fontWeight: '500'
                    }}>
                      {trend.frequency}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--text-muted, #cbd5e1)' }}>
                    {trend.observation}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 注目すべき兆候 */}
        {analysis.emergingSignals.length > 0 && (
          <section style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '1px solid var(--border-color, #2d3748)',
              paddingBottom: '8px'
            }}>
              <Zap size={20} style={{ color: '#f59e0b' }} />
              注目すべき兆候
            </h3>
            <ul style={{ 
              listStyleType: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {analysis.emergingSignals.map((signal, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ 
                    marginTop: '2px',
                    fontSize: '0.75rem',
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    color: '#f59e0b',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <AlertCircle size={12} />
                    ⚒ 注目中
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted, #cbd5e1)', lineHeight: '1.5' }}>
                    {signal}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 事実に基づく推察 */}
        <section style={{ marginBottom: '24px' }}>
          <div style={{
            backgroundColor: 'var(--bg-subtle, rgba(255,255,255,0.03))',
            borderLeft: '4px solid #8b5cf6',
            padding: '16px 20px',
            borderRadius: '0 8px 8px 0',
            fontStyle: 'italic'
          }}>
            <h3 style={{ 
              margin: '0 0 8px 0', 
              fontSize: '0.875rem', 
              color: '#8b5cf6',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              事実に基づく推察
            </h3>
            <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--text-main, #e2e8f0)' }}>
              {analysis.factBasedOutlook}
            </p>
          </div>
        </section>

        {/* 免責事項 */}
        <footer style={{ 
          marginTop: '24px', 
          paddingTop: '16px', 
          borderTop: '1px solid var(--border-color, #2d3748)',
          display: 'flex',
          gap: '8px',
          color: 'var(--text-muted, #64748b)'
        }}>
          <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ margin: 0, fontSize: '0.75rem', lineHeight: '1.5' }}>
            {analysis.disclaimer}
          </p>
        </footer>
      </div>
    </div>
  );
};
