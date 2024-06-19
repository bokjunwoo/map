import { useRecoilValue } from 'recoil';
import { eventSkillRuneState } from '../../../../atoms/eventSkillRuneState';
import useMobCalculation from '../../../../hooks/useMobCalculation';
import { findHighestLevelMonster } from '../../../../utils/mob';
import ListSubTitleUI from '../../../List/common/ListSubTitleUI';
import MobStatsListUI from '../../../List/common/MobStatsListUI';
import ListItemStyle from '../../../List/style/ListItemStyle';

const MapEventSkillMobStatsSection = ({ mapInfo }: MapInfoProps) => {
  const rune = useRecoilValue(eventSkillRuneState(mapInfo.map_name));

  const highestLevelMonster = findHighestLevelMonster(mapInfo.monsters);

  const { levelBasedExpRatio, calculatedExp: eventSkillExpReward } =
    useMobCalculation({
      mob: highestLevelMonster,
      isLevelProportional: true,
      additionalExpRate: mapInfo.burning_field + rune,
    });

  const mobInfo: MobInfo[] = [
    { text: '필드 최고렙 몬스터 레벨', amount: highestLevelMonster.level },
    {
      text: '캐릭터 레벨 비례 경험치 적용',
      amount: Math.floor(highestLevelMonster.experience * levelBasedExpRatio),
    },
    { text: '배율이 적용된 경험치', amount: eventSkillExpReward },
  ];

  return (
    <ListItemStyle>
      <ListSubTitleUI
        title="몬스터 스탯"
        subtitle="필드 최고렙 몬스터 기준 | 캐릭터 레벨 비례 경험치 적용 | 경험치 배율 적용"
        subtitleImportant={true}
      />

      <MobStatsListUI mobInfo={mobInfo} />
    </ListItemStyle>
  );
};

export default MapEventSkillMobStatsSection;
