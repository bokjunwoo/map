export const extractValue = (value: string): number => {
  const match = value.match(/(\d+(\.\d+)?)%?/);
  return match ? parseFloat(match[1]) : 0;
};
