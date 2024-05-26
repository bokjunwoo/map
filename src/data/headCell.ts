export const generateHeadCells: (selectedTime: string) => HeadCell[] = (
  selectedTime
) => [
  { id: 'map_region', label: '지역', disable_sorting: true },
  { id: 'map_name', label: '사냥터', disable_sorting: true },
  { id: 'number_of_monster', label: '몬스터 젠수' },
  {
    id: 'max_number_of_monster',
    label: `${selectedTime} 최대 마릿수`,
  },
  {
    id: 'max_experience_per_monster',
    label: `${selectedTime} 최대 경험치`,
  },
  {
    id: 'max_meso_per_monster',
    label: `${selectedTime} 최대 순 메소`,
    disable_sorting: true,
  },
  { id: 'burning_field', label: '버닝필드', disable_sorting: true },
];
