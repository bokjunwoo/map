import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { totalItemDropSelector } from '../../../atoms/itemDropState';
import { totalMesoDropSelector } from '../../../atoms/mesoDropState';
import { listRGB } from '../../../data/color';
import MapStatsUI from '../common/MapStatsUI';

const MapCalculateStats = ({ burningField }: { burningField: number }) => {
  const expRate = useRecoilValue(totalExpSelector);
  const ItemdropRate = useRecoilValue(totalItemDropSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);

  const rateList: RateListOption[] = [
    {
      iconName: 'exp',
      value: expRate,
      text: '경험치 획득량',
      bgcolor: `rgba(${listRGB.blue}, 0.3)`,
    },
    {
      iconName: 'burning',
      value: burningField,
      text: '버닝필드',
      bgcolor: `rgba(${listRGB.red}, 0.6)`,
    },
    {
      iconName: 'drop',
      value: ItemdropRate,
      text: '아이템 드랍률',
      bgcolor: `rgba(${listRGB.green}, 0.5)`,
    },
    {
      iconName: 'meso',
      value: mesoDropRate,
      text: '메소 획득량',
      bgcolor: `rgba(${listRGB.orange}, 0.5)`,
    },
  ];

  return <MapStatsUI rateList={rateList} />;
};

export default MapCalculateStats;
