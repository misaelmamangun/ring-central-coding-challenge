import { TextField } from "@mui/material";

type SearchBarProps = {
  placeholder?: string;
  onSearch: (value: string) => void;
};

export const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};
