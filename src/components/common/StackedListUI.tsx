import { Stack } from '@mui/material';
import RateChipUI from '../Chip/UI/RateChipUI';
import CheckBoxListUI from './CheckBoxListUI';

type StackedListUIProps = {
  rateList?: RateListOption[];
  checkBoxList?: CheckBoxGroup;
};

const StackedListUI = ({ rateList, checkBoxList }: StackedListUIProps) => {
  return (
    <Stack direction="row" spacing={1}>
      {rateList?.map((option) => (
        <RateChipUI key={option.text} rateList={option} />
      ))}

      {checkBoxList?.option.map((option) => (
        <CheckBoxListUI
          key={option.text}
          checkBoxOption={option}
          handleChange={checkBoxList.onChange}
        />
      ))}
    </Stack>
  );
};

export default StackedListUI;
