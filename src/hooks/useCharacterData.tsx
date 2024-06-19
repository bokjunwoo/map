import axios from 'axios';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  getHyperStat,
  getAbility,
  getLinkSkill,
  getVmatrix,
  getHexaMatrix,
  getItemEquipment,
  getCashItemEquipment,
  getCharacterInfo,
} from '../api/character';
import { getUserId } from '../api/id';
import { getUnionRaider, getUnionArtifact } from '../api/user';
import { alertState } from '../atoms/alertState';
import { characterInfoState } from '../atoms/characterInfoState';
import { expRateState } from '../atoms/expRateState';
import { itemDropState } from '../atoms/itemDropState';
import { mesoDropState } from '../atoms/mesoDropState';
import { regionListState } from '../atoms/regionListState';
import { userLevelState } from '../atoms/userLevelState';
import { validateCharacterInfo } from '../utils/api/charater';
import { getErrorMessage } from '../utils/error';
import { findNearestRegion } from '../utils/etc';
import { processCharacterData } from '../utils/process';

const useCharacterData = () => {
  const setExpRate = useSetRecoilState(expRateState);
  const setItemDropRate = useSetRecoilState(itemDropState);
  const setMesoDropRate = useSetRecoilState(mesoDropState);
  const setCharacterInfo = useSetRecoilState(characterInfoState);
  const setUserLevel = useSetRecoilState(userLevelState);
  const setRegionList = useSetRecoilState(regionListState);
  const setAlert = useSetRecoilState(alertState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (characterName: string) => {
    setLoading(true);
    try {
      const userOcid = await getUserId(characterName);
      const characterInfo = await getCharacterInfo(userOcid);

      validateCharacterInfo(characterInfo);

      const [
        hyperStat,
        ability,
        linkSkill,
        vmatrix,
        hexaMatrix,
        itemEquipment,
        cashItemEquipment,
        unionRaider,
        unionArtifact,
      ] = await Promise.all([
        getHyperStat(userOcid),
        getAbility(userOcid),
        getLinkSkill(userOcid),
        getVmatrix(userOcid),
        getHexaMatrix(userOcid),
        getItemEquipment(userOcid),
        getCashItemEquipment(userOcid),
        getUnionRaider(userOcid),
        getUnionArtifact(userOcid),
      ]);

      const { processedExpData, processedItemDropData, processedMesoDropData } =
        processCharacterData({
          hyperStat,
          ability,
          linkSkill,
          vmatrix,
          hexaMatrix,
          itemEquipment,
          cashItemEquipment,
          unionRaider,
          unionArtifact,
        });

      setExpRate(processedExpData);
      setItemDropRate(processedItemDropData);
      setMesoDropRate(processedMesoDropData);
      setCharacterInfo(characterInfo);
      setUserLevel(characterInfo.character_level);
      setRegionList([findNearestRegion(characterInfo.character_level)]);
    } catch (error: any) {
      setError(true);
      if (axios.isAxiosError(error) && error.response) {
        const code = error.response.data.error.name;

        setAlert({ isError: true, message: getErrorMessage(code) });
      } else {
        setAlert({ isError: true, message: error.message });
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading, error };
};

export default useCharacterData;
