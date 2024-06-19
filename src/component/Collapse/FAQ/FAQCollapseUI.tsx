import FAQListUI from '../../List/FAQ/FAQListUI';
import CollapseCellUI from '../common/CollapseCellUI';

const FAQCollapseUI = ({ item, open }: FAQCollapseUIProps) => {
  return (
    <CollapseCellUI colSpan={2} open={open}>
      <FAQListUI item={item} />
    </CollapseCellUI>
  );
};

export default FAQCollapseUI;
