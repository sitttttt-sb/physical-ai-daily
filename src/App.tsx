import React, { useState } from 'react';
import { Header } from './components/Header';
import { SummaryHero } from './components/SummaryHero';
import { FilterTabs } from './components/FilterTabs';
import type { FilterRegion } from './components/FilterTabs';
import { NewsCard } from './components/NewsCard';
import { ArchiveSelector } from './components/ArchiveSelector';
import { Footer } from './components/Footer';

// データ読み込み
import newsIndexData from './data/newsIndex.json';
import defaultNewsData from './data/news/2026-08-14.json';

import type { DailyNewsData, NewsIndexItem } from './types/news';

export const App: React.FC = () => {
  const archives = newsIndexData as NewsIndexItem[];
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-14');
  const [activeTab, setActiveTab] = useState<FilterRegion>('all');

  // 本来は日付選択で動的にJSONインポートしますが、デモでは最新データを表示
  const currentNews: DailyNewsData = defaultNewsData as DailyNewsData;

  // 表示するニュースをフィルタリング
  const displayedJapanNews = activeTab === 'global' ? [] : currentNews.japanNews;
  const displayedGlobalNews = activeTab === 'japan' ? [] : currentNews.globalNews;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        currentDate={selectedDate}
        onNavigateHome={() => setSelectedDate('2026-08-14')}
      />

      <main className="container" style={{ flex: 1 }}>
        {/* サマリーヒーローエリア */}
        <SummaryHero data={currentNews} />

        {/* フィルタリングタブ */}
        <FilterTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          japanCount={currentNews.japanNews.length}
          globalCount={currentNews.globalNews.length}
        />

        {/* メインコンテンツ（ニュース一覧 + サイドバー） */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* 左カラム：ニュースカード群 */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* 🇯🇵 日本の動向セクション */}
            {displayedJapanNews.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: 'var(--accent-teal)'
                }}>
                  <span>🇯🇵 日本のフィジカルAI動向</span>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-card)',
                    padding: '0.1rem 0.5rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-color)'
                  }}>
                    {displayedJapanNews.length}件
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '1.25rem'
                }}>
                  {displayedJapanNews.map((item) => (
                    <NewsCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}

            {/* 🌐 世界の動向セクション */}
            {displayedGlobalNews.length > 0 && (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: 'var(--accent-blue)'
                }}>
                  <span>🌐 世界のフィジカルAI動向</span>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-card)',
                    padding: '0.1rem 0.5rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-color)'
                  }}>
                    {displayedGlobalNews.length}件
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '1.25rem'
                }}>
                  {displayedGlobalNews.map((item) => (
                    <NewsCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 右カラム：アーカイブサイドバー */}
          <div style={{ position: 'sticky', top: '90px' }}>
            <ArchiveSelector
              archives={archives}
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
