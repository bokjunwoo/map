import { useRecoilValue } from 'recoil';
import { totalItemDropSelector } from '../../../../atoms/itemDropState';
import { totalMesoDropSelector } from '../../../../atoms/mesoDropState';
import useMobCalculation from '../../../../hooks/useMobCalculation';
import MobInfoListUI from '../../../List/common/MobInfoListUI';
import ListItemStyle from '../../../List/style/ListItemStyle';

const MapMobCompareSection = ({ mobInfo }: MobInfoProps) => {
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);

  const { calculatedExp, calculatedPureMeso, calculatedBonusMeso } =
    useMobCalculation({
      mob: mobInfo,
      isLevelProportional: true,
      additionalExpRate: 0,
    });

  const mobCompareInfo: MobInfo[] = [
    { text: '경험치', amount: calculatedExp },
    {
      text: `순 메소(평균 / 아획 ${itemDropRate}% 기준)`,
      amount: calculatedPureMeso,
    },
    {
      text: `메획 획득 메소(평균 / 메획 ${mesoDropRate}% 기준)`,
      amount: calculatedBonusMeso,
    },
  ];

  return (
    <ListItemStyle sx={{ pt: 0.5, pb: 0.5 }}>
      <MobInfoListUI mobInfo={mobCompareInfo} />
    </ListItemStyle>
  );
};

export default MapMobCompareSection;
