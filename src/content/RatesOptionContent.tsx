import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import PresetButton from '../component/Button/PresetButton';
import RatePresetDialogUI from '../component/Dialog/RatePresetDialogUI';
import ExpRateList from '../component/List/Rate/ExpRateList';
import ItemDropRateList from '../component/List/Rate/ItemDropRateList';
import MesoDropRateList from '../component/List/Rate/MesoDropRateList';
import RatesPanelList from '../component/List/Rate/RatesPanelList';
import SelectButtonGroupUI from '../components/SelectButtonGroup/UI/SelectButtonGroupUI';

const RatesOptionContent = () => {
  const [selected, setSelected] = useState('경험치 획득량');

  const handleOptionSelect = (optionValue: string) => {
    setSelected(optionValue);
  };

  return (
    <>
      <Box sx={{ mt: 2 }}>
        <SelectButtonGroupUI
          options={['경험치 획득량', '아이템 드롭률', '메소 획득량']}
          selectedOption={selected}
          onOptionSelect={handleOptionSelect}
          fullWidth={true}
          colorVariant="gray"
        />
      </Box>

      <Stack
        direction="row"
        spacing={1}
        justifyContent="flex-end"
        mt={1}
        mb={1}
      >
        <RatePresetDialogUI />

        <PresetButton />
      </Stack>

      {selected === '경험치 획득량' && <ExpRateList />}
      {selected === '아이템 드롭률' && <ItemDropRateList />}
      {selected === '메소 획득량' && <MesoDropRateList />}

      <RatesPanelList />
    </>
  );
};

export default RatesOptionContent;
