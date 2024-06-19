import {
  ListItem,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../../../../atoms/expRateState';
import { numberOfMonsterState } from '../../../../atoms/numberOfMonsterState';
import { EVENT_SKILL } from '../../../../constants/constants';
import {
  convertToFirstDecimal,
  convertToSeconds,
  formatNumber,
  minutesToMinutesAndSeconds,
} from '../../../../utils/etc';
import ListSubheaderUI from '../../../common/ListSubheaderUI';

type MapEventSkillCompareUIProps = {
  item: MapInfo;
  monsterExperience: number;
};

const MapEventSkillCompareUI = ({
  item,
  monsterExperience,
}: MapEventSkillCompareUIProps) => {
  const expRate = useRecoilValue(totalExpSelector);
  const numberOfMonster = useRecoilValue(numberOfMonsterState(item.map_name));

  const totalMonsterExperience =
    monsterExperience * EVENT_SKILL.INITIAL_MOB_KILL;

  const calculateFieldGenTime = () => {
    const firstDecimal = convertToFirstDecimal(numberOfMonster);
    const second = convertToSeconds(firstDecimal);
    return Math.ceil(
      Math.ceil(EVENT_SKILL.REQUIRED_MOB_COUNT / numberOfMonster) * 7.5 + second
    );
  };

  const calculateRuneExpReward = (rune: number, cycleCount: number) => {
    return calculateRuneExpRewardForRune(rune) * cycleCount;
  };

  const calculateRuneExpRewardForRune = (rune: number) => {
    return (
      totalMonsterExperience * ((expRate + item.burning_field + rune) / 100)
    );
  };

  const calculateMonsterEfficiency = (experience: number) => {
    return (
      experience / (monsterExperience * ((expRate + item.burning_field) / 100))
    );
  };

  const calculateTotalTime = (fieldGenTime: number, cycleCount: number) => {
    const remainder = 20 % (cycleCount + 1);
    const additionalTime =
      remainder !== 0
        ? (fieldGenTime + EVENT_SKILL.DELAY) * remainder
        : (fieldGenTime + EVENT_SKILL.DELAY) * cycleCount;
    return (
      Math.ceil(15 * Math.ceil(20 / (cycleCount + 1))) * 60 + additionalTime
    );
  };

  const fieldGenTime = calculateFieldGenTime();
  const cycleCount = Math.floor(
    (270 - EVENT_SKILL.DELAY) / (fieldGenTime + EVENT_SKILL.DELAY)
  );
  const rune0xExperience =
    calculateRuneExpReward(0, EVENT_SKILL.ACTIVATION_COUNT - cycleCount * 2) +
    calculateRuneExpReward(100, cycleCount * 2);
  const rune2xExperience =
    calculateRuneExpReward(100, 1) * EVENT_SKILL.ACTIVATION_COUNT;
  const rune0xMonsterEfficiency = calculateMonsterEfficiency(rune0xExperience);
  const rune2xMonsterEfficiency = calculateMonsterEfficiency(rune2xExperience);
  const totalTime = calculateTotalTime(fieldGenTime, cycleCount);

  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI
        title="이벤트 스킬 룬컨트롤 효율 비교"
        subtitle="룬(Lv.2) 시작시 1회 + 마릿수 대비 횟수로 계산된 수치입니다."
      />

      <Box sx={{ mb: 1 }}>
        <Table
          size="small"
          sx={{ th: { fontWeight: 500 }, td: { fontSize: 13 } }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ m: 2, fontSize: 15, width: '37%' }}
              >
                룬 컨트롤 X
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                align="center"
                sx={{ p: 2, fontSize: 15, width: '37%' }}
              >
                룬 컨트롤 O
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                {minutesToMinutesAndSeconds(
                  ((fieldGenTime + EVENT_SKILL.DELAY) * 20) / 60
                )}
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                소요시간
              </TableCell>
              <TableCell align="center">
                {minutesToMinutesAndSeconds(totalTime / 60)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">
                {formatNumber(rune0xExperience)}
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                경험치
              </TableCell>
              <TableCell align="center">
                {formatNumber(rune2xExperience)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">
                {Math.ceil(rune0xMonsterEfficiency).toLocaleString()}
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                마릿수 효율
              </TableCell>
              <TableCell align="center">
                {Math.ceil(rune2xMonsterEfficiency).toLocaleString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </ListItem>
  );
};

export default MapEventSkillCompareUI;
