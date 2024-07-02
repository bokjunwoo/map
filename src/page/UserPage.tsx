import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CharacterInfoUI from '../component/Card/CharacterInfoUI';
import useCharacterData from '../hooks/useCharacterData';
import MainPage from './MainPage';

const UserPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { fetchData, error } = useCharacterData();

  useEffect(() => {
    if (!name) {
      navigate('/');
      return;
    }

    if (error) {
      navigate('/');
      return;
    }

    fetchData(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <Container maxWidth="lg">
      <CharacterInfoUI />
      <MainPage />
    </Container>
  );
};

export default UserPage;
