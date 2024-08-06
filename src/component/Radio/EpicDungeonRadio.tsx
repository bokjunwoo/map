import CheckIcon from '@mui/icons-material/Check';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

type Props = {
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const EpicDungeonRadioUI = ({ value, handleChange }: Props) => {
  return (
    <FormControl
      fullWidth
      sx={{
        bgcolor: blueGrey[700],
        px: 1.5,
        py: 0.5,
        borderBottom: `1px solid ${grey[300]}`,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      }}
    >
      <FormLabel
        id="epic_dungeon_radio_buttons_group"
        sx={{
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#FFC107',
          '&.Mui-focused': {
            color: '#FFC107',
          },
        }}
      >
        EXP보너스
      </FormLabel>
      <RadioGroup
        value={value}
        onChange={handleChange}
        row
        aria-labelledby="epic_dungeon_controlled_radio_buttons_group"
        name="epic_dungeon"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FormControlLabel
          value={1}
          control={
            <Radio
              sx={{ color: grey[400] }}
              disableRipple
              size="small"
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={
                <Box style={{ position: 'relative' }}>
                  <RadioButtonUncheckedIcon
                    fontSize="small"
                    sx={{ mb: -0.5, color: grey[100] }}
                  />
                  <CheckIcon
                    sx={{
                      color: '#FFC107',
                      position: 'absolute',
                      top: -9,
                      left: -2,
                      fontSize: 30,
                    }}
                  />
                </Box>
              }
            />
          }
          label="Lv.0"
          labelPlacement="bottom"
          sx={{
            '& .MuiFormControlLabel-label': {
              mt: -1,
              fontSize: 14,
              fontWeight: 'bold',
              color: value === 1 ? grey[100] : grey[400],
            },
          }}
        />
        <Box
          width={35}
          sx={{ borderBottom: `2px solid ${grey[400]}`, mb: 2 }}
        />
        <FormControlLabel
          value={5}
          control={
            <Radio
              sx={{ color: grey[400] }}
              disableRipple
              size="small"
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={
                <Box style={{ position: 'relative' }}>
                  <RadioButtonUncheckedIcon
                    fontSize="small"
                    sx={{ mb: -0.5, color: grey[100] }}
                  />
                  <CheckIcon
                    sx={{
                      color: '#FFC107',
                      position: 'absolute',
                      top: -9,
                      left: -2,
                      fontSize: 30,
                    }}
                  />
                </Box>
              }
            />
          }
          label="Lv.1"
          labelPlacement="bottom"
          sx={{
            '& .MuiFormControlLabel-label': {
              mt: -1,
              fontSize: 14,
              fontWeight: 'bold',
              color: value === 5 ? grey[100] : grey[400],
            },
          }}
        />
        <Box
          width={35}
          sx={{ borderBottom: `2px solid ${grey[400]}`, mb: 2 }}
        />
        <FormControlLabel
          value={9}
          control={
            <Radio
              sx={{ color: grey[400] }}
              disableRipple
              size="small"
              icon={<RadioButtonUncheckedIcon fontSize="small" />}
              checkedIcon={
                <Box style={{ position: 'relative' }}>
                  <RadioButtonUncheckedIcon
                    fontSize="small"
                    sx={{ mb: -0.5, color: grey[100] }}
                  />
                  <CheckIcon
                    sx={{
                      color: '#FFC107',
                      position: 'absolute',
                      top: -9,
                      left: -2,
                      fontSize: 30,
                    }}
                  />
                </Box>
              }
            />
          }
          label="Lv.2"
          labelPlacement="bottom"
          sx={{
            '& .MuiFormControlLabel-label': {
              mt: -1,
              fontSize: 14,
              fontWeight: 'bold',
              color: value === 9 ? grey[100] : grey[400],
            },
          }}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default EpicDungeonRadioUI;
