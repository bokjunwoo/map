export const blessingPortalBuffExpRate = (level: number): number => {
  switch (level) {
    case 0:
      return 0;
    case 1:
      return 10;
    case 2:
      return 20;
    case 3:
      return 40;
    case 4:
      return 60;
    case 5:
      return 80;
    case 6:
      return 100;
    default:
      return 0;
  }
};

export const calculatePrittoExpMultiplier = (
  expMultiplier: number,
  buffExpRate: number
): number => {
  if (buffExpRate === 0) {
    return expMultiplier;
  }

  const total = expMultiplier * (1 + buffExpRate / 100);
  return total;
};
