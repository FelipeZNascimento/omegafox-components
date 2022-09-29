export type TDropdownItem = {
  id: number;
  name: string;
  abbreviationEn: string;
};

export interface IAutocompleteProps {
  dropdownList: TDropdownItem[];
  onSelect: (item: TDropdownItem) => void;
}
