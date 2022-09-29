export type TDropdownDetails = {
  colors: string[];
  name: string;
  nameShort: string;
  id: number | null;
};

export type TDropdownItem = {
  id: number;
  name: string;
  details: TDropdownDetails;
};

export interface IAutocompleteProps {
  dropdownList: TDropdownItem[];
  onSelect: (item: TDropdownItem) => void;
}
