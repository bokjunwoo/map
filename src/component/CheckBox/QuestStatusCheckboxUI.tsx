import Checkbox from '@mui/material/Checkbox';

type Props<T extends AllQuestRegion> = {
  label: T;
  selectedRegions: T[];
  handleChange: (region: T, checked: boolean) => void;
  error: boolean;
};

const QuestStatusCheckboxUI = <T extends AllQuestRegion>({
  label,
  selectedRegions,
  handleChange,
  error,
}: Props<T>) => {
  return (
    <Checkbox
      checked={selectedRegions.includes(label)}
      onChange={(e) => handleChange(label, e.target.checked)}
      disableRipple
      inputProps={{ 'aria-label': `${label}_checkbox` }}
      size="small"
      color={error ? 'error' : 'primary'}
      sx={{
        ml: -1,
        mt: error ? -1.5 : 0,
      }}
    />
  );
};

export default QuestStatusCheckboxUI;
