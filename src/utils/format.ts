export const extractValue = (value: string): number => {
  const match = value.match(/(\d+(\.\d+)?)%?/);
  return match ? parseFloat(match[1]) : 0;
};

export const truncateToFixed = (value: number, decimals: number): string => {
  let factor = Math.pow(10, decimals);
  let truncatedValue = Math.floor(value * factor) / factor;

  let result = truncatedValue.toFixed(decimals);

  // 끝의 0을 제거
  while (result.includes('.') && result.endsWith('0')) {
    result = result.slice(0, -1);
  }

  // 소수점이 끝에 남으면 제거
  if (result.endsWith('.')) {
    result = result.slice(0, -1);
  }

  // 만약 0.000처럼 소수점 이하가 모두 0인 경우는 0이 아닌 숫자가 나올 때까지 표시
  if (parseFloat(result) === 0 && value !== 0) {
    let additionalDecimals = decimals;
    while (parseFloat(result) === 0 && additionalDecimals < 4) {
      // 최대 5자리까지 검사
      additionalDecimals++;
      factor = Math.pow(10, additionalDecimals);
      truncatedValue = Math.floor(value * factor) / factor;
      result = truncatedValue.toFixed(additionalDecimals);

      // 끝의 0을 제거
      while (result.includes('.') && result.endsWith('0')) {
        result = result.slice(0, -1);
      }

      // 소수점이 끝에 남으면 제거
      if (result.endsWith('.')) {
        result = result.slice(0, -1);
      }
    }

    // 여전히 0인 경우 0.00001로 설정
    if (parseFloat(result) === 0) {
      result = '0.0001';
    }
  }

  // 소수점 이하 자릿수가 최소 3자리를 유지하도록 보장
  const decimalPart = result.split('.')[1] || '';
  if (decimalPart.length < decimals) {
    result += '0'.repeat(decimals - decimalPart.length);
  }

  return result;
};
