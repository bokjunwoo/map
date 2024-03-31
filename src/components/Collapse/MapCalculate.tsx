import CalculateIcon from '@mui/icons-material/Calculate';
import { List, ListItem, Typography, Divider } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { numberOfMonsterState } from '../../atoms/numberOfMonsterState';
import { REGEX } from '../../constants/constants';
import { useExpRateValue } from '../../contexts/ExpRateStateProvider';
import { useLevelState } from '../../contexts/LevelStateProvider';
import { MapInfo } from '../../interface/map';
import {
  calculateTotalExperience,
  calculateTotalMeso,
} from '../../utils/calculate';
import MapCalculateInputUI from './UI/MapCalculateInputUI';
import MapCalculateRewardUI from './UI/MapCalculateRewardUI';

const MapCalculate = ({ item }: { item: MapInfo }) => {
  const expRate = useExpRateValue();
  const { level: playerLevel } = useLevelState();

  const [monsterValue, setMonsterValue] = useRecoilState(
    numberOfMonsterState(item.map_name)
  );

  const [sixMinutesMonsterValue, setSixMinutesMonsterValue] = useState<number>(
    item.number_of_monster * 48
  );

  const handleMonsterValue = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);
    const maxMonsterValue = item.number_of_monster * 48;

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setMonsterValue(targetValue);
      setSixMinutesMonsterValue(targetValue * 48);
    }

    if (targetValue > item.number_of_monster) {
      setMonsterValue(item.number_of_monster);
      setSixMinutesMonsterValue(maxMonsterValue);
    }
  };

  const handleSixMinutesMonsterValue = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const targetValue = Number(event.target.value);
    const maxMonsterValue = item.number_of_monster * 48;

    if (REGEX.NUMBER.test(targetValue.toString())) {
      setMonsterValue(parseFloat((targetValue / 48).toFixed(1)));
      setSixMinutesMonsterValue(targetValue);
    }

    if (targetValue > maxMonsterValue) {
      setMonsterValue(item.number_of_monster);
      setSixMinutesMonsterValue(maxMonsterValue);
      return;
    }
  };

  const updatedMonsters = item.monsters.map((monster) => {
    return { ...monster, number_of_monster: monsterValue };
  });

  const expReward = calculateTotalExperience({
    monsters: updatedMonsters,
    burningField: item.burning_field,
    expRate,
    time: 6,
    playerLevel,
  });

  const mesoReward = calculateTotalMeso({
    monsters: updatedMonsters,
    time: 6,
    playerLevel,
  });

  useEffect(() => {
    setMonsterValue(item.number_of_monster);
  }, [item.number_of_monster, setMonsterValue]);

  return (
    <List
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <CalculateIcon />
        <Typography variant="h6" fontWeight={500} sx={{ display: 'block' }}>
          사냥 마릿수 계산기
        </Typography>
      </ListItem>

      <Divider variant="middle" />

      <MapCalculateInputUI
        label="젠당 잡을 수 있는 마릿수:"
        value={monsterValue}
        handleChange={handleMonsterValue}
        maxValue={item.number_of_monster}
      />

      <MapCalculateInputUI
        label="6분당 잡을 수 있는 마릿수:"
        value={sixMinutesMonsterValue}
        handleChange={handleSixMinutesMonsterValue}
        maxValue={item.number_of_monster * 48}
      />

      <MapCalculateRewardUI
        label="6분당 경험치 획득량:"
        rewardValue={expReward}
        rewardUnit="경험치"
      />

      <MapCalculateRewardUI
        label="6분당 순 메소 획득량:"
        rewardValue={mesoReward}
        rewardUnit="메소"
      />

      <MapCalculateRewardUI
        label="6분당 메획 메소 획득량:"
        rewardValue={mesoReward}
        rewardUnit="메소"
      />
    </List>
  );
};
export default MapCalculate;
