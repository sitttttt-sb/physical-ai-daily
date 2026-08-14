import { History, ChevronRight } from 'lucide-react';
import type { NewsIndexItem } from '../types/news';

interface ArchiveSelectorProps {
  archives: NewsIndexItem[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export const ArchiveSelector: React.FC<ArchiveSelectorProps> = ({
  archives,
  selectedDate,
  onSelectDate
}) => {
  return (
    <aside style={{
      backgroundColor: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem',
      border: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9rem',
        fontWeight: 700,
        color: 'var(--text-main)',
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <History size={16} color="var(--accent-teal)" />
        <span>日別ニュース アーカイブ</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {archives.map((item) => {
          const isSelected = item.date === selectedDate;
          return (
            <button
              key={item.date}
              onClick={() => onSelectDate(item.date)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isSelected ? 'var(--accent-teal-light)' : 'var(--bg-subtle)',
                color: isSelected ? 'var(--accent-teal)' : 'var(--text-main)',
                border: isSelected ? '1px solid var(--accent-teal)' : '1px solid transparent',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
            >
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.date}</div>
                <div style={{
                  fontSize: '0.75rem',
                  color: isSelected ? 'var(--accent-teal)' : 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '180px'
                }}>
                  {item.keyTopic}
                </div>
              </div>
              <ChevronRight size={16} color={isSelected ? 'var(--accent-teal)' : 'var(--text-light)'} />
            </button>
          );
        })}
      </div>
    </aside>
  );
};
