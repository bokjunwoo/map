import {
  Box,
  Card,
  Chip,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemText,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import { useLevelState } from '../../contexts/LevelStateProvider';
import { MapInfo } from '../../interface/map';
import {
  calculateIndividualExperienceMultiplier,
  calculateIndividualMesoMultiplier,
} from '../../utils/calculate';
import MiniMapBodyUI from '../Card/UI/MiniMapBodyUI';
import MiniMapHeaderUI from '../Card/UI/MiniMapHeaderUI';
import MapCalculate from './MapCalculate';

interface MapDetailCollapseProps {
  open: boolean;
  item: MapInfo;
}

const MapDetailCollapse = ({ open, item }: MapDetailCollapseProps) => {
  const { level: playerLevel } = useLevelState();
  return (
    <TableRow sx={{ bgcolor: '#f1f2f3' }}>
      <TableCell
        style={{ paddingBottom: 0, paddingTop: 0, borderBottom: 'none' }}
        colSpan={8}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Card sx={{ border: '4px solid #ffffff', maxWidth: 368 }}>
              <MiniMapHeaderUI mapInfo={item} />
              <MiniMapBodyUI mapInfo={item} />
            </Card>
          </Box>

          {item.monsters.map((monster, index) => {
            return (
              <List
                key={index}
                sx={{
                  width: '100%',
                  maxWidth: 368,
                  bgcolor: 'background.paper',
                  mt: 1,
                  mb: 1,
                }}
              >
                <ListItem>
                  <ListItemText
                    primary={monster.name}
                    secondary={
                      <React.Fragment>
                        <Divider>
                          <Chip
                            label="기본 몬스터 스탯"
                            size="small"
                            sx={{ mt: 1, mb: 1 }}
                          />
                        </Divider>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          레벨: {monster.level}
                        </Typography>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          경험치: {monster.experience.toLocaleString()}
                        </Typography>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          메소(평균): {monster.meso.toLocaleString()}
                        </Typography>

                        <Divider>
                          <Chip
                            label="내 배율에 따른 몬스터 스탯"
                            size="small"
                            sx={{ mt: 1, mb: 1 }}
                          />
                        </Divider>

                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          경험치:{' '}
                          {Math.floor(
                            calculateIndividualExperienceMultiplier(
                              playerLevel,
                              monster
                            ) * monster.experience
                          ).toLocaleString()}
                        </Typography>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          순 메소(평균/아획 {0}% 기준):{' '}
                          {Math.floor(
                            calculateIndividualMesoMultiplier(
                              playerLevel,
                              monster
                            ) * monster.meso
                          ).toLocaleString()}
                        </Typography>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          메획 획득 메소(평균):{' '}
                          {Math.floor(
                            calculateIndividualMesoMultiplier(
                              playerLevel,
                              monster
                            ) * monster.meso
                          ).toLocaleString()}
                        </Typography>

                        <Divider>
                          <Chip
                            label="자세히 보기"
                            size="small"
                            sx={{ mt: 1, mb: 1 }}
                          />
                        </Divider>

                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          몬스터와의 레벨 차이(캐릭터레벨 - 몬스터레벨):{' '}
                          {playerLevel - monster.level}
                        </Typography>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          레벨차이에 따른 경험치 배율:{' '}
                          {calculateIndividualExperienceMultiplier(
                            playerLevel,
                            monster
                          ) * 100}
                          %
                        </Typography>
                        <Typography
                          sx={{ display: 'block' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          레벨차이에 따른 메소 배율:{' '}
                          {calculateIndividualMesoMultiplier(
                            playerLevel,
                            monster
                          ) * 100}
                          %
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            );
          })}
          <MapCalculate item={item} />
        </Collapse>

        {/* <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container sx={{ margin: 1 }} spacing={1}>
            <Grid item xs={4}>
              <Card sx={{ border: '4px solid #ffffff', maxWidth: 350 }}>
                <CardHead mapInfo={item} />
                <CardBody mapInfo={item} />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ border: '4px solid #ffffff', maxWidth: 350 }}>
                <CardHead mapInfo={item} />
                <CardBody mapInfo={item} />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ border: '4px solid #ffffff', maxWidth: 350 }}>
                <CardHead mapInfo={item} />
                <CardBody mapInfo={item} />
              </Card>
            </Grid>
          </Grid>
        </Collapse> */}
      </TableCell>
    </TableRow>
  );
};

export default MapDetailCollapse;
