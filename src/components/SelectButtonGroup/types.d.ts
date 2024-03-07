export interface SelectButtonGroupProps {
  options: string[];
  defaultOptionValue: string;
  fullWidth: boolean;
  colorVariant: 'black' | 'gray';
}

export interface LocalStorageSelectButtonGroupProps
  extends SelectButtonGroupProps {
  localStorageKey: string;
}

export interface SelectButtonGroupUIProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (optionValue: string) => void;
  fullWidth: boolean;
  colorVariant: 'black' | 'gray';
}
