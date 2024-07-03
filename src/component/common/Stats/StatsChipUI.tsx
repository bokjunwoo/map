import { Avatar } from '@mui/material';
import RateBoxUI from './common/RateBoxUI';
import StatsChipStyle from './style/StatsChipStyle';

type StatsChipUIProps = {
  rateList: RateListOption;
};

const StatsChipUI = ({ rateList }: StatsChipUIProps) => {
  return (
    <RateBoxUI color={rateList.bgcolor} label={rateList.text}>
      <StatsChipStyle
        sx={{
          border: `1px solid ${rateList.bgcolor}`,
          bgcolor: '#FFFFFF',
        }}
        avatar={
          <Avatar
            alt={rateList.iconName}
            src={require(`../../../assets/etc_icon/${rateList.iconName}.png`)}
            variant="rounded"
          />
        }
        label={`+ ${rateList.value}%`}
        size="small"
      />
    </RateBoxUI>
  );
};

export default StatsChipUI;
