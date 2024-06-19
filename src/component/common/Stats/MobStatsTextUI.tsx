import { Typography } from '@mui/material';
import useMobCalculation from '../../../hooks/useMobCalculation';

type MobStatsTextUIProps = {
  mob: MapMonsterInfo;
  burningField: number;
};

const MobStatsTextUI = ({ mob, burningField }: MobStatsTextUIProps) => {
  const { calculatedExp, calculatedPureMeso, calculatedBonusMeso } =
    useMobCalculation({
      mob,
      isLevelProportional: true,
      additionalExpRate: burningField,
    });

  return (
    <Typography
      component="span"
      sx={{ display: 'block', fontSize: 12, textAlign: 'end', p: 0 }}
    >{`${
      mob.name
    }: 경험치(${calculatedExp.toLocaleString()}) 순메소(${calculatedPureMeso.toLocaleString()}) 메획메소(${calculatedBonusMeso.toLocaleString()})`}</Typography>
  );
};

export default MobStatsTextUI;
