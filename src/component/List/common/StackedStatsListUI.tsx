import { Stack } from '@mui/material';
import StatsCheckBoxUI from '../../common/Stats/StatsCheckBoxUI';
import StatsChipStyle from '../../common/Stats/StatsChipUI';

type StackedStatsListUIProps = {
  rateList?: RateListOption[];
  checkBoxList?: CheckBoxGroup;
};

const StackedStatsListUI = ({
  rateList,
  checkBoxList,
}: StackedStatsListUIProps) => {
  return (
    <Stack direction="row" spacing={1}>
      {rateList?.map((option) => (
        <StatsChipStyle key={option.text} rateList={option} />
      ))}

      {checkBoxList?.option.map((option) => (
        <StatsCheckBoxUI
          key={option.text}
          checkBoxOption={option}
          handleChange={checkBoxList.onChange}
        />
      ))}
    </Stack>
  );
};

export default StackedStatsListUI;
