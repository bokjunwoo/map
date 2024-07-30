import { List, ListItem, ListItemText } from '@mui/material';
import { blue } from '@mui/material/colors';
import { grandisDailyQuestRegions } from '../../../../data/quest';
import { calculateGrandisTotalExpPercentage } from '../../../../utils/quest';
import QuestList from './QuestList';

type Props = {
  characterLevel: number;
  selectedRegions: GrandisDailyQuestRegion[];
  handleCheckboxChange: (
    region: GrandisDailyQuestRegion,
    checked: boolean
  ) => void;
};

const GrandisQuestUI = ({
  characterLevel,
  selectedRegions,
  handleCheckboxChange,
}: Props) => {
  const totalExpPercentage = calculateGrandisTotalExpPercentage({
    characterLevel,
    regions: selectedRegions,
  });

  return (
    <List sx={{ border: `2px solid ${blue[700]}`, borderRadius: 1 }}>
      <ListItem>
        <ListItemText
          primary="그란디스 일일퀘스트"
          secondary={`경험치 획득 시 총합: (${totalExpPercentage}%)`}
        />
      </ListItem>
      {grandisDailyQuestRegions.map((region) => (
        <QuestList
          key={region}
          label={region}
          selectedRegions={selectedRegions}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </List>
  );
};

export default GrandisQuestUI;
