import { Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../atoms/expRateState';
import { userLevelState } from '../../atoms/userLevelState';
import { MapMonsterInfo } from '../../interface/map';
import {
  calculateIndividualExperienceMultiplier,
  calculateIndividualMesoMultiplier,
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
  const userLevel = useRecoilValue(userLevelState);

  const expMultiplier = calculateIndividualExperienceMultiplier(
    userLevel,
    monster
  );
  const mesoMultiplier = calculateIndividualMesoMultiplier(userLevel, monster);

  const expCalculate = Math.floor(
    expMultiplier * monster.experience * ((burningField + expRate) / 100)
  );
  const pureMesoCalculate = Math.floor(mesoMultiplier * monster.meso);
  const BonusMesoCalculate = Math.floor(mesoMultiplier * monster.meso);

  return (
    <Typography
      component="span"
      sx={{ display: 'block', fontSize: 12, textAlign: 'end', p: 0 }}
    >{`${
      monster.name
    }: 경험치(${expCalculate.toLocaleString()}) 순메소(${pureMesoCalculate.toLocaleString()}) 메획메소(${BonusMesoCalculate.toLocaleString()})`}</Typography>
  );
};

export default CalculateMonsterStatsUI;
