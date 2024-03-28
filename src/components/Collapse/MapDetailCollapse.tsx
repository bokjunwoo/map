import { Box, Card, Collapse, Grid, TableCell, TableRow } from '@mui/material';
import { MapInfo } from '../../interface/map';
import MiniMapBodyUI from '../Card/UI/MiniMapBodyUI';
import MiniMapHeaderUI from '../Card/UI/MiniMapHeaderUI';
import MapCalculate from './MapCalculate';
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
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Box sx={{ mt: 1, mb: 1 }}>
                <Card sx={{ border: '4px solid #ffffff' }}>
                  <MiniMapHeaderUI mapInfo={item} />
                  <MiniMapBodyUI mapInfo={item} />
                </Card>
              </Box>

              {item.monsters.map((monster, index) => {
                return (
                  <Box sx={{ mt: 1, mb: 1 }} key={index}>
                    <MapMonsterInfoUI monster={monster} />
                  </Box>
                );
              })}
            </Grid>

            <Grid item xs={8}>
              <Box sx={{ mt: 1, mb: 1 }}>
                <MapCalculate item={item} />
              </Box>
            </Grid>

            <Grid item xs={8}></Grid>
          </Grid>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default MapDetailCollapseUI;
