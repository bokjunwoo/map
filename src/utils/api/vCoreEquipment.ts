export const findVCoreLevel = (
  data: CharacterVCoreEquipment,
  targetCoreName: string
) => {
  let totalLevel = 0;

  data.character_v_core_equipment.forEach((coreEquipment) => {
    if (coreEquipment.v_core_name === targetCoreName) {
      totalLevel += coreEquipment.v_core_level + coreEquipment.slot_level;
    }
  });

  return totalLevel;
};

export const calculateHolySymbolExpRate = (level: number) => {
  if (level === 0) return 0;
  const baseRate = 20;
  const additionalRate = Math.floor(level * 0.5);
  const totalRate = baseRate + additionalRate;

  return totalRate;
};

export const calculateHolySymbolItemDropRate = (level: number) => {
  if (level === 0) return 0;
  const baseRate = 14;
  const additionalRate = Math.floor(level / 3);
  const totalRate = baseRate + additionalRate;

  return totalRate;
};
