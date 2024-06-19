import { useNavigate } from 'react-router-dom';
import DirectInputChipUI from './UI/DirectInputChipUI';

const DirectInputChip = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/input');
  };

  return <DirectInputChipUI onClick={handleClick} />;
};

export default DirectInputChip;
