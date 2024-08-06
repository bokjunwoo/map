import { useRecoilValue } from 'recoil';
import { userLevelState } from '../atoms/userLevelState';
import { questMapData } from '../data/map';
import { dailyQuestAllRegions } from '../data/quest';
import { findNearestQuestRegion } from '../utils/etc';
import { getMobCount } from '../utils/quest';
import useMobRewards from './useMobRewards';

interface Props<T extends QuestRegion> {
  label: T;
  questExp: { [key in T]: number };
  minLevelData: { [key in T]: number };
}

const useQuest = <T extends QuestRegion>({
  label,
  questExp,
  minLevelData,
}: Props<T>) => {
  const characterLevel = useRecoilValue(userLevelState);

  const nearestRegion = findNearestQuestRegion(
    characterLevel,
    dailyQuestAllRegions
  );

  const mapInfo = questMapData[nearestRegion];
  const { mobExp } = useMobRewards({ mapInfo, runeRate: 0 });

  const isObtainable = characterLevel >= minLevelData[label];

  const isAfterFinalRegion =
    dailyQuestAllRegions.indexOf(label) >=
    dailyQuestAllRegions.indexOf(nearestRegion);

  const dailyQuestExpReward = questExp[label];

  const count = getMobCount(label);

  const mobKillExp = (mobExp / 8 / mapInfo.max_number_of_monster) * count;

  const error = isAfterFinalRegion ? false : dailyQuestExpReward < mobKillExp;

  return { nearestRegion, isObtainable, error };
};

export default useQuest;
