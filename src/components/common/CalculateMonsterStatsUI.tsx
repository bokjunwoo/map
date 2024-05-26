import { Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../atoms/expRateState';
import { totalItemDropSelector } from '../../atoms/itemDropState';
import { totalMesoDropSelector } from '../../atoms/mesoDropState';
import { userLevelState } from '../../atoms/userLevelState';
import {
  calculateIndividualExperienceMultiplier,
  calculateIndividualMesoMultiplier,
  calculateItemDropMultiplier,
} from '../../utils/calculate';

type CalculateMonsterStatsUIProps = {
  monster: MapMonsterInfo;
  burningField: number;
};

const CalculateMonsterStatsUI = ({
  monster,
  burningField,
}: CalculateMonsterStatsUIProps) => {
  const expRate = useRecoilValue(totalExpSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);
  const itemDropRate = useRecoilValue(totalItemDropSelector);
  const userLevel = useRecoilValue(userLevelState);

  const expMultiplier = calculateIndividualExperienceMultiplier(
    userLevel,
    monster
  );
  const mesoMultiplier = calculateIndividualMesoMultiplier(userLevel, monster);

  const itemDropMultiplier = calculateItemDropMultiplier(itemDropRate);

  const expCalculate = Math.floor(
    expMultiplier * monster.experience * ((burningField + expRate) / 100)
  );
  const pureMesoCalculate = Math.floor(
    mesoMultiplier * monster.meso * itemDropMultiplier
  );
  const bonusMesoCalculate = Math.floor(
    mesoMultiplier * monster.meso * (mesoDropRate / 100) * itemDropMultiplier
  );

  return (
    <Typography
      component="span"
      sx={{ display: 'block', fontSize: 12, textAlign: 'end', p: 0 }}
    >{`${
      monster.name
    }: 경험치(${expCalculate.toLocaleString()}) 순메소(${pureMesoCalculate.toLocaleString()}) 메획메소(${bonusMesoCalculate.toLocaleString()})`}</Typography>
  );
};

export default CalculateMonsterStatsUI;
