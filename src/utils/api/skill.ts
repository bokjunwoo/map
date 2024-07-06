export const findHolySymbolSkillExpRate = (data: CharacterSkill) => {
  let expRate = 0;

  for (const skill of data.character_skill) {
    if (skill.skill_name === '홀리 심볼' && skill.skill_level === 20) {
      expRate = 50;
      break;
    }
  }

  return expRate;
};

export const findHolySymbolSkillHyperPassiveRates = (
  data: CharacterSkill,
  baseExpRate: number
) => {
  let expRate = baseExpRate;
  let itemDropRate = 0;

  for (const skill of data.character_skill) {
    if (
      skill.skill_name === '홀리 심볼-익스피리언스' &&
      skill.skill_level > 0
    ) {
      expRate += 20;
    }
    if (
      skill.skill_name === '홀리 심볼-엑스트라 드롭' &&
      skill.skill_level > 0
    ) {
      itemDropRate = 30;
    }
  }

  return { expRate, itemDropRate };
};

export const findGreedSkillMesoDropRate = (data: CharacterSkill) => {
  let mesoDropRate = 0;

  for (const skill of data.character_skill) {
    if (skill.skill_name === '그리드' && skill.skill_level > 0) {
      mesoDropRate = 20;
      break;
    }
  }

  return mesoDropRate;
};

export const findShowDownSkillRates = (data: CharacterSkill) => {
  let expRate = 0;
  let itemDropRate = 0;

  for (const skill of data.character_skill) {
    if (skill.skill_name === '쇼다운 챌린지' && skill.skill_level >= 30) {
      expRate = 5;
      itemDropRate = 5;
    }
  }

  return { expRate, itemDropRate };
};

export const findShowDownSkillHyperPassiveRates = (
  data: CharacterSkill,
  baseExpRate: number,
  baseItemDropRate: number
) => {
  let expRate = baseExpRate;
  let itemDropRate = baseItemDropRate;

  for (const skill of data.character_skill) {
    if (skill.skill_name === '쇼다운 챌린지-인핸스' && skill.skill_level > 0) {
      expRate += 5;
      itemDropRate += 5;
      break;
    }
  }

  return { expRate, itemDropRate };
};
