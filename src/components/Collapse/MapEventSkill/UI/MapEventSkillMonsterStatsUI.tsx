import { ListItem, ListItemText } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../../atoms/expRateState';
import { MapMonsterInfo } from '../../../../interface/map';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import TextAmountUI from '../../../common/TextAmountUI';

type MapEventSkillMonsterStatsUIProps = {
  monster: MapMonsterInfo;
  expMultiplier: number;
  runeValue: number;
  burningField: number;
};

const MapEventSkillMonsterStatsUI = ({
  monster,
  expMultiplier,
  runeValue,
  burningField,
}: MapEventSkillMonsterStatsUIProps) => {
  const expRate = useRecoilValue(totalExpSelector);

  const expCalculate =
    expMultiplier *
    monster.experience *
    ((expRate + burningField + runeValue) / 100);

  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI
        title="몬스터 스탯"
        subtitle="필드 최고렙 몬스터 기준 | 캐릭터 레벨 비례 경험치 적용 | 경험치
        배율 적용"
        subtitleImportant={true}
      />
      <ListItemText
        primary={
          <>
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

export default MapEventSkillMonsterStatsUI;
