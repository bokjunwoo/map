import { ListItem, Box, SelectChangeEvent } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import { EVENT_SKILL } from '../../../../constants/constants';
import { MapMonsterInfo } from '../../../../interface/map';
import { calculateIndividualExperienceMultiplier } from '../../../../utils/calculate';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import SelectedTableUI from '../../../Table/UI/SelectedTableUI';

type MapEventSkillCalculateTableUIProps = {
  monster: MapMonsterInfo;
  selectedValue: number;
  handleChange: (event: SelectChangeEvent) => void;
  clickedColumn: number;
  handleCellClick: (columnIndex: number) => void;
  mapName: string;
};

const MapEventSkillCalculateTableUI = ({
  monster,
  selectedValue,
  handleChange,
  clickedColumn,
  handleCellClick,
  mapName,
}: MapEventSkillCalculateTableUIProps) => {
  const userLevel = useRecoilValue(userLevelState);

  const expMultiplier = calculateIndividualExperienceMultiplier(
    userLevel,
    monster
  );

  const headCells = [
    { value: 0, label: '룬 적용(X)' },
    { value: 100, label: '룬 적용(2배)' },
  ];

  const menuItem = Array.from({ length: 20 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}회`,
  }));

  return (
    <ListItem sx={{ display: 'block' }}>
      <Box sx={{ display: 'flex', alignItems: 'top' }}>
        <ListSubheaderUI title="경험치 계산" />
      </Box>

      <Box sx={{ mb: 1 }}>
        <SelectedTableUI
          mosterExpReward={monster.experience * expMultiplier}
          selectedValue={selectedValue}
          handleChange={handleChange}
          clickedColumn={clickedColumn}
          handleCellClick={handleCellClick}
          headCells={headCells}
          menuItem={menuItem}
          mapName={mapName}
          killMonsterCount={EVENT_SKILL.KILL_MONSTER_COUNT}
        />
      </Box>
    </ListItem>
  );
};

export default MapEventSkillCalculateTableUI;
