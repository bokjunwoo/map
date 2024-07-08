import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { boosterMobKillState } from '../../../atoms/boosterMobKillState';
import { BOOSTER, REGEX } from '../../../constants/constants';
import MobKillInputBoxUI from './UI/MobKillInputBoxUI';

const MapBoosterMobKillInput = ({ mapName }: MapNameProps) => {
  const [mobKillCount, setMobKillCount] = useRecoilState(
    boosterMobKillState(mapName)
  );

  const handleMobKillChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setMobKillCount(targetValue);
    }

    if (targetValue > BOOSTER.INITIAL_MOB_KILL) {
      setMobKillCount(BOOSTER.INITIAL_MOB_KILL);
    }

    if (targetValue < 0) {
      setMobKillCount(0);
    }
  };

  return (
    <MobKillInputBoxUI
      description="1회 사용시 잡을 수 있는 마릿수"
      adornment={BOOSTER.INITIAL_MOB_KILL}
      value={mobKillCount}
      onChange={handleMobKillChange}
    />
  );
};

export default MapBoosterMobKillInput;
