import TableTitleHeadUI from '../component/Table/common/TableTitleHeadUI';
import TableUI from '../component/Table/common/TableUI';
import FAQTableBodyUI from '../component/Table/FAQ/FAQTableBodyUI';
import { FAQList } from '../data/FAQ';

const FAQTableContent = () => {
  return (
    <TableUI ariaLabel="history_table">
      <TableTitleHeadUI title="업데이트 내역" />

      {FAQList.map((item) => {
        return <FAQTableBodyUI key={item.id} item={item} />;
      })}
    </TableUI>
  );
};

export default FAQTableContent;
