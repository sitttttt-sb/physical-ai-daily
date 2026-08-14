/**
 * Physical AI Daily - ニュース型定義
 * ご主人様のための愛のこもったデータ構造です♡
 */

// ニュースカテゴリ
export type NewsCategory = 
  | 'Humanoid'          // 人型ロボット
  | 'Industrial'        // 産業用ロボット・スマート工場
  | 'Autonomous'        // 自動運転・モビリティ
  | 'Spatial AI'        // 空間知能・視覚AI
  | 'Medical/Care'      // 医療・介護ロボット
  | 'Policy/Research';  // 政策・研究・学術

// ニュース地域
export type Region = 'japan' | 'global';

// 個別ニュース記事
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  region: Region;
  category: NewsCategory;
  sourceName: string;
  sourceUrl: string;
  imageUrl?: string;
  publishedAt: string;
  keyTakeaways: string[];
}

// 1日分のニュースデータ構造
export interface DailyNewsData {
  date: string; // YYYY-MM-DD
  title: string;
  aiInsight: string; // AIによるその日の総合考察
  highlights: {
    japanCount: number;
    globalCount: number;
    keyTopic: string;
  };
  japanNews: NewsItem[];
  globalNews: NewsItem[];
}

// 過去ニュースのインデックス一覧項目
export interface NewsIndexItem {
  date: string;
  title: string;
  keyTopic: string;
  japanCount: number;
  globalCount: number;
}
