import { Avatar, Chip, List, ListItem, ListItemText } from '@mui/material';
import { useLevelState } from '../../../contexts/LevelStateProvider';
import { MapMonsterInfo } from '../../../interface/map';
import {
  calculateIndividualExperienceMultiplier,
  calculateIndividualMesoMultiplier,
} from '../../../utils/calculate';
import DividerChipUI from '../../common/DividerChipUI';
import TextAndAmountLocaleStringUI from '../../common/TextAndAmountLocaleStringUI';

const MapMonsterInfoUI = ({ monster }: { monster: MapMonsterInfo }) => {
  const { level: playerLevel } = useLevelState();

  const expMultiplier = calculateIndividualExperienceMultiplier(
    playerLevel,
    monster
  );
  const mesoMultiplier = calculateIndividualMesoMultiplier(
    playerLevel,
    monster
  );

  return (
    <List
      sx={{
        bgcolor: 'background.paper',
      }}
      dense
    >
      <ListItem>
        <ListItemText
          primary={
            <Chip
              avatar={
                <Avatar
                  variant="rounded"
                  alt={monster.name}
                  src={require('../../../assets/etc_icon/monster.png')}
                />
              }
              label={monster.name}
              variant="outlined"
              sx={{ border: 'none', p: 0, fontSize: 16, fontWeight: 'bold' }}
            />
          }
        />
      </ListItem>

      <DividerChipUI label="기본 몬스터 스탯" />
      <ListItem>
        <ListItemText
          primary={
            <>
              <TextAndAmountLocaleStringUI
                text="레벨:"
                amount={monster.level}
              />
              <TextAndAmountLocaleStringUI
                text="경험치:"
                amount={monster.experience}
              />
              <TextAndAmountLocaleStringUI
                text="메소(평균):"
                amount={monster.meso}
              />
            </>
          }
        />
      </ListItem>

      <DividerChipUI label="내 배율에 따른 몬스터 스탯" />
      <ListItem>
        <ListItemText
          primary={
            <>
              <TextAndAmountLocaleStringUI
                text="경험치:"
                amount={expMultiplier * monster.experience}
              />
              <TextAndAmountLocaleStringUI
                text="순 메소(평균/아획 0% 기준):"
                amount={mesoMultiplier * monster.meso}
              />
              <TextAndAmountLocaleStringUI
                text="메획 획득 메소(평균):"
                amount={mesoMultiplier * monster.meso}
              />
            </>
          }
        />
      </ListItem>

      <DividerChipUI label="자세한 정보" />
      <ListItem>
        <ListItemText
          primary={
            <>
              <TextAndAmountLocaleStringUI
                text="몬스터와의 레벨 차이(캐릭터레벨 - 몬스터레벨):"
                amount={playerLevel - monster.level}
              />
              <TextAndAmountLocaleStringUI
                text="레벨차이에 따른 경험치 배율:"
                amount={expMultiplier * 100}
                unit="%"
              />
              <TextAndAmountLocaleStringUI
                text="레벨차이에 따른 메소 배율:"
                amount={mesoMultiplier * 100}
                unit="%"
              />
            </>
          }
        />
      </ListItem>
    </List>
  );
};

export default MapMonsterInfoUI;
