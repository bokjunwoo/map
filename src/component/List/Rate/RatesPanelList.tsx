import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { totalItemDropSelector } from '../../../atoms/itemDropState';
import { totalMesoDropSelector } from '../../../atoms/mesoDropState';
import RatesPanelListUI from './UI/RatesPanelListUI';

const RatesPanelList = () => {
  const expRate = useRecoilValue(totalExpSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);

  const rateData: RateItem[] = [
    { label: '경험치 획득량', value: expRate },
    { label: '아이템 드롭률', value: itemDropRate },
    { label: '메소 획득량', value: mesoDropRate },
  ];

  return <RatesPanelListUI rateData={rateData} />;
};

export default RatesPanelList;
