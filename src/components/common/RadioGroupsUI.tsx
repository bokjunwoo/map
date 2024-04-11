import {
  Avatar,
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

type RadioGroupsUIProps = {
  selectedOption: SelectOptions;
  selectedValue: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconName: string;
};

const RadioGroupsUI = ({
  selectedOption,
  selectedValue,
  handleChange,
  iconName,
}: RadioGroupsUIProps) => {
  return (
    <FormControl fullWidth>
      <RadioGroup
        row
        onChange={handleChange}
        aria-labelledby="radio_rune_buttons_group"
        name="radio_rune_buttons_group"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {selectedOption.values.map((option) => {
          return (
            <FormControlLabel
              key={option.label}
              value={option.value}
              labelPlacement="top"
              control={<Radio sx={{ display: 'none' }} />}
              sx={{ mt: 1, mb: 1 }}
              label={
                <Box
                  sx={{
                    p: 2,
                    outline:
                      selectedValue === option.value
                        ? '2px solid #3366FF'
                        : '2px solid #AFB3B3',
                    borderRadius: 1,
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src={
                      selectedValue === option.value
                        ? require(`../../assets/etc_icon/${iconName}.png`)
                        : require(`../../assets/etc_icon/${iconName}_disabled.png`)
                    }
                  />
                  <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    {option.label}
                  </Typography>
                </Box>
              }
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupsUI;
