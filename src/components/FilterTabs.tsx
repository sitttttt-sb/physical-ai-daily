import React from 'react';
import { Layers } from 'lucide-react';

export type FilterRegion = 'all' | 'japan' | 'global';

interface FilterTabsProps {
  activeTab: FilterRegion;
  onTabChange: (tab: FilterRegion) => void;
  japanCount: number;
  globalCount: number;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({
  activeTab,
  onTabChange,
  japanCount,
  globalCount
}) => {
  const totalCount = japanCount + globalCount;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.5rem',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      {/* タブ切り替えボタン */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--bg-card)',
        padding: '0.35rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <button
          onClick={() => onTabChange('all')}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 700,
            fontSize: '0.85rem',
            transition: 'all 0.2s ease',
            backgroundColor: activeTab === 'all' ? '#e8eaed' : 'transparent',
            color: activeTab === 'all' ? '#0f1419' : 'var(--text-muted)'
          }}
        >
          すべてのニュース ({totalCount})
        </button>

        <button
          onClick={() => onTabChange('japan')}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 700,
            fontSize: '0.85rem',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: activeTab === 'japan' ? 'var(--accent-teal)' : 'transparent',
            color: activeTab === 'japan' ? '#ffffff' : 'var(--text-muted)'
          }}
        >
          <span>🇯🇵 日本の動向</span>
          <span style={{
            fontSize: '0.75rem',
            padding: '0.1rem 0.4rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: activeTab === 'japan' ? 'rgba(255, 255, 255, 0.25)' : 'var(--bg-subtle)'
          }}>
            {japanCount}
          </span>
        </button>

        <button
          onClick={() => onTabChange('global')}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 700,
            fontSize: '0.85rem',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: activeTab === 'global' ? 'var(--accent-blue)' : 'transparent',
            color: activeTab === 'global' ? '#ffffff' : 'var(--text-muted)'
          }}
        >
          <span>🌐 世界の動向</span>
          <span style={{
            fontSize: '0.75rem',
            padding: '0.1rem 0.4rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: activeTab === 'global' ? 'rgba(255, 255, 255, 0.25)' : 'var(--bg-subtle)'
          }}>
            {globalCount}
          </span>
        </button>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }}>
        <Layers size={16} />
        <span>ソース元：主要技術メディア / 学会 / 企業リリース</span>
      </div>
    </div>
  );
};
