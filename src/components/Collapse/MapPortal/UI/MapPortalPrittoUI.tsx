import {
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../../atoms/expRateState';
import { numberOfMonsterState } from '../../../../atoms/numberOfMonsterState';
import { PORTAL_INITIAL_TIME } from '../../../../constants/constants';
import useSelectState from '../../../../hooks/useSelectState';
import useUpDownButton from '../../../../hooks/useUpDownButton';
import { calculatePrittoPlayTime } from '../../../../utils/calculate';
import { getTimePrittoColor } from '../../../../utils/color';
import { formatNumber, formatTime } from '../../../../utils/etc';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import SelectedPrittoGameOptionUI from '../../../common/SelectedPrittoGameOptionUI';
import UpDownButtonUI from '../../../common/UpDownButtonUI';

type MapPortalPrittoUIProps = {
  monsterExperience: number;
  expMultiplier: number;
  mapName: string;
  checkState: PortalCheckState;
};

const MapPortalPrittoUI = ({
  monsterExperience,
  expMultiplier,
  mapName,
  checkState,
}: MapPortalPrittoUIProps) => {
  const expRate = useRecoilValue(totalExpSelector);

  const runeRatio = checkState.rune ? 100 : 0;
  const sundayEventRatio = checkState.sundayEvent ? 100 : 0;
  const sundayEventEffect = checkState.sundayEvent ? 2 : 1;

  const expRateRatio = (expRate + runeRatio + sundayEventRatio) / 100;

  const numberOfMonster = useRecoilValue(numberOfMonsterState(mapName));

  const [eagleHuntingValue, handleEagleHuntingChange] = useSelectState(1200);
  const [dragonEggStealingValue, handleDragonEggStealingChange] =
    useSelectState(480);

  const dragonEggStealingItem = [
    { label: '1단계 (EXP x 240)', value: 240 },
    { label: '2단계 (EXP x 480)', value: 480 },
    { label: '3단계 (EXP x 720)', value: 720 },
    { label: '4단계 (EXP x 1200)', value: 1200 },
    { label: '5단계 (EXP x 1680)', value: 1680 },
    { label: '완주 (EXP x 2400)', value: 2400 },
  ];

  const courtshipDanceValue = 1200;

  const eagleHuntingItem = [
    { label: '0 ~ 300점 (EXP x 240)', value: 240 },
    { label: '350 ~ 600점 (EXP x 480)', value: 480 },
    { label: '650 ~ 950점 (EXP x 720)', value: 720 },
    { label: '1000점 (EXP x 1200)', value: 1200 },
  ];

  const {
    count: dragonEggStealingPlayTime,
    increment: dragonEggStealingPlayTimeIncrement,
    decrement: dragonEggStealingPlayTimeDecrement,
  } = useUpDownButton({
    initialValue: PORTAL_INITIAL_TIME.DRAGON_EGG_STEALING,
  });

  const {
    count: courtshipDancePlayTime,
    increment: courtshipDancePlayTimeIncrement,
    decrement: courtshipDancePlayTimeDecrement,
  } = useUpDownButton({
    initialValue: PORTAL_INITIAL_TIME.COURTSHIP_DANCE,
  });

  const {
    count: eagleHuntingPlayTime,
    increment: eagleHuntingPlayTimeIncrement,
    decrement: eagleHuntingPlayTimeDecrement,
  } = useUpDownButton({
    initialValue: PORTAL_INITIAL_TIME.EAGLE_HUNTING,
  });

  const dragonEggStealingSecond = calculatePrittoPlayTime({
    monsterExperience,
    numberOfMonster,
    expMultiplier,
    expValue: dragonEggStealingValue * sundayEventEffect,
    expRateRatio,
    sundayEventRatio,
    time: dragonEggStealingPlayTime,
  });
  const courtshipDanceSecond = calculatePrittoPlayTime({
    monsterExperience,
    numberOfMonster,
    expMultiplier,
    expValue: courtshipDanceValue * sundayEventEffect,
    expRateRatio,
    sundayEventRatio,
    time: courtshipDancePlayTime,
  });
  const eagleHuntingSecond = calculatePrittoPlayTime({
    monsterExperience,
    numberOfMonster,
    expMultiplier,
    expValue: eagleHuntingValue * sundayEventEffect,
    expRateRatio,
    sundayEventRatio,
    time: eagleHuntingPlayTime,
  });

  return (
    <ListItem sx={{ display: 'block', mb: 1 }}>
      <ListSubheaderUI title="프리토 효율" />

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
            <TableCell align="center" sx={{ width: '29%' }}>
              드래곤의 알
            </TableCell>
            <TableCell align="center" sx={{ width: '29%' }}>
              구애의 춤
            </TableCell>
            <TableCell align="center" sx={{ width: '29%' }}>
              독수리 사냥
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              설정
            </TableCell>
            <TableCell align="center" sx={{ p: 0 }}>
              <SelectedPrittoGameOptionUI
                value={dragonEggStealingValue}
                handleChange={handleDragonEggStealingChange}
                menuItem={dragonEggStealingItem}
              />
            </TableCell>
            <TableCell align="center">10단계 (EXP x 1200)</TableCell>
            <TableCell align="center" sx={{ p: 0 }}>
              <SelectedPrittoGameOptionUI
                value={eagleHuntingValue}
                handleChange={handleEagleHuntingChange}
                menuItem={eagleHuntingItem}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              클리어 타임
            </TableCell>
            <TableCell align="center" sx={{ p: 0 }}>
              <UpDownButtonUI
                initialValue={PORTAL_INITIAL_TIME.DRAGON_EGG_STEALING}
                count={dragonEggStealingPlayTime}
                increment={dragonEggStealingPlayTimeIncrement}
                decrement={dragonEggStealingPlayTimeDecrement}
              />
            </TableCell>
            <TableCell align="center" sx={{ p: 0 }}>
              <UpDownButtonUI
                initialValue={PORTAL_INITIAL_TIME.COURTSHIP_DANCE}
                count={courtshipDancePlayTime}
                increment={courtshipDancePlayTimeIncrement}
                decrement={courtshipDancePlayTimeDecrement}
              />
            </TableCell>
            <TableCell align="center" sx={{ p: 0 }}>
              <UpDownButtonUI
                initialValue={PORTAL_INITIAL_TIME.EAGLE_HUNTING}
                count={eagleHuntingPlayTime}
                increment={eagleHuntingPlayTimeIncrement}
                decrement={eagleHuntingPlayTimeDecrement}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              경험치
            </TableCell>
            <TableCell align="center">
              {formatNumber(
                monsterExperience * dragonEggStealingValue * sundayEventEffect
              )}
            </TableCell>
            <TableCell align="center">
              {formatNumber(
                monsterExperience * courtshipDanceValue * sundayEventEffect
              )}
            </TableCell>
            <TableCell align="center">
              {formatNumber(
                monsterExperience * eagleHuntingValue * sundayEventEffect
              )}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              사냥 효율
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: getTimePrittoColor(dragonEggStealingSecond) }}
            >
              약 {formatTime(dragonEggStealingSecond)}
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: getTimePrittoColor(courtshipDanceSecond) }}
            >
              약 {formatTime(courtshipDanceSecond)}
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: getTimePrittoColor(eagleHuntingSecond) }}
            >
              약 {formatTime(eagleHuntingSecond)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ListItem>
  );
};

export default MapPortalPrittoUI;
