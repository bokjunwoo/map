interface CollapseUIProps {
  open: boolean;
}

interface FAQCollapseUIProps extends CollapseUIProps {
  item: FAQItem;
}

interface HistoryCollapseUIProps extends CollapseUIProps {
  item: HistoryItem;
}
