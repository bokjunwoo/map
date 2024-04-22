import { ListItem, ListItemText, Typography } from '@mui/material';
import { MapMonsterInfo } from '../../../../interface/map';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import TextAmountUI from '../../../common/TextAmountUI';

type MapEventSkillMonsterStatsUIProps = {
  monster: MapMonsterInfo;
  expMultiplier: number;
  totalExpRate: number;
};

const MapEventSkillExplanationUI = ({
  monster,
  expMultiplier,
  totalExpRate,
}: MapEventSkillMonsterStatsUIProps) => {
  const expCalculate = expMultiplier * monster.experience * totalExpRate;

  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="스킬 설명" />
      <ListItemText
        primary={
          <>
            <Typography variant="body2" fontSize={14} sx={{ mb: 1 }}>
              스킬발동시 90마리 몬스터의 경험치 획득
            </Typography>

            <Typography variant="body2" color="#D32F2F" fontSize={12}>
              필드 최고렙 몬스터 기준 | 캐릭터 레벨 비례 경험치 적용 | 경험치
              배율 적용
            </Typography>

            <TextAmountUI
              text="필드 최고렙 몬스터 레벨"
              amount={monster.level}
            />

            <TextAmountUI
              text="필드 최고렙 몬스터 레벨비례 경험치"
              amount={monster.experience * expMultiplier}
            />

            <TextAmountUI text="배율이 적용된 경험치" amount={expCalculate} />
          </>
        }
      />
    </ListItem>
  );
};

export default MapEventSkillExplanationUI;
