import { Paper, Stack, Divider, Typography, styled } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { totalExpSelector } from '../atoms/expRateState';
import { totalItemDropSelector } from '../atoms/itemDropState';
import { totalMesoDropSelector } from '../atoms/mesoDropState';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: 'none',
  padding: theme.spacing(1),
  width: '33%',
  textAlign: 'center',
  border: '1px solid #e0e0e0',
}));

const RatesPanelUI = () => {
  const expRate = useRecoilValue(totalExpSelector);
  const ItemDropRate = useRecoilValue(totalItemDropSelector);
  const mesoDropRate = useRecoilValue(totalMesoDropSelector);

  return (
    <Stack
      sx={{ mt: 2, mb: 2 }}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <Item>
        <Typography variant="body2">경험치 획득량</Typography>
        <Typography variant="body1" color="#333333" fontWeight={600}>
          {expRate}%
        </Typography>
      </Item>
      <Item>
        <Typography variant="body2">아이템 드랍률</Typography>
        <Typography variant="body1" color="#333333" fontWeight={600}>
          {ItemDropRate}%
        </Typography>
      </Item>
      <Item>
        <Typography variant="body2">메소 획득량</Typography>
        <Typography variant="body1" color="#333333" fontWeight={600}>
          {mesoDropRate}%
        </Typography>
      </Item>
    </Stack>
  );
};

export default RatesPanelUI;
