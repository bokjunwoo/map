import { Box } from '@mui/material';
import MapPortalBuffButtonUI from '../../Input/Map/UI/MapPortalBuffButtonUI';
import RateBoxUI from './common/RateBoxUI';

type BuffButtonChipUIProps = {
  buffButtonOption: BuffButtonOption;
};

const BuffButtonChipUI = ({ buffButtonOption }: BuffButtonChipUIProps) => {
  return (
    <RateBoxUI color={buffButtonOption.bgcolor} label={buffButtonOption.text}>
      <Box
        sx={{
          border: `1px solid ${buffButtonOption.bgcolor}`,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}
      >
        <MapPortalBuffButtonUI
          count={buffButtonOption.count}
          increment={buffButtonOption.increment}
          decrement={buffButtonOption.decrement}
          disableIncrement={buffButtonOption.disableIncrement}
          disableDecrement={buffButtonOption.disableDecrement}
        />
      </Box>
    </RateBoxUI>
  );
};

export default BuffButtonChipUI;
