import { Box, List, ListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ChangeEvent } from 'react';
import { monsterParkRegions } from '../../../../data/quest';
import { truncateToFixed } from '../../../../utils/format';
import {
  calculateMonsterParkTotalExpPercentage,
  filterValidRegions,
} from '../../../../utils/quest';
import MonsterParkRadioUI from '../../../Radio/MonsterParkRadio';
import HighEndDungeonListTextUI from './HighEndDungeonListTextUI';
import MonsterParkListItemUI from './MonsterParkListItemUI';

type Props<T extends MonsterParkRegion> = {
  title: string;
  characterLevel: number;
  selectedMonsterParkRegions: T[];
  selectedRegions: T[];
  handleCheckboxChange: (region: MonsterParkRegion, checked: boolean) => void;
};

const MonsterParkListUI = <T extends MonsterParkRegion>({
  title,
  characterLevel,
  selectedMonsterParkRegions,
  selectedRegions,
  handleCheckboxChange,
}: Props<T>) => {
  const validRegions = filterValidRegions(selectedRegions, monsterParkRegions);

  const totalExpPercentage = calculateMonsterParkTotalExpPercentage({
    characterLevel,
    regions: validRegions,
  });

  const adjustedMonsterParkRegions =
    characterLevel >= 260
      ? selectedMonsterParkRegions.slice().reverse()
      : selectedMonsterParkRegions;

  return (
    <List sx={{ py: 0.5 }}>
      <ListItem
        sx={{
          px: 1.5,
          py: 0.5,
          border: `1px solid ${grey[400]}`,
          borderRadius: 1,
          bgcolor: grey[500],
        }}
      >
        <Box width="100%" py={0.5}>
          <Typography
            variant="h6"
            fontSize={18}
            color="white"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography
              component="span"
              variant="body2"
              fontWeight={500}
              color="#ffff00"
            >
              경험치 획득 시 총합
            </Typography>
            <Typography
              component="span"
              variant="body2"
              fontWeight={500}
              color="#ffff00"
            >
              ({truncateToFixed(totalExpPercentage, 3)}%)
            </Typography>
          </Box>
        </Box>
      </ListItem>

      <MonsterParkRadioUI
        value={''}
        handleChange={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
      />

      {adjustedMonsterParkRegions.map((region) =>
        region === '익스트림 몬스터파크' ? (
          <MonsterParkListItemUI
            key={region}
            label={region}
            characterLevel={characterLevel}
            selectedRegions={selectedRegions}
            handleCheckboxChange={handleCheckboxChange}
          />
        ) : (
          <HighEndDungeonListTextUI
            key={region}
            label={region}
            selectedRegions={selectedRegions}
            handleCheckboxChange={handleCheckboxChange}
          />
        )
      )}
    </List>
  );
};

export default MonsterParkListUI;
