import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { expRateState } from '../atoms/expRateState';
import { itemDropState } from '../atoms/itemDropState';
import { mesoDropState } from '../atoms/mesoDropState';
import { userLevelState } from '../atoms/userLevelState';
import CharacterLevelInput from '../component/Input/Character/CharacterLevelInput';
import MainPage from './MainPage';

const InputPage = () => {
  const setExpRate = useSetRecoilState(expRateState);
  const setItemDropRate = useSetRecoilState(itemDropState);
  const setMesoDropRate = useSetRecoilState(mesoDropState);
  const setUserLevel = useSetRecoilState(userLevelState);

  useEffect(() => {
    setExpRate([]);
    setItemDropRate([]);
    setMesoDropRate([]);
    setUserLevel(260);
  }, [setExpRate, setItemDropRate, setMesoDropRate, setUserLevel]);

  return (
    <Container maxWidth="lg">
      <CharacterLevelInput />
      <MainPage />
    </Container>
  );
};

export default InputPage;
