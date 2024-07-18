import { List, ListSubheader } from '@mui/material';

const RateListUI = ({ item }: { item: RateList }) => {
  return (
    <List
      disablePadding
      sx={{
        bgcolor: `rgba(${item.rgb}, 0.05)`,
        border: `1px solid rgb(${item.rgb})`,
        borderRadius: 1,
      }}
      subheader={
        <ListSubheader
          disableSticky
          component="div"
          id="exp_subheader"
          sx={{
            bgcolor: `rgb(${item.rgb})`,
            color: 'white',
            fontWeight: 500,
          }}
        >
          {item.label}
        </ListSubheader>
      }
    >
      {item.Components.map((Component, idx) => (
        <Component key={idx} />
      ))}
    </List>
  );
};

export default RateListUI;
