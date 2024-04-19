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
            <Typography variant="body2" fontSize={14}>
              스킬발동시 90마리 몬스터의 경험치 획득 / 경험치 도핑 적용 O
            </Typography>

            <Typography variant="body2" color="#d32f2f" fontSize={12}>
              필드 최고렙 몬스터 경험치 적용, 캐릭터 레벨 비례 경험치 적용
            </Typography>

            <TextAmountUI
              text="필드 최고렙 몬스터 레벨"
              amount={monster.level}
            />

            <TextAmountUI
              text="필드 최고렙 몬스터 순수 경험치"
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
