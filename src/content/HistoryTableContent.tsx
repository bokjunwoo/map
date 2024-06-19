import TableTitleHeadUI from '../component/Table/common/TableTitleHeadUI';
import TableUI from '../component/Table/common/TableUI';
import HistoryTableBodyUI from '../component/Table/History/HistoryTableBodyUI';
import { HistoryList } from '../data/history';

const HistoryTableContent = () => {
  return (
    <TableUI ariaLabel="history_table">
      <TableTitleHeadUI title="업데이트 내역" />

      {HistoryList.map((item) => {
        return <HistoryTableBodyUI key={item.version} item={item} />;
      })}
    </TableUI>
  );
};

export default HistoryTableContent;
