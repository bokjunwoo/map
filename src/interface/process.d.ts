interface SkillRates {
  expRate: number;
  itemDropRate: number;
}

interface EventSkillRates {
  expRate: number;
  portalExpRate: number;
}

interface processCharacterData {
  ability: CharacterAbility;
  hyperStat: CharacterHyperStat;
  vmatrix: CharacterVCoreEquipment;
  hexaMatrix: CharacterHexaCoreEquipment;
  linkSkill: CharacterLinkSkill;
  itemEquipment: CharacterItemEquipment;
  cashItemEquipment: CharacterCashItemEquipment;
  unionRaider: UnionRaider;
  unionArtifact: UnionArtifact;
  classBishop: SkillRates;
  classNightLoad: SkillRates;
  classShadower: number;
  eventSkillBuff: EventSkillRates;
}

interface ProcessExpData {
  expHyperStat: number;
  elvenBlessing: number;
  expRateHolySymbol: number;
  solJanus: number;
  loadedDice: number;
  showDown: number;
  expTitle: number;
  boostRing: number;
  kinshipRing: number;
  unionZero: number;
  unionExpOccupied: number;
  expRateArtifact: number;
  spiritPendant: number;
  eventSkillStat: number;
}

interface ProcessItemDropData {
  itemDropRateHolySymbol: number;
  itemDropRateArtifact: number;
  itemDropRateAbility: number;
  itemDropRateItemEquipment: number;
  showDown: number;
}

interface ProcessMesoDropData {
  mesoDropRateArtifact: number;
  mesoDropRateAbility: number;
  mesoDropRateItemEquipment: number;
  unionPhantom: number;
  greed: number;
}
