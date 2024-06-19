export const findLinkSkillLevel = (
  data: CharacterLinkSkill,
  targetSkillName: string
): number => {
  const presets = [
    data.character_link_skill_preset_1,
    data.character_link_skill_preset_2,
    data.character_link_skill_preset_3,
  ];

  for (const preset of presets) {
    const skill = preset.find((skill) => skill.skill_name === targetSkillName);
    if (skill) {
      return skill.skill_level;
    }
  }

  return 0;
};

export const calculateElvenBlessingExpRate = (level: number): number => {
  switch (level) {
    case 0:
      return 0;
    case 1:
      return 10;
    case 2:
      return 15;
    default:
      return 0;
  }
};
