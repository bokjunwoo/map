export const validateCharacterInfo = (data: CharacterInfoData) => {
  if (data.character_level < 200) {
    throw new Error('캐릭터 레벨이 200 미만입니다.');
  }

  if (Number(data.character_class_level) < 5) {
    throw new Error('5차 전직을 완료하지 않은 캐릭터 입니다.');
  }
};
