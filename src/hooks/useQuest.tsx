import { useRecoilValue } from 'recoil';
import { userLevelState } from '../atoms/userLevelState';
import { questMapData } from '../data/map';
import { dailyQuestRegions } from '../data/quest';
import { minRegionsLevel } from '../data/region';
import { findNearestRegion } from '../utils/etc';
import { getMobCount } from '../utils/quest';
import useMobRewards from './useMobRewards';

interface Props<T extends QuestRegion> {
  questExp: Record<T, number>;
  label: T;
}

const useQuest = <T extends QuestRegion>({ questExp, label }: Props<T>) => {
  const characterLevel = useRecoilValue(userLevelState);

  const nearestRegion = findNearestRegion(characterLevel, dailyQuestRegions);

  const mapInfo = questMapData[nearestRegion];
  const { mobExp } = useMobRewards({ mapInfo, runeRate: 0 });

  const isObtainable = characterLevel >= minRegionsLevel[label];

  const isAfterFinalRegion =
    dailyQuestRegions.indexOf(label) >=
    dailyQuestRegions.indexOf(nearestRegion);

  const dailyQuestExpReward = questExp[label];

  const count = getMobCount(label);

  const mobKillExp = (mobExp / 8 / mapInfo.max_number_of_monster) * count;
  console.log(mapInfo.map_name, mobKillExp);

  const error = isAfterFinalRegion ? false : dailyQuestExpReward < mobKillExp;

  return { nearestRegion, isObtainable, error };
};

export default useQuest;
