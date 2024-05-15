import { Box } from '@mui/material';
import { useState } from 'react';
import ExpList from '../components/Rate/List/ExpList';
import ItemDropList from '../components/Rate/List/ItemDropList';
import MesoDropList from '../components/Rate/List/MesoDropList';
import SelectButtonGroupUI from '../components/SelectButtonGroup/UI/SelectButtonGroupUI';
import RatesPanelUI from './RatesPanelUI';

const SelectedRateOptionList = () => {
  const [selected, setSelected] = useState('경험치 획득량');

  const handleOptionSelect = (optionValue: string) => {
    setSelected(optionValue);
  };

  return (
    <>
      <Box sx={{ mt: 2, mb: 2 }}>
        <SelectButtonGroupUI
          options={['경험치 획득량', '아이템 드롭률', '메소 획득량']}
          selectedOption={selected}
          onOptionSelect={handleOptionSelect}
          fullWidth={true}
          colorVariant="gray"
        />
      </Box>

      {selected === '경험치 획득량' && <ExpList />}
      {selected === '아이템 드롭률' && <ItemDropList />}
      {selected === '메소 획득량' && <MesoDropList />}

      <RatesPanelUI />
    </>
  );
};

export default SelectedRateOptionList;
