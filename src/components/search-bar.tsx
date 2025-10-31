// src/components/search-bar.tsx
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

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
