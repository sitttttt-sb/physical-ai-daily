import React from 'react';
import { ExternalLink, Tag, CheckCircle2 } from 'lucide-react';
import type { NewsItem } from '../types/news';

interface NewsCardProps {
  item: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  const isJapan = item.region === 'japan';

  return (
    <article className="animate-fade-in" style={{
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      border: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      e.currentTarget.style.borderColor = 'var(--border-hover)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.borderColor = 'var(--border-color)';
    }}
    >
      <div>
        {/* 上部ヘッダータグ: 地域バッジ & カテゴリ */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.85rem'
        }}>
          <span style={{
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 700,
            backgroundColor: isJapan ? 'var(--accent-teal-light)' : 'var(--accent-blue-light)',
            color: isJapan ? 'var(--accent-teal)' : 'var(--accent-blue)'
          }}>
            {isJapan ? '🇯🇵 日本の動向' : '🌐 世界の動向'}
          </span>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--text-muted)'
          }}>
            <Tag size={13} />
            <span>{item.category}</span>
          </div>
        </div>

        {/* ニュースタイトル */}
        <h3 style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          lineHeight: 1.4,
          marginBottom: '0.75rem'
        }}>
          {item.title}
        </h3>

        {/* サマリー本文 */}
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '1rem'
        }}>
          {item.summary}
        </p>

        {/* Key Takeaways 箇条書き */}
        {item.keyTakeaways && item.keyTakeaways.length > 0 && (
          <div style={{
            backgroundColor: 'var(--bg-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '0.85rem 1rem',
            marginBottom: '1.25rem'
          }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '0.4rem'
            }}>
              要点チェック（Key Takeaways）:
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {item.keyTakeaways.map((point, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.4
                }}>
                  <CheckCircle2 size={14} color="var(--accent-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* フッター: ソース情報 & 元リンク */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.85rem',
        borderTop: '1px solid var(--border-color)',
        fontSize: '0.8rem',
        color: 'var(--text-light)'
      }}>
        <span>情報元: <strong style={{ color: 'var(--text-muted)' }}>{item.sourceName}</strong></span>
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            color: 'var(--accent-blue)',
            fontWeight: 600,
            transition: 'opacity 0.2s ease'
          }}
        >
          <span>元記事を読む</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </article>
  );
};
