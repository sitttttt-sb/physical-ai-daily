/**
 * Physical AI Daily - ニュース型定義
 * データ構造を管理する型定義ファイル
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
  publishedAt: string;
  keyTakeaways: string[];
}

// 日刊の動向サマリー（AIによる分析）
export interface DailySummary {
  overview: string;          // その日の全体的なフィジカルAI動向の総括（3-4文）
  japanAnalysis: string;     // 日本市場の分析コメント（2-3文）
  globalAnalysis: string;    // 世界市場の分析コメント（2-3文）
  trendKeywords: string[];   // トレンドキーワード（5つ程度）
  outlook: string;           // 今後の展望（1-2文）
}

// 蓄積型トレンド分析（過去データに基づく動向推察）
export interface TrendAnalysis {
  dataRange: string;            // 分析の根拠となるデータ期間（例: "2026-08-10 〜 2026-08-15"）
  accumulatedDays: number;      // 蓄積日数
  majorTrends: TrendItem[];     // 主要トレンド（3〜5項目）
  emergingSignals: string[];    // まだ確定的ではないが注目すべき兆候（2〜3項目）
  factBasedOutlook: string;     // 事実に基づく現状での推察（過剰な推測を避ける）
  disclaimer: string;           // 「本分析は限られたデータに基づく参考情報です」等の注意書き
}

// 個別トレンド項目
export interface TrendItem {
  topic: string;           // トレンドテーマ
  observation: string;     // 何が観察されているか（事実ベース）
  frequency: string;       // 出現頻度（例: "直近5日中3日で言及"）
  significance: 'high' | 'medium' | 'low'; // 重要度
}

// 1日分のニュースデータ構造
export interface DailyNewsData {
  date: string; // YYYY-MM-DD
  title: string;
  aiInsight: string; // AIによるその日の総合考察
  dailySummary?: DailySummary; // 本日の動向サマリー
  trendAnalysis?: TrendAnalysis; // 蓄積型トレンド分析
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
