import { Box, Collapse, TableCell, TableRow } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { MapInfo } from '../../interface/map';
import MapBooster from './MapBooster';
import MapEventSkill from './MapEventSkill';
import MapPortal from './MapPortal';
import MapSettingUI from './MapSettingUI';
import MapCalculateUI from './UI/MapCalculateUI';
import MapMonsterInfoUI from './UI/MapMonsterInfoUI';

interface MapDetailCollapseUIProps {
  open: boolean;
  item: MapInfo;
}

const MapDetailCollapseUI = ({ open, item }: MapDetailCollapseUIProps) => {
  return (
    <TableRow sx={{ bgcolor: '#f1f2f3' }}>
      <TableCell
        style={{ paddingBottom: 0, paddingTop: 0, borderBottom: 'none' }}
        colSpan={8}
      >
        <Collapse in={open} timeout="auto" unmountOnExit sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid xs={4.2}>
              <Box sx={{ mt: 1 }}>
                <MapSettingUI item={item} />
              </Box>
            </Grid>

            <Grid xs={7.8}>
              <Box sx={{ mt: 1 }}>
                <MapCalculateUI item={item} />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid xs={4.2}>
              {item.monsters.map((monster, index) => {
                return (
                  <Box sx={{ mt: 1, mb: 1 }} key={index}>
                    <MapMonsterInfoUI monster={monster} />
                  </Box>
                );
              })}
            </Grid>

            <Grid xs={7.8}>
              <Box sx={{ mt: 1 }}>
                <MapPortal item={item} />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid xs={6}>
              <Box sx={{ mt: 1, mb: 1 }}>
                <MapBooster item={item} />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box sx={{ mt: 1, mb: 1 }}>
                <MapEventSkill item={item} />
              </Box>
            </Grid>
          </Grid>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default MapDetailCollapseUI;
