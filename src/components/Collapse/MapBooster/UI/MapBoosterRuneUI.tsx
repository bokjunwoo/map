import { ListItem } from '@mui/material';
import ListSubheaderUI from '../../../common/ListSubheaderUI';
import RadioGroupsUI from '../../../common/RadioGroupsUI';

type MapBoosterRuneUIProps = {
  selectedRuneOption: SelectOptions;
  selectedRuneValue: number;
  handleSelectRuneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MapBoosterRuneUI = ({
  selectedRuneOption,
  selectedRuneValue,
  handleSelectRuneChange,
}: MapBoosterRuneUIProps) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <ListSubheaderUI
        title="룬 설정"
        subtitle="룬(에반링크 Lv.2)이 적용 중일 때 사용한다는 가정"
      />

      <RadioGroupsUI
        selectedOption={selectedRuneOption}
        selectedValue={selectedRuneValue}
        handleChange={handleSelectRuneChange}
        iconName="rune"
      />
    </ListItem>
  );
};

export default MapBoosterRuneUI;
