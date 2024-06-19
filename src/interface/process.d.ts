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
}

interface ProcessExpData {
  expHyperStat: number;
  elvenBlessing: number;
  expRateHolySymbol: number;
  solJanus: number;
  expTitle: number;
  boostRing: number;
  kinshipRing: number;
  unionZero: number;
  unionExpOccupied: number;
  expRateArtifact: number;
  spiritPendant: number;
}

interface ProcessItemDropData {
  itemDropRateHolySymbol: number;
  itemDropRateArtifact: number;
  itemDropRateAbility: number;
  itemDropRateItemEquipment: number;
}

interface ProcessMesoDropData {
  mesoDropRateArtifact: number;
  mesoDropRateAbility: number;
  mesoDropRateItemEquipment: number;
  unionPhantom: number;
}
