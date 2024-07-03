import RateBoxUI from './common/RateBoxUI';
import StatsCheckBoxStyle from './style/StatsCheckBoxStyle';

type StatsCheckBoxUIProps = {
  checkBoxOption: CheckBoxOption;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StatsCheckBoxUI = ({
  checkBoxOption,
  handleChange,
}: StatsCheckBoxUIProps) => {
  return (
    <RateBoxUI color={checkBoxOption.bgcolor} label={checkBoxOption.text}>
      <StatsCheckBoxStyle
        aria-label={checkBoxOption.name}
        sx={{
          border: `1px solid ${checkBoxOption.bgcolor}`,
        }}
        checked={checkBoxOption.checked}
        onChange={handleChange}
        name={checkBoxOption.name}
      />
    </RateBoxUI>
  );
};

export default StatsCheckBoxUI;
