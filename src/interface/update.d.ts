interface Category {
  title: string;
  items: string[];
}

interface UpdateHistory {
  isOpen: boolean;
  date: string;
  version: string;
  history: Category[];
}
