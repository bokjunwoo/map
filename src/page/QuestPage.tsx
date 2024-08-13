import {
  Box,
  Card,
  CardHeader,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import QuestCharacterInfoUIT from '../component/Card/QuestCharacterInfoUIT';
import AraneRiverQuest from '../component/List/Quest/AraneRiverQuest';
import AraneRiverWeeklyQuest from '../component/List/Quest/AraneRiverWeeklyQuest';
import EpicDungeon from '../component/List/Quest/EpicDungeon';
import GrandisQuest from '../component/List/Quest/GrandisQuest';
import MonsterPark from '../component/List/Quest/MonsterPark';
import PunchkingEvent from '../component/List/Quest/PunchkingEvent';
import QuestTitleUI from '../component/Text/QuestTitleUI';

const QuestPage = () => {
  return (
    <Container maxWidth="lg">
      <Card
        sx={{ bgcolor: blueGrey[800], px: 2, pt: 1.5, pb: 2, borderRadius: 2 }}
      >
        <CardHeader
          title="CHARACTOR EXP SCHEDULER"
          sx={{ p: 0, pb: 1.5 }}
          titleTypographyProps={{
            color: '#ddfe01',
            fontWeight: 600,
            fontSize: 20,
          }}
        />
        <QuestCharacterInfoUIT />
        <Box>
          <Grid
            container
            display="flex"
            alignItems="center"
            bgcolor={blueGrey[500]}
            borderRadius={1}
            mt={2}
            py={1}
          >
            <Grid item xs={4}>
              <Typography
                fontSize={20}
                color={grey[200]}
                fontWeight={600}
                px={2}
              >
                경험치 획득 시 도달 레벨
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography
                fontSize={26}
                textAlign="center"
                color="#f5f0cb"
                px={2}
                fontWeight={600}
              >
                290(77.888%)
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography fontSize={24} textAlign="end" px={2}>
                ?
              </Typography>
            </Grid>
          </Grid>

          <Box bgcolor={grey[300]} mt={2} p={1} borderRadius={1}>
            <QuestTitleUI title="일일컨텐츠" />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <GrandisQuest />
              </Grid>
              <Grid item xs={4}>
                <AraneRiverQuest />
              </Grid>
              <Grid item xs={4}>
                <MonsterPark />
              </Grid>
            </Grid>

            <QuestTitleUI title="주간컨텐츠" />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <AraneRiverWeeklyQuest />
              </Grid>
              <Grid item xs={4}>
                <EpicDungeon />
              </Grid>
              <Grid item xs={4}>
                <PunchkingEvent />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default QuestPage;
