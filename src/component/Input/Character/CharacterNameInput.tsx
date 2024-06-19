import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { alertState } from '../../../atoms/alertState';
import { REGEX } from '../../../constants/constants';
import useCharacterData from '../../../hooks/useCharacterData';
import CharacterInputUI from './UI/CharacterNameInputUI';

const CharacterNameInput = () => {
  const navigate = useNavigate();

  const { fetchData, loading, error } = useCharacterData();

  const setAlert = useSetRecoilState(alertState);

  const [name, setName] = useState('');

  const handleNameValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    setName(targetValue);
  };

  const fetchHandleClick = async () => {
    if (!REGEX.CHARACTER_NAME.test(name))
      return setAlert({
        isError: true,
        message: '올바른 닉네임을 입력해주세요.',
      });

    await fetchData(name);

    // 로딩상태가 아니고, 에러가 아닐때
    if (!loading && !error) {
      navigate(`name/${name}`);
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!REGEX.CHARACTER_NAME.test(name))
        return setAlert({
          isError: true,
          message: '올바른 닉네임을 입력해주세요.',
        });

      await fetchData(name);

      if (!loading && !error) {
        navigate(`name/${name}`);
      }
    }
  };

  return (
    <CharacterInputUI
      value={name}
      onChange={handleNameValueChange}
      onClick={fetchHandleClick}
      onKeyDown={handleKeyDown}
    />
  );
};

export default CharacterNameInput;
