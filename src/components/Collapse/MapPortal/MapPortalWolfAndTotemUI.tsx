import {
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../atoms/expRateState';
import { numberOfMonsterState } from '../../../atoms/numberOfMonsterState';
import {
  PORTAL_EXP_VALUE,
  PORTAL_INITIAL_TIME,
} from '../../../constants/constants';
import { useLevelState } from '../../../contexts/LevelStateProvider';
import useSelectState from '../../../hooks/useSelectState';
import useUpDownButton from '../../../hooks/useUpDownButton';
import {
  calculatePolloPlayTime,
  calculatePrittoPlayTime,
} from '../../../utils/calculate';
import {
  getTimePolloColor,
  getTimeInfernoWolfColor,
} from '../../../utils/color';
import { formatNumber, formatTime } from '../../../utils/etc';
import ListSubheaderUI from '../../common/ListSubheaderUI';
import SelectedPrittoGameOptionUI from '../../common/SelectedPrittoGameOptionUI';
import UpDownButtonUI from '../../common/UpDownButtonUI';

type MapPortalWolfAndTotemUIProps = {
  monsterExperience: number;
  expMultiplier: number;
  mapName: string;
};

const MapPortalWolfAndTotemUI = ({
  monsterExperience,
  expMultiplier,
  mapName,
}: MapPortalWolfAndTotemUIProps) => {
  const expRate = useRecoilValue(totalExpSelector);
  const { level: playerLevel } = useLevelState();
  const numberOfMonster = useRecoilValue(numberOfMonsterState(mapName));

  const expRateRatio = expRate / 100;
  const wolfMode = playerLevel >= 260 ? '익스트림' : '카오스';

  const [infernoWolfExtremeValue, handleInfernoWolfExtremeChange] =
    useSelectState(1600);
  const [infernoWolfChaosValue, handleInfernoWolfChaosChange] =
    useSelectState(1200);

  const infernoWolfExtremeItem = [
    { label: '적당한 (EXP x 800)', value: 800 },
    { label: '상당한 (EXP x 1500)', value: 1500 },
    { label: '치명적인 (EXP x 1600)', value: 1600 },
    { label: '처치 (EXP x 1700)', value: 1700 },
  ];
  const infernoWolfChaosItem = [
    { label: '적당한 (EXP x 800)', value: 600 },
    { label: '상당한 (EXP x 1500)', value: 1100 },
    { label: '치명적인 (EXP x 1600)', value: 1200 },
    { label: '처치 (EXP x 1700)', value: 1300 },
  ];

  const {
    count: totemSlashPlayTime,
    increment: totemSlashPlayTimeIncrement,
    decrement: totemSlashPlayTimeDecrement,
  } = useUpDownButton({
    initialValue: PORTAL_INITIAL_TIME.TOTEM_SLASH,
  });

  const {
    count: infernoWolfPlayTime,
    increment: infernoWolfPlayTimeIncrement,
    decrement: infernoWolfPlayTimeDecrement,
  } = useUpDownButton({
    initialValue: PORTAL_INITIAL_TIME.INFERNO_WOLF,
  });

  const totemSlashSecond = calculatePolloPlayTime({
    monsterExperience,
    numberOfMonster,
    expMultiplier,
    expValue: PORTAL_EXP_VALUE.TOTEM_SLASH,
    expRateRatio,
    time: totemSlashPlayTime,
  });

  const infernoWolfSecond = calculatePrittoPlayTime({
    monsterExperience,
    numberOfMonster,
    expMultiplier,
    expValue:
      wolfMode === '익스트림' ? infernoWolfExtremeValue : infernoWolfChaosValue,
    expRateRatio,
    time: infernoWolfPlayTime,
  });

  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI title="에스페시아 | 불꽃 늑대 효율" />

      <Table
        size="small"
        aria-label="map_portal_Pollo"
        sx={{
          border: '1px solid #e0e0e0',
          '& td': {
            borderRight: '1px solid #e0e0e0',
            fontSize: 13,
          },
          '& th': {
            borderRight: '1px solid #e0e0e0',
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ width: '13%' }}></TableCell>
            <TableCell align="center" sx={{ width: '43.5%' }}>
              에스페시아
            </TableCell>
            <TableCell align="center" sx={{ width: '43.5%' }}>
              불꽃 늑대({wolfMode})
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              설정
            </TableCell>
            <TableCell align="center" sx={{ bgcolor: '#f5f5f5' }}></TableCell>
            <TableCell align="center" sx={{ p: 0 }}>
              <SelectedPrittoGameOptionUI
                value={
                  wolfMode === '익스트림'
                    ? infernoWolfExtremeValue
                    : infernoWolfChaosValue
                }
                handleChange={
                  wolfMode === '익스트림'
                    ? handleInfernoWolfExtremeChange
                    : handleInfernoWolfChaosChange
                }
                menuItem={
                  wolfMode === '익스트림'
                    ? infernoWolfExtremeItem
                    : infernoWolfChaosItem
                }
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              클리어 타임
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <UpDownButtonUI
                initialValue={PORTAL_INITIAL_TIME.TOTEM_SLASH}
                count={totemSlashPlayTime}
                increment={totemSlashPlayTimeIncrement}
                decrement={totemSlashPlayTimeDecrement}
              />
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <UpDownButtonUI
                initialValue={PORTAL_INITIAL_TIME.INFERNO_WOLF}
                count={infernoWolfPlayTime}
                increment={infernoWolfPlayTimeIncrement}
                decrement={infernoWolfPlayTimeDecrement}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              경험치
            </TableCell>
            <TableCell align="center">
              {formatNumber(
                monsterExperience * PORTAL_EXP_VALUE.TOTEM_SLASH * expRateRatio
              )}
            </TableCell>
            <TableCell align="center">
              {formatNumber(
                monsterExperience *
                  (wolfMode === '익스트림'
                    ? infernoWolfExtremeValue
                    : infernoWolfChaosValue)
              )}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              사냥 효율
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: getTimePolloColor(totemSlashSecond) }}
            >
              약 {formatTime(totemSlashSecond)}
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: getTimeInfernoWolfColor(infernoWolfSecond) }}
            >
              약 {formatTime(infernoWolfSecond)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ListItem>
  );
};

export default MapPortalWolfAndTotemUI;
