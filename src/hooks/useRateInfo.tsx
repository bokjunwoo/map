import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../atoms/expRateState';
import { totalItemDropSelector } from '../atoms/itemDropState';
import { totalMesoDropSelector } from '../atoms/mesoDropState';
import { listRGB } from '../data/color';

type useRateInfoProps = {
  burningField?: number;
  rune?: number;
};

const useRateInfo = ({ burningField, rune }: useRateInfoProps) => {
  const expRate = useRecoilValue(totalExpSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);

  const expInfo = {
    iconName: 'exp',
    value: expRate,
    text: '경험치 획득량',
    bgcolor: `rgba(${listRGB.blue}, 0.3)`,
  };

  const burningFieldInfo = {
    iconName: 'burning',
    value: burningField || 0,
    text: '버닝필드',
    bgcolor: `rgba(${listRGB.red}, 0.6)`,
  };

  const itemDropInfo = {
    iconName: 'drop',
    value: itemDropRate,
    text: '아이템 드랍률',
    bgcolor: `rgba(${listRGB.green}, 0.5)`,
  };

  const mesoDropInfo = {
    iconName: 'meso',
    value: mesoDropRate,
    text: '메소 획득량',
    bgcolor: `rgba(${listRGB.orange}, 0.5)`,
  };

  const runeInfo = {
    iconName: 'rune',
    value: rune || 0,
    text: '룬',
    bgcolor: `rgba(${listRGB.purple}, 0.3)`,
  };

  return { expInfo, burningFieldInfo, itemDropInfo, mesoDropInfo, runeInfo };
};

export default useRateInfo;
