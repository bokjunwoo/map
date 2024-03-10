import { Box, Tab, Tabs } from '@mui/material';
import { Region } from '../../../interface/data';

type RegionTabProps = {
  value: string;
  regions: string[];
  handleChange: (event: React.SyntheticEvent, newValue: Region) => void;
};

const RegionTabUI = ({ value, regions, handleChange }: RegionTabProps) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label={`region_tabs_${value}`}
        sx={{ '& .MuiTabs-indicator': { backgroundColor: '#333333' } }}
      >
        {regions.map((item) => (
          <Tab
            key={item}
            label={item}
            value={item}
            sx={{
              '&.Mui-selected': { color: '#333333' },
              fontSize: '16px',
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default RegionTabUI;
