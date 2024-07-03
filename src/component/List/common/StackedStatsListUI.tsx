import { Stack } from '@mui/material';
import BuffButtonChipUI from '../../common/Stats/BuffButtonChipUI';
import StatsCheckBoxUI from '../../common/Stats/StatsCheckBoxUI';
import StatsChipUI from '../../common/Stats/StatsChipUI';

type StackedStatsListUIProps = {
  rateList?: RateListOption[];
  checkBoxList?: CheckBoxGroup;
  buffButtonOption?: BuffButtonOption;
};

const StackedStatsListUI = ({
  rateList,
  checkBoxList,
  buffButtonOption,
}: StackedStatsListUIProps) => {
  return (
    <Stack direction="row" spacing={1}>
      {rateList?.map((option) => (
        <StatsChipUI key={option.text} rateList={option} />
      ))}

      {checkBoxList?.option.map((option) => (
        <StatsCheckBoxUI
          key={option.text}
          checkBoxOption={option}
          handleChange={checkBoxList.onChange}
        />
      ))}

      {buffButtonOption && (
        <BuffButtonChipUI buffButtonOption={buffButtonOption} />
      )}
    </Stack>
  );
};

export default StackedStatsListUI;
