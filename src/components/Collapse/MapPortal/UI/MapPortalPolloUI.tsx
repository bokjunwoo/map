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
import {
  PORTAL_EXP_VALUE,
  PORTAL_INITIAL_TIME,
} from '../../../../constants/constants';
import useUpDownButton from '../../../../hooks/useUpDownButton';
import { calculatePolloPlayTime } from '../../../../utils/calculate';
import { getTimePolloColor } from '../../../../utils/color';
import { formatNumber, formatTime } from '../../../../utils/etc';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import UpDownButtonUI from '../../../common/UpDownButtonUI';

type MapPortalPolloUIProps = {
  monsterExperience: number;
  expMultiplier: number;
  mapName: string;
  checkState: PortalCheckState;
};

const MapPortalPolloUI = ({
  monsterExperience,
  expMultiplier,
  mapName,
  checkState,
}: MapPortalPolloUIProps) => {
  const expRate = useRecoilValue(totalExpSelector);

  const numberOfMonster = useRecoilValue(numberOfMonsterState(mapName));

  const runeRatio = checkState.rune ? 100 : 0;
  const sundayEventRatio = checkState.sundayEvent ? 100 : 0;

  const expRateRatio = (expRate + runeRatio + sundayEventRatio) / 100;

  const {
    count: bountyHuntingPlayTime,
    increment: bountyHuntingPlayTimeIncrement,
    decrement: bountyHuntingPlayTimeDecrement,
  } = useUpDownButton({
    initialValue: PORTAL_INITIAL_TIME.BOUNTY_HUNTING,
  });

  const {
    count: castleGatesPlayTime,
    increment: castleGatesPlayTimeIncrement,
    decrement: castleGatesPlayTimeDecrement,
  } = useUpDownButton({
    initialValue: PORTAL_INITIAL_TIME.CASTLE_GATES,
  });

  const {
    count: stormwingPlayTime,
    increment: stormwingPlayTimeIncrement,
    decrement: stormwingPlayTimeDecrement,
  } = useUpDownButton({
    initialValue: PORTAL_INITIAL_TIME.STORMWING,
  });

  const bountyHuntingSecond = calculatePolloPlayTime({
    monsterExperience,
    numberOfMonster,
    expMultiplier,
    expValue: PORTAL_EXP_VALUE.BOUNTY_HUNTING,
    expRateRatio,
    sundayEventRatio,
    time: bountyHuntingPlayTime,
  });
  const castleGatesSecond = calculatePolloPlayTime({
    monsterExperience,
    numberOfMonster,
    expMultiplier,
    expValue: PORTAL_EXP_VALUE.CASTLE_GATES,
    expRateRatio,
    sundayEventRatio,
    time: castleGatesPlayTime,
  });
  const stormwingSecond = calculatePolloPlayTime({
    monsterExperience,
    numberOfMonster,
    expMultiplier,
    expValue: PORTAL_EXP_VALUE.STORMWING,
    expRateRatio,
    sundayEventRatio,
    time: stormwingPlayTime,
  });

  return (
    <ListItem sx={{ display: 'block', mb: 1 }}>
      <ListSubheaderUI title="폴로 효율" />

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
              성벽 지키기
            </TableCell>
            <TableCell align="center" sx={{ width: '29%' }}>
              현상금 사냥
            </TableCell>
            <TableCell align="center" sx={{ width: '29%' }}>
              스톰윙
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              클리어 타임
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <UpDownButtonUI
                initialValue={PORTAL_INITIAL_TIME.CASTLE_GATES}
                count={castleGatesPlayTime}
                increment={castleGatesPlayTimeIncrement}
                decrement={castleGatesPlayTimeDecrement}
              />
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <UpDownButtonUI
                initialValue={PORTAL_INITIAL_TIME.BOUNTY_HUNTING}
                count={bountyHuntingPlayTime}
                increment={bountyHuntingPlayTimeIncrement}
                decrement={bountyHuntingPlayTimeDecrement}
              />
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <UpDownButtonUI
                initialValue={PORTAL_INITIAL_TIME.STORMWING}
                count={stormwingPlayTime}
                increment={stormwingPlayTimeIncrement}
                decrement={stormwingPlayTimeDecrement}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              경험치
            </TableCell>
            <TableCell align="center">
              {formatNumber(
                monsterExperience * PORTAL_EXP_VALUE.CASTLE_GATES * expRateRatio
              )}
            </TableCell>
            <TableCell align="center">
              {formatNumber(
                monsterExperience *
                  PORTAL_EXP_VALUE.BOUNTY_HUNTING *
                  expRateRatio
              )}
            </TableCell>
            <TableCell align="center">
              {formatNumber(
                monsterExperience * PORTAL_EXP_VALUE.STORMWING * expRateRatio
              )}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center" sx={{ p: 0, fontWeight: 500 }}>
              사냥 효율
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: getTimePolloColor(castleGatesSecond) }}
            >
              약 {formatTime(castleGatesSecond)}
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: getTimePolloColor(bountyHuntingSecond) }}
            >
              약 {formatTime(bountyHuntingSecond)}
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: getTimePolloColor(stormwingSecond) }}
            >
              약 {formatTime(stormwingSecond)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ListItem>
  );
};

export default MapPortalPolloUI;
