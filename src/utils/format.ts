export const extractValue = (value: string): number => {
  const match = value.match(/(\d+)%?/);
  return match ? parseInt(match[1], 10) : 0;
};
