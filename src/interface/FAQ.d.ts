interface FAQI {
  id: number;
  question: string;
  answer: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  item: FAQItem;
}
