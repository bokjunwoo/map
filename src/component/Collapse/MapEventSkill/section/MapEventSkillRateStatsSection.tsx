import { useRecoilValue } from 'recoil';
import { eventSkillRuneState } from '../../../../atoms/eventSkillRuneState';
import useRateInfo from '../../../../hooks/useRateInfo';
import MapStatsUI from '../../../List/common/MapStatsUI';

type MapEventSkillRateStatsSectionProps = {
  mapName: string;
  burningField: number;
};

const MapEventSkillRateStatsSection = ({
  mapName,
  burningField,
}: MapEventSkillRateStatsSectionProps) => {
  const rune = useRecoilValue(eventSkillRuneState(mapName));

  const { expInfo, burningFieldInfo, runeInfo } = useRateInfo({
    burningField,
    rune,
  });

  const rateList: RateListOption[] = [expInfo, burningFieldInfo, runeInfo];

  return <MapStatsUI rateList={rateList} />;
};

export default MapEventSkillRateStatsSection;
