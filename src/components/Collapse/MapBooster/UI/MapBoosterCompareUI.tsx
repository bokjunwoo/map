import {
  ListItem,
  Box,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Avatar,
} from '@mui/material';
import { ChangeEvent } from 'react';
import { useExpRateValue } from '../../../../contexts/ExpRateStateProvider';
import {
  formatNumber,
  minutesToMinutesAndSeconds,
} from '../../../../utils/etc';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import AdornmentFieldUI from '../../../TextField/UI/AdornmentFieldUI';

type MapBoosterCompareUIProps = {
  burningField: number;
  runeValue: number;
  monsterExperience: number;
  boosterKillNumberOfMonster: number;
  FieldKillNumberOfMonster: number;
  accumulationPotionPrice: number;
  handleAccumulationPotionPriceChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
};

const MapBoosterCompareUI = ({
  burningField,
  runeValue,
  monsterExperience,
  boosterKillNumberOfMonster,
  FieldKillNumberOfMonster,
  accumulationPotionPrice,
  handleAccumulationPotionPriceChange,
}: MapBoosterCompareUIProps) => {
  const expRate = useExpRateValue();

  const runeEfficiency = runeValue === 100 ? 30 : 60;

  const calculateBoosterMonsterExp =
    monsterExperience * ((expRate + burningField + runeValue) / 100) * 10;

  const calculateAccumulationPotionMonsterExp =
    monsterExperience * ((expRate + burningField + runeEfficiency) / 100);

  const totalBoosterExp =
    calculateBoosterMonsterExp * boosterKillNumberOfMonster;

  const totalBoosterNumberOfMonster =
    totalBoosterExp / (calculateBoosterMonsterExp / 10);

  const halfMinHuntEfficiencyBooster =
    (Math.ceil(totalBoosterNumberOfMonster / FieldKillNumberOfMonster) * 7.5) /
    60;

  const accumulationPotionPercentage =
    (10 / (expRate + burningField + runeEfficiency)) * 100;

  const halfMinHuntEfficiencyAccumulationPotion =
    (30 * accumulationPotionPercentage) / 100;

  const totalAccumulationPotionNumberOfMonster =
    Math.floor((halfMinHuntEfficiencyAccumulationPotion * 60) / 7.5) *
    FieldKillNumberOfMonster;

  const totalAccumulationPotionExp =
    totalAccumulationPotionNumberOfMonster *
    calculateAccumulationPotionMonsterExp;

  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI
        title="부스터 1개(100초)와 소형경축비(30분) 효율 비교"
        subtitle="경험치 획득량이 증가 할 수록 경축비의 효율은 줄어듭니다."
      />

      <Box sx={{ mb: 1 }}>
        <Table
          size="small"
          sx={{ th: { fontWeight: 500 }, td: { fontSize: 13 } }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '37%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src={require('../../../../assets/etc_icon/booster.png')}
                  />
                </Box>
              </TableCell>
              <TableCell />
              <TableCell sx={{ width: '37%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src={require('../../../../assets/exp_icon/accumulation_potion.png')}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell align="center">
                {formatNumber(totalBoosterExp)}
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                경험치
              </TableCell>
              <TableCell align="center">
                {formatNumber(totalAccumulationPotionExp)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">
                약 {minutesToMinutesAndSeconds(halfMinHuntEfficiencyBooster)}
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                사냥 효율
              </TableCell>
              <TableCell align="center">
                약{' '}
                {minutesToMinutesAndSeconds(
                  halfMinHuntEfficiencyAccumulationPotion
                )}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">
                약 {totalBoosterNumberOfMonster} 마리
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                마릿수 효율
              </TableCell>
              <TableCell align="center">
                약 {totalAccumulationPotionNumberOfMonster} 마리
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">
                {Math.ceil(
                  (halfMinHuntEfficiencyBooster /
                    halfMinHuntEfficiencyAccumulationPotion) *
                    accumulationPotionPrice
                ).toLocaleString()}
                만원
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                가격비교
              </TableCell>
              <TableCell align="center" sx={{ p: 0 }}>
                <AdornmentFieldUI
                  value={accumulationPotionPrice}
                  onChange={handleAccumulationPotionPriceChange}
                  adornment="만원"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </ListItem>
  );
};

export default MapBoosterCompareUI;
