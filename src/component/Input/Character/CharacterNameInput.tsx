import { ChangeEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { alertState } from '../../../atoms/alertState';
import { REGEX } from '../../../constants/constants';
import useCharacterData from '../../../hooks/useCharacterData';
import CharacterInputUI from './UI/CharacterNameInputUI';

const CharacterNameInput = () => {
  const { fetchData } = useCharacterData();

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
  };

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!REGEX.CHARACTER_NAME.test(name))
        return setAlert({
          isError: true,
          message: '올바른 닉네임을 입력해주세요.',
        });

      await fetchData(name);
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
