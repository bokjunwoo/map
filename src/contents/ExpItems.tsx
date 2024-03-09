import { Paper, List, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccumulationPotion from '../components/Exp/AccumulationPotion';
import BoostRing from '../components/Exp/BoostRing';
import ElvenBlessing from '../components/Exp/ElvenBlessing';
import ExpCoupon from '../components/Exp/ExpCoupon';
import ExtremeGoldPotion from '../components/Exp/ExtremeGoldPotion';
import HolySymbol from '../components/Exp/HolySymbol';
import KinshipRing from '../components/Exp/KinshipRing';
import LoadedDice from '../components/Exp/LoadedDice';
import MvpCoupon from '../components/Exp/MvpCoupon';
import PremiumRoom from '../components/Exp/PremiumPCroom';
import SolJanus from '../components/Exp/SolJanus';
import SpiritPendant from '../components/Exp/SpiritPendant';
import VIPCoupon from '../components/Exp/VIPCoupon';
import ZeroUnion from '../components/Exp/ZeroUnion';

export default function ExpItems() {
  interface ExpItems {
    label: string;
    Components: React.ComponentType[];
  }

  const expItems: ExpItems[] = [
    {
      label: '버프 아이템',
      Components: [
        ExpCoupon,
        MvpCoupon,
        VIPCoupon,
        AccumulationPotion,
        ExtremeGoldPotion,
      ],
    },
    {
      label: '착용 아이템',
      Components: [SpiritPendant, BoostRing, KinshipRing],
    },
    {
      label: '링크&유니온&스탯',
      Components: [ElvenBlessing, ZeroUnion, PremiumRoom],
    },
    {
      label: '스킬 관련',
      Components: [HolySymbol, LoadedDice, SolJanus],
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {expItems.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <List component={Paper} sx={{ pt: 0, pb: 0 }}>
              <Typography variant="h6" sx={{ p: 2, fontSize: '16px' }}>
                {item.label}
              </Typography>
              <Divider />
              {item.Components.map((Component, idx) => (
                <Component key={idx} />
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
