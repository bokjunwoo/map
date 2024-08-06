import { Box, List, ListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { epicDungeonExp } from '../../../../data/quest';
import { truncateToFixed } from '../../../../utils/format';
import {
  calculateEpicDungeonTotalExpPercentage,
  filterValidRegions,
} from '../../../../utils/quest';
import EpicDungeonListItemUI from './EpicDungeonListItemUI';

type Props<T extends EpicDungeonRegion> = {
  title: string;
  characterLevel: number;
  epicDungeonRegions: T[];
  selectedRegions: T[];
  handleCheckboxChange: (region: T, checked: boolean) => void;
};

const EpicDungeonListUI = <T extends EpicDungeonRegion>({
  title,
  characterLevel,
  epicDungeonRegions,
  selectedRegions,
  handleCheckboxChange,
}: Props<T>) => {
  const validRegions = filterValidRegions(selectedRegions, epicDungeonRegions);

  const totalExpPercentage = calculateEpicDungeonTotalExpPercentage({
    characterLevel,
    regions: validRegions,
    epicDungeonExp,
  });

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

      {epicDungeonRegions.map((region) => (
        <EpicDungeonListItemUI
          key={region}
          label={region}
          selectedRegions={selectedRegions}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </List>
  );
};

export default EpicDungeonListUI;
