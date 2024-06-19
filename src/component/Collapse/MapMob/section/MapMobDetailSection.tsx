import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import useMobCalculation from '../../../../hooks/useMobCalculation';
import MobInfoListUI from '../../../List/common/MobInfoListUI';
import ListItemStyle from '../../../List/style/ListItemStyle';

const MapMobDetailSection = ({ mobInfo }: MobInfoProps) => {
  const userLevel = useRecoilValue(userLevelState);

  const { levelBasedExpRatio, mesoMultiplier } = useMobCalculation({
    mob: mobInfo,
    isLevelProportional: true,
  });

  const mobDetailInfo: MobInfo[] = [
    {
      text: '몬스터와의 레벨 차이(캐릭터레벨 - 몬스터레벨)',
      amount: userLevel - mobInfo.level,
    },
    {
      text: '레벨차이에 따른 경험치 배율',
      amount: levelBasedExpRatio * 100,
      unit: '%',
    },
    {
      text: '레벨차이에 따른 메소 배율',
      amount: mesoMultiplier * 100,
      unit: '%',
    },
  ];

  return (
    <ListItemStyle sx={{ pt: 0.5, pb: 0.5 }}>
      <MobInfoListUI mobInfo={mobDetailInfo} />
    </ListItemStyle>
  );
};

export default MapMobDetailSection;
