import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CollapseCellUI from '../common/CollapseCellUI';
import MapBoosterUI from '../MapBooster/MapBoosterUI';
import MapCalculateUI from '../MapCalculate/MapCalculateUI';
import MapEventSkillUI from '../MapEventSkill/MapEventSkillUI';
import MapImageUI from '../MapInfo/MapInfoImageUI';
import MapInfoUI from '../MapInfo/MapInfoUI';
import MapMobUI from '../MapMob/MapMobUI';
import MapPortalUI from '../MapPortal/MapPortalUI';

type MapCollapseUIProps = {
  open: boolean;
  mapInfo: MapInfo;
};

const MapCollapseUI = ({ open, mapInfo }: MapCollapseUIProps) => {
  return (
    <CollapseCellUI open={open} colSpan={8} bgColor="#F1F2F3">
      <Grid container spacing={1}>
        <Grid xs={4.2}>
          <Box sx={{ mt: 1 }}>
            <MapImageUI mapInfo={mapInfo} />
          </Box>

          <Box sx={{ mt: 1 }}>
            <MapInfoUI mapInfo={mapInfo} />
          </Box>
        </Grid>

        <Grid xs={7.8}>
          <Box sx={{ mt: 1 }}>
            <MapCalculateUI mapInfo={mapInfo} />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid xs={4.2}>
          {mapInfo.monsters.map((mobInfo, index) => {
            return (
              <Box sx={{ mt: 1, mb: 1 }} key={index}>
                <MapMobUI mobInfo={mobInfo} />
              </Box>
            );
          })}
        </Grid>

        <Grid xs={7.8}>
          <Box sx={{ mt: 1 }}>
            <MapPortalUI mapInfo={mapInfo} />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid xs={6}>
          <Box sx={{ mt: 1, mb: 1 }}>
            <MapBoosterUI mapInfo={mapInfo} />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box sx={{ mt: 1, mb: 1 }}>
            <MapEventSkillUI mapInfo={mapInfo} />
          </Box>
        </Grid>
      </Grid>
    </CollapseCellUI>
  );
};

export default MapCollapseUI;
