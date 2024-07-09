import { TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userLevelState } from '../../../../atoms/userLevelState';
import { TIME_OPTIONS } from '../../../../constants/constants';
import { RGBColor } from '../../../../data/color';
import useMobRewards from '../../../../hooks/useMobRewards';
import { calculateExpPercentage } from '../../../../utils/calculate';
import { formatNumber } from '../../../../utils/etc';
import TableUI from '../../common/TableUI';

type MapCalculateMobResultTableUIProps = {
  mapInfo: MapInfo;
  initialNumberOfMonster: number;
};

const MapCalculateMobResultTableUI = ({
  mapInfo,
  initialNumberOfMonster,
}: MapCalculateMobResultTableUIProps) => {
  const userLevel = useRecoilValue(userLevelState);

  const { mobExp, mobPureMeso, mobBonusMeso } = useMobRewards({
    mapInfo,
    runeRate: 0,
  });

  const mobRatio = mapInfo.number_of_monster / initialNumberOfMonster;

  const expReward = mobExp * mobRatio;
  const pureMesoReward = mobPureMeso * mobRatio;
  const bonusMesoReward = mobBonusMeso * mobRatio;

  const tableContent = {
    tableHead: ['시간', '마릿수', '경험치', '순메소', '메획메소', '총합메소'],
    tableBody: [
      {
        시간: '1젠(8초)',
        마릿수: mapInfo.number_of_monster.toLocaleString(),
        경험치: `${formatNumber(expReward / 8)} (${calculateExpPercentage({
          userLevel,
          expReward: expReward / 8,
        })}%)`,
        순메소: formatNumber(pureMesoReward / 8),
        메획메소: formatNumber(bonusMesoReward / 8),
        총합메소: formatNumber(pureMesoReward / 8 + bonusMesoReward / 8),
      },
      ...TIME_OPTIONS.map((row) => ({
        시간: row.time,
        마릿수: (
          mapInfo.number_of_monster *
          8 *
          row.multiplier
        ).toLocaleString(),
        경험치: `${formatNumber(
          expReward * row.multiplier
        )} (${calculateExpPercentage({
          userLevel,
          expReward: expReward * row.multiplier,
        })}%)`,
        순메소: formatNumber(pureMesoReward * row.multiplier),
        메획메소: formatNumber(bonusMesoReward * row.multiplier),
        총합메소: formatNumber(
          pureMesoReward * row.multiplier + bonusMesoReward * row.multiplier
        ),
      })),
    ],
  };

  return (
    <TableUI
      ariaLabel="mob_result_table"
      sx={{
        border: '1px solid #ddd',
      }}
    >
      <TableHead>
        <TableRow>
          {tableContent.tableHead.map((header, index) => (
            <TableCell key={index} align="center" sx={{ p: '6px 2px' }}>
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {tableContent.tableBody.map((row, index) => (
          <TableRow
            hover={index === 0 ? false : true}
            key={index}
            sx={
              index === 0 ? { bgcolor: `rgb(${RGBColor.yellow})` } : undefined
            }
          >
            {Object.values(row).map((value, idx) => (
              <TableCell key={idx} align="center" sx={{ p: '6px 2px' }}>
                {value}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableUI>
  );
};

export default MapCalculateMobResultTableUI;
