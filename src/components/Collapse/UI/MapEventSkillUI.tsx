import { List, Divider } from '@mui/material';
import { MapInfo, MapMonsterInfo } from '../../../interface/map';
import LabelChipUI from '../../Chip/UI/LabelChipUI';
import ListHeaderUI from '../../common/ListHeaderUI';
import MapExpRateUI from '../../common/MapExpRateUI';
import MapEventSkillCalculateTable from '../MapEventSkill/MapEventSkillCalculateTable';
import MapEventSkillCompareUI from '../MapEventSkill/UI/MapEventSkillCompareUI';
import MapEventSkillExplanationUI from '../MapEventSkill/UI/MapEventSkillExplanationUI';
import MapEventSkillMonsterStatsUI from '../MapEventSkill/UI/MapEventSkillMonsterStatsUI';

type MapEventSkillUIProps = {
  item: MapInfo;
  highestLevelMonster: MapMonsterInfo;
  runeValue: number;
  expMultiplier: number;
  setSelectedRuneValue: React.Dispatch<React.SetStateAction<number>>;
};

const MapEventSkillUI = ({
  item,
  highestLevelMonster,
  runeValue,
  expMultiplier,
  setSelectedRuneValue,
}: MapEventSkillUIProps) => {
  return (
    <List
      sx={{
        bgcolor: 'background.paper',
      }}
      dense
    >
      <ListHeaderUI
        iconPath={require('../../../assets/etc_icon/event_skill.png')}
        headerText="이벤트 사냥 스킬(온 유어 마크)"
        SecondaryComponent={
          <LabelChipUI
            label="이벤트 진행중 (04.18 ~ 05.01)"
            rgb="255, 153, 0"
          />
        }
        mainComment="캐릭터당 일일 20회 레벨 범위 몬스터 200마리당 스킬 1회 발동"
      />

      <Divider variant="middle" />
      <MapEventSkillExplanationUI />

      <Divider variant="middle" />
      <MapExpRateUI burningField={item.burning_field} rune={runeValue} />

      <Divider variant="middle" />
      <MapEventSkillMonsterStatsUI
        monster={highestLevelMonster}
        expMultiplier={expMultiplier}
        runeValue={runeValue}
        burningField={item.burning_field}
      />

      <Divider variant="middle" />
      <MapEventSkillCalculateTable
        monsterExperience={highestLevelMonster.experience * expMultiplier}
        burningField={item.burning_field}
        setSelectedRuneValue={setSelectedRuneValue}
      />

      <Divider variant="middle" />
      <MapEventSkillCompareUI
        item={item}
        monsterExperience={highestLevelMonster.experience * expMultiplier}
      />
    </List>
  );
};

export default MapEventSkillUI;
