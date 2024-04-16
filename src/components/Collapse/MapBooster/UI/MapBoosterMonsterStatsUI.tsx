import { ListItem, ListItemText, Typography } from '@mui/material';
import { MapMonsterInfo } from '../../../../interface/map';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import TextAndAmountLocaleStringUI from '../../../common/TextAndAmountLocaleStringUI';

type MapBoosterMonsterStatsUIProps = {
  monster: MapMonsterInfo;
  totalExpRate: number;
};

const MapBoosterMonsterStatsUI = ({
  monster,
  totalExpRate,
}: MapBoosterMonsterStatsUIProps) => {
  const expCalculate = Math.floor(monster.experience * (totalExpRate / 100));

  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="몬스터 스탯" />

      <ListItemText
        primary={
          <>
            <Typography variant="body2" color="#d32f2f" fontSize={12}>
              필드 최고렙 일반 몬스터 기본 경험치 적용, 레벨차이에 따른 경험치
              배율 적용 X
            </Typography>
            <TextAndAmountLocaleStringUI
              text="레벨(필드 최고렙 몬스터 레벨):"
              amount={monster.level}
            />
            <TextAndAmountLocaleStringUI
              text="경험치(필드 최고렙 몬스터 순수 경험치):"
              amount={monster.experience}
            />
            <TextAndAmountLocaleStringUI
              text="경험치(경험치 배율이 적용된 경험치):"
              amount={expCalculate}
            />
          </>
        }
      />
    </ListItem>
  );
};

export default MapBoosterMonsterStatsUI;
