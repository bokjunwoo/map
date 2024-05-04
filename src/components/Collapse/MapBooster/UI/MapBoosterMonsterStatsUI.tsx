import { ListItem, ListItemText } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../../atoms/expRateState';
import { MapMonsterInfo } from '../../../../interface/map';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import TextAmountUI from '../../../common/TextAmountUI';

type MapBoosterMonsterStatsUIProps = {
  monster: MapMonsterInfo;
  burningField: number;
  runeValue: number;
};

const MapBoosterMonsterStatsUI = ({
  monster,
  burningField,
  runeValue,
}: MapBoosterMonsterStatsUIProps) => {
  const expRate = useRecoilValue(totalExpSelector);

  const totalExpRate = expRate + burningField + runeValue;

  const expCalculate = Math.floor(
    monster.experience * (totalExpRate / 100) * 10
  );

  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI
        title="몬스터 스탯"
        subtitle="필드 최고렙 몬스터 기준 | 필드 몬스터 순수 경험치 적용 | 경험치
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
              text="필드 최고렙 몬스터 순수 경험치"
              amount={monster.experience}
            />

            <TextAmountUI text="배율이 적용된 경험치" amount={expCalculate} />
          </>
        }
      />
    </ListItem>
  );
};

export default MapBoosterMonsterStatsUI;
