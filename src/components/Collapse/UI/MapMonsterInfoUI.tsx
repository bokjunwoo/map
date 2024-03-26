import { List, ListItem, ListItemText } from '@mui/material';
import { useLevelState } from '../../../contexts/LevelStateProvider';
import { MapMonsterInfo } from '../../../interface/map';
import {
  calculateIndividualExperienceMultiplier,
  calculateIndividualMesoMultiplier,
} from '../../../utils/calculate';
import DividerChipUI from '../../common/DividerChipUI';
import SecondaryTextUI from '../../common/SecondaryTextUI';

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
    >
      <ListItem>
        <ListItemText
          primary={monster.name}
          secondary={
            <>
              <DividerChipUI label="기본 몬스터 스탯" />

              <SecondaryTextUI text={`레벨: ${monster.level}`} />
              <SecondaryTextUI
                text={`경험치: ${monster.experience.toLocaleString()}`}
              />
              <SecondaryTextUI
                text={`메소(평균): ${monster.meso.toLocaleString()}`}
              />

              <DividerChipUI label="내 배율에 따른 몬스터 스탯" />

              <SecondaryTextUI
                text={`경험치: ${Math.floor(
                  expMultiplier * monster.experience
                ).toLocaleString()}`}
              />
              <SecondaryTextUI
                text={`순 메소(평균/아획 0% 기준): ${Math.floor(
                  mesoMultiplier * monster.meso
                ).toLocaleString()}`}
              />
              <SecondaryTextUI
                text={`메획 획득 메소(평균): ${Math.floor(
                  mesoMultiplier * monster.meso
                ).toLocaleString()}`}
              />

              <DividerChipUI label="자세히 보기" />

              <SecondaryTextUI
                text={`몬스터와의 레벨 차이(캐릭터레벨 - 몬스터레벨): ${
                  playerLevel - monster.level
                }`}
              />
              <SecondaryTextUI
                text={`레벨차이에 따른 경험치 배율: ${expMultiplier * 100}%`}
              />
              <SecondaryTextUI
                text={`레벨차이에 따른 메소 배율: ${mesoMultiplier * 100}%`}
              />
            </>
          }
        />
      </ListItem>
    </List>
  );
};

export default MapMonsterInfoUI;
