interface HistoryCategory {
  title: string;
  list: string[];
}

interface HistoryItem {
  id: number;
  isOpen: boolean;
  date: string;
  version: string;
  category: HistoryCategory[];
}

interface HistoryProps {
  item: HistoryItem;
}
