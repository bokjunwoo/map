import { useRecoilValue } from 'recoil';
import { boosterRuneState } from '../../../../atoms/boosterRuneState';
import { BOOSTER } from '../../../../constants/constants';
import useMobCalculation from '../../../../hooks/useMobCalculation';
import { findHighestLevelMonster } from '../../../../utils/mob';
import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import MobStatsListUI from '../../../List/common/MobStatsListUI';
import ListItemStyle from '../../../List/style/ListItemStyle';

const MapBoosterMobStatsSection = ({ mapInfo }: MapInfoProps) => {
  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const rune = useRecoilValue(boosterRuneState(mapInfo.map_name));

  const { calculatedExp } = useMobCalculation({
    mob: highestLevelMonster,
    isLevelProportional: false,
    additionalExpRate: mapInfo.burning_field + rune,
  });

  const boosterExpReward = calculatedExp * BOOSTER.EXP_MULTIPLIER;

  const mobInfo: MobInfo[] = [
    { text: '필드 최고렙 몬스터 레벨', amount: highestLevelMonster.level },
    {
      text: '필드 최고렙 몬스터 순수 경험치',
      amount: highestLevelMonster.experience,
    },
    { text: '배율이 적용된 경험치', amount: boosterExpReward },
  ];

  return (
    <ListItemStyle>
      <ListSubTitleUI
        title="몬스터 스탯"
        subtitle="필드 최고렙 몬스터 기준 | 필드 몬스터 순수 경험치 적용 | 경험치 배율 적용"
        subtitleImportant={true}
      />

      <MobStatsListUI mobInfo={mobInfo} />
    </ListItemStyle>
  );
};

export default MapBoosterMobStatsSection;
