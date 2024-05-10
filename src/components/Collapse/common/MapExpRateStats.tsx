import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { listRGB } from '../../../data/color';
import { RateListOption } from '../../../interface/stats';
import MapStatsUI from './MapStatsUI';

type MapExpRateStatsProps = {
  burningField: number;
  rune: number;
};

const MapExpRateStats = ({ burningField, rune }: MapExpRateStatsProps) => {
  const expRate = useRecoilValue(totalExpSelector);

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
      bgcolor: 'rgba(255, 150, 138, 0.6)',
    },
    {
      iconName: 'rune',
      value: rune,
      text: '룬',
      bgcolor: `rgba(${listRGB.purple}, 0.3)`,
    },
  ];

  return <MapStatsUI rateList={rateList} />;
};

export default MapExpRateStats;
